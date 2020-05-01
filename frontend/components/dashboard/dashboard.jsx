import React, { Profiler } from 'react';
import DashInfo from './dash_stock';
import DashGraph from './dash_graph.jsx'
import { fetchDailyPricesAll, fetch5DAll, fetch1MAll, fetch3MAll, fetch1YAll } from '../../util/graph_api_util';
// import FullPageLoading from '../loader/full_page.jsx'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cash: this.props.user[this.props.currentUser].available_cash,
            queryString: "",
            "1D": [],
            "5D": [],
            "1M": [],
            "3M": [],
            "1Y": [],
            period: "",
            open: null,
            close: null,
            change: 0,
            changePercent: 0,
            done: false,
        }
        this.updatePrices = this.updatePrices.bind(this);
        this.renderDay = this.renderDay.bind(this);
        // this.render5D = this.render5D.bind(this);
        // this.render1M = this.render1M.bind(this);
        // this.render1Y = this.render1Y.bind(this);
    }

    componentDidMount(){
        this.props.receiveStocks();
        this.props.findHoldings(this.props.currentUser)
            .then(holdings => {
                Object.values(holdings).forEach((row, idx) => {
                    Object.values(row).forEach((obj, idx2) => {
                        if (obj !== 'FIND_HOLDINGS') {
                            Object.keys(obj).forEach((key, idx3) => {
                                if (key === "stock_ticker") {
                                    this.props.receiveCurrentPrice(obj[key])
                                    if (idx2 !== 0) {
                                        this.state.queryString += ",%20"
                                    }
                                    this.state.queryString += (obj[key])
                                    if (idx2 === 5) {
                                        fetchDailyPricesAll(this.state.queryString).then((response) => this.renderDay(response))
                                    }
                                } 
                            })
                        }
                    });
                });
            });
        this.props.receiveNews();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            this.setState({ done: false })
            this.props.receiveOneNews(this.props.ticker);
            this.props.receiveInfo(this.props.ticker);
            fetchDailyPricesAll(this.props.ticker)
                .then(response => this.renderDay(response))
        };
    };

    componentWillUnmount() {
        this.setState({ done: false })
    };

    renderDay(response) {
        let ticks = Object.keys(response) 
        console.log(ticks)
        console.log(response["FB"].values)

        let defaultValue = 0;
        let proxyHandler = {
            get: (target, name) => name in target ? target[name] : defaultValue
        };
        let underlyingObject = {};
        let priceSums = new Proxy(underlyingObject, proxyHandler);
        let arrConvert = []
        ticks.forEach((sym) => {
            response[sym].values.forEach((entry) => {
                priceSums[entry.datetime] += parseFloat(entry.close)
            })
        })

        let timesPrices = response[ticks[0]].values.map(price => {
            return { time: price.datetime, price: priceSums[price.datetime]}
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response[ticks[0]].values[0].close
        let firstValidIdx = response[ticks[0]].values.length - 1
        let firstOpen = response[ticks[0]].values[firstValidIdx].previous_close
        let minuteNow = response[ticks[0]].values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response[ticks[0]].values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response[ticks[0]].values[0].datetime.split(" ")[0]} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            timesPrices.push({ time: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

        this.setState({
            "1D": timesPrices,
            period: "1D",
            ticker: this.props.ticker,
            open: firstOpen,
            close: lastClose,
            change: parseFloat(lastClose - firstOpen).toFixed(2),
            changePercent: parseFloat(((lastClose - firstOpen) / firstOpen) * 100).toFixed(2),
            done: true,
            colorClass: firstOpen < lastClose ? "activeGreen" : "activeRed",
            color: firstOpen < lastClose ? "#21ce99" : "orangered",
            backgroundColor: firstOpen < lastClose ? "activeGreenBackground" : "activeRedBackground"
        })

    }

    updatePrices(key) {
        if (this.state.period !== key) {
            return e => {
                switch (key) {
                    case '1D':
                        fetchDailyPricesAll(this.state.queryString).then(response => this.renderDay(response))
                        break;
                    case '5D':
                        fetch5DAll(this.state.queryString).then(response => this.render5D(response))
                        break;
                    case '1M':
                        fetch1MAll(this.state.queryString).then(response => this.render1M(response))
                        break;
                    case '3M':
                        fetch3MAll(this.state.queryString).then(response => this.render3M(response))
                        break;
                    case '1Y':
                        fetch1YAll(this.state.queryString).then(response => this.render1Y(response))
                        break;
                }
            }

        }
    }


    render() {
        
        if (Object.values(this.props.holdings).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.price).length === 0) return null;

        let data = this.state[this.state.period];

        let hold = (Object.values(this.props.holdings))
        let arr = []
        hold.forEach((obj) => {
            arr.push(Object.values(obj))
        })
        let myTickers = []
        arr.forEach((subarr) => {
            subarr.forEach((ele) => {
                if (typeof ele === 'string'){
                    myTickers.push(ele)
                }
            })
        })

        let hold2 = (Object.values(this.props.holdings))
        let share_counts = []
        hold2.forEach((pair) => {
                for (var key in pair) {
                    if(key === "share_count"){
                        share_counts.push(pair[key])
                    }
                }
        })

        let prices = this.props.price;
        let holdLength = Object.values(this.props.holdings).length 

        function stockValues(tot){
            myTickers.forEach((tick, idx) => {
                prices.forEach((pair, idx2) => {
                    if(idx2 > holdLength - 1){
                        return tot;
                    }
                    if (pair.symbol === tick) {
                        tot += (pair.price * share_counts[idx])
                        // console.log(tot)
                    }
                })
            })
            return tot;
        };
       
        let sum = stockValues(0) + this.state.cash;

        let newsList = []

        this.props.news.forEach((item, idx) => {
            if (idx < 8){
            newsList.push(
                <a key={idx} target="_blank"  href={`${this.props.news[idx].url}`} className="news-link">
                    <div className="news-div">
                        <div className="news-content">
                            <div className="news-text">
                                <h3 key={idx * 100} className="news-title">{this.props.news[idx].title}</h3>
                            </div>
                            <p key={idx * 1000} className="news-desc">{this.props.news[idx].description}</p>
                        </div>
                        <div className="news-img-holder">
                        <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                        </div>
                    </div>
                </a>
            )
            }
        })


        // if (!this.state.done) {
        //     return <FullPageLoading />
        // }
        
        return (
            <div className="dashboard">
            
                <h1>{sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
                <h5>+/- $___ (__%) today</h5>
 
                <div className="portfolio">
                    <div className="port-left">

                        <DashGraph
                            oldTicker={this.state.oldTicker}
                            tickerSymbol={this.props.ticker}
                            ticker={data}
                            period={this.state.period}
                            open={this.state.open}
                            close={this.state.close}
                            change={this.state.change}
                            changePercent={this.state.changePercent}
                            color={this.state.color}
                        />

                        <div className="periods">
                            {/* <button type="button" className={`period ${this.state.period === "1D" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1D")}>1D</button>
                            <button type="button" className={`period ${this.state.period === "5D" ? this.state.colorClass : ''}`} onClick={this.updatePrices("5D")}>5D</button>
                            <button type="button" className={`period ${this.state.period === "1M" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1M")}>1M</button>
                            <button type="button" className={`period ${this.state.period === "3M" ? this.state.colorClass : ''}`} onClick={this.updatePrices("3M")}>3M</button>
                            <button type="button" className={`period ${this.state.period === "1Y" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1Y")}>1Y</button> */}
                        </div>

                        <h3 className="news-header">Top News:</h3>
                        <div className="dash-news">
                            {newsList}
                        </div>
                    </div>
                    <div className="dash-holdings">

                        <h4 className="cash-header">Cash</h4> 
                        <h3 className="dash-cash">{this.state.cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>

                        <h4 className="stock-header">Stocks</h4>
                        
                        <div className="dash-stocks">
                         
                        {myTickers.map((tick, idx) =>
                            <div key={idx * 50} className="indiv-stock">{<DashInfo ticker={tick} shares={share_counts[idx]} prices={this.props.price} />}</div>
                        )}

                        </div>
                    </div>
                </div>
      
            </div>
            
        )
    }
}

export default Dashboard;