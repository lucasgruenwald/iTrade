import React, { Profiler } from 'react';
import DashInfo from './dash_stock';
import DashGraph from './dash_graph.jsx'
import { fetchDailyPricesAll, fetch5DAll, fetch1MAll, fetch3MAll, fetch1YAll } from '../../util/graph_api_util';
import FullPageLoading from '../loader/full_page.jsx'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cash: this.props.user[this.props.currentUser].available_cash,
            queryString: "",
            holdingCount: {},
            "1D": [],
            "5D": [],
            "1M": [],
            "3M": [],
            "1Y": [],
            period: "",
            open: 0,
            close: 0,
            change: 0,
            changePercent: 0,
            done: false,
        }
        this.updatePrices = this.updatePrices.bind(this);
        this.renderDay = this.renderDay.bind(this);
        this.createQuery = this.createQuery.bind(this);
        this.stockDivs = this.stockDivs.bind(this);
    }

    componentDidMount(){
        this.props.receiveStocks();
        this.props.findHoldings(this.props.currentUser)
            .then((holdings) =>
            this.createQuery(holdings)
            )
        this.props.receiveNews();
    }

    // componentDidUpdate(prevProps) {
        // if (this.props.match.params.ticker !== prevProps.match.params.ticker){
        //     this.setState({ done: false })
        //     // this.props.receiveOneNews(this.props.ticker);
        //     // this.props.receiveInfo(this.props.ticker);
        //     if ((this.props.holdings).length > 0){
        //         fetchDailyPricesAll(this.props.ticker).then((response) => {
        //             this.renderDay(response)});
        //     }
        // };
    // };

    componentWillUnmount() {
        this.setState({ done: false })
    };

    createQuery(holdings){
        if (Object.values(this.props.holdings).length > 0){
            // -prevents forEach error with no holding
            Object.values(holdings).forEach((row, idx) => {
                Object.values(row).forEach((obj, idx2) => {
                    if (obj !== 'FIND_HOLDINGS') {
                        Object.keys(obj).forEach((key, idx3) => {
                            if (key === "stock_ticker") {
                                this.state.holdingCount[obj.stock_ticker] = obj.share_count
                                this.props.receiveCurrentPrice(obj[key])
                                if (idx2 !== 0) {
                                    this.state.queryString += ",%20"
                                }
                                this.state.queryString += (obj[key])
                            }
                        })
                    }
                });
            });
            fetchDailyPricesAll(this.state.queryString)
                .then((response) => this.renderDay(response))
        } 
    }

    renderDay(response, timespan) {
        let ticks = Object.keys(response) 

        let defaultValue = 0;
        let proxyHandler = {
            get: (target, name) => name in target ? target[name] : defaultValue
        };
        let underlyingObject = {};
        let priceSums = new Proxy(underlyingObject, proxyHandler);

        let defaultValue2 = 0;
        let proxyHandler2 = {
            get: (target, name) => name in target ? target[name] : defaultValue2
        };
        let underlyingObject2 = {};
        let idxHashCount = new Proxy(underlyingObject2, proxyHandler2);

        let dateTimes = []
        ticks.forEach((sym) => {
            if (Object.values(this.props.holdings).length > 1){
                response[sym].values.forEach((entry, idx) => {
                    let totalShareValue = (parseFloat(entry.close) * this.state.holdingCount[sym])
                    priceSums[entry.datetime] += totalShareValue
                    idxHashCount[entry.datetime] += 1
                    if (!dateTimes.includes(entry.datetime)) {
                        dateTimes.push(entry.datetime)
                    }
                })  
            } else {
                response.values.forEach((entry, idx) => {
                    let totalShareValue = (parseFloat(entry.close) * this.state.holdingCount[sym])
                    priceSums[entry.datetime] += totalShareValue
                    idxHashCount[entry.datetime] += 1
                    if (!dateTimes.includes(entry.datetime)) {
                        dateTimes.push(entry.datetime)
                    }
                })  
            }
           
        })
        let timesPrices
        let lastClose
        let firstValidIdx
        let minuteNow
        if (Object.values(this.props.holdings).length > 1) {
            timesPrices = response[ticks[0]].values.map((price, idx) => {
                if (idxHashCount[price.datetime] === ticks.length) {
                    return { time: price.datetime, price: priceSums[price.datetime] }
                }
            })
            lastClose = priceSums[response[ticks[0]].values[0].datetime]
            firstValidIdx = response[ticks[0]].values.length - 1
            minuteNow = response[ticks[0]].values[0].datetime.split(" ")[1]
        } else {
            timesPrices = response.values.map((price, idx) => {
                if (idxHashCount[price.datetime] === ticks.length) {
                    return { time: price.datetime, price: priceSums[price.datetime] }
                }
            })
            lastClose = priceSums[response.values[0].datetime]
            firstValidIdx = response.values.length - 1
            minuteNow = response.values[0].datetime.split(" ")[1]
        }
        
        // graph not showing correct %? Add more conditions here for firstOpen
        // firstValidIdx - 7 works for now unless API changes
        let firstOpen
        // if(priceSums[timesPrices[firstValidIdx - 8]]){
        //     firstOpen = priceSums[timesPrices[firstValidIdx - 8].time]
        // } else if (priceSums[timesPrices[firstValidIdx - 10]]) {
        //     firstOpen = priceSums[timesPrices[firstValidIdx - 10].time]
        // } else if (priceSums[timesPrices[firstValidIdx - 12]]) {
        //     firstOpen = priceSums[timesPrices[firstValidIdx - 12].time]
        // } else if (priceSums[timesPrices[firstValidIdx - 15]]) {
            firstOpen = priceSums[timesPrices[firstValidIdx - 15].time]
        // } else if (priceSums[timesPrices[firstValidIdx - 20]]) {
        //     firstOpen = priceSums[timesPrices[firstValidIdx - 20].time]
        // }

        timesPrices = timesPrices.reverse()
        
        // let dateNow = new Date(Date.parse(`${response[ticks[0]].values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        // let closeDate = new Date(Date.parse(`${response[ticks[0]].values[0].datetime.split(" ")[0]} ${closeTime}`))

        if (timespan === "1Y") {
        this.setState({
            "1Y": timesPrices,
            period: "1Y",
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
        } else if (timespan === "5D"){
            this.setState({
                "5D": timesPrices,
                period: "5D",
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
        } else if (timespan === "1M") {
            this.setState({
                "1M": timesPrices,
                period: "1M",
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
        } else if (timespan === "3M") {
            this.setState({
                "3M": timesPrices,
                period: "3M",
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
        } else {
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

    }

    updatePrices(key) {
        if (this.state.period !== key) {
            return e => {
                switch (key) {
                    case '1D':
                        fetchDailyPricesAll(this.state.queryString).then(response => this.renderDay(response, "1D"))
                        break;
                    case '5D':
                        fetch5DAll(this.state.queryString).then(response => this.renderDay(response, "5D"))
                        break;
                    case '1M':
                        fetch1MAll(this.state.queryString).then(response => this.renderDay(response, "1M"))
                        break;
                    case '3M':
                        fetch3MAll(this.state.queryString).then(response => this.renderDay(response, "3M"))
                        break;
                    case '1Y':
                        fetch1YAll(this.state.queryString).then(response => this.renderDay(response, "1Y"))
                        break;
                }
            }

        }
    }

    stockDivs(){
        return Object.values(this.props.holdings).map((hash, idx) =>
            <div key={idx * 50} className="indiv-stock">{
                <DashInfo
                    ticker={hash.stock_ticker}
                    shares={hash.share_count}
                    prices={this.props.price} />}
            </div>
        )
    }

    render() {
        
        if (!this.state.done) {
            return <FullPageLoading />
        }
        
        if (Object.values(this.props.holdings).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.price).length === 0) return null;

        let data = this.state[this.state.period];
// 
        // let myTickers = []
        // let share_counts = []

        // if (Object.values(this.props.holdings).length > 0) {

        //     let hold = (Object.values(this.props.holdings))
        //     let arr = []
        //     hold.forEach((obj) => {
        //         arr.push(Object.values(obj))
        //     })

        //     arr.forEach((subarr) => {
        //         subarr.forEach((ele) => {
        //             if (typeof ele === 'string') {
        //                 myTickers.push(ele)
        //             }
        //         })
        //     })

        //     let hold2 = (Object.values(this.props.holdings))
        //     hold2.forEach((pair) => {
        //         for (var key in pair) {
        //             if (key === "share_count") {
        //                 share_counts.push(pair[key])
        //             }
        //         }
        //     })
        // } 
        
        let newsList = []
        let filterDesc
        
        this.props.news.forEach((item, idx) => {
            if (idx < 8 && (this.props.news[idx].urlToImage !== null)) {
                if (this.props.news[idx].description !== null) {
                    filterDesc = (this.props.news[idx].description).replace(/<[^>]*>?/gm, '');
                } else {
                    filterDesc = this.props.news[idx].description
                }
                newsList.push(
                    <a key={idx} target="_blank" href={`${this.props.news[idx].url}`} className="news-link">
                        <div className="news-div">
                            <div className="news-content">
                                <div className="news-text">
                                    <h3 key={idx * 100} className="news-title">{this.props.news[idx].title}</h3>
                                </div>
                                <p key={idx * 1000} className="news-desc">{filterDesc}</p>
                            </div>
                            <div className="news-img-holder">
                                <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                            </div>
                        </div>
                    </a>
                )
            }
        })

        if (newsList.length < 1){
            newsList.push(
            <a key={1} className="news-link">
                    <h3 key={1 * 100} style={{ paddingLeft: "50px"}} className="news-title">News API Daily Limit Reached</h3>
                    <p key={1 * 1000} style={{paddingLeft: "50px", paddingBottom: "500px"}} className="news-desc">Sorry about that! -Luke Gruenwald</p>
            </a>
            )
        }

 
        return (
            <div className="dashboard">

                <div className="portfolio">
                    <div className="port-left">

                        <DashGraph
                            oldTicker={this.state.oldTicker}
                            tickerSymbol={this.props.ticker}
                            ticker={data}
                            cash={this.state.cash}
                            period={this.state.period}
                            open={this.state.open}
                            close={this.state.close}
                            change={this.state.change}
                            changePercent={this.state.changePercent}
                            color={this.state.color}
                        />

                        <div className="periods-dash">
                            <button type="button" className={`period ${this.state.period === "1D" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1D")}>1D</button>
                            <button type="button" className={`period ${this.state.period === "5D" ? this.state.colorClass : ''}`} onClick={this.updatePrices("5D")}>5D</button>
                            <button type="button" className={`period ${this.state.period === "1M" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1M")}>1M</button>
                            <button type="button" className={`period ${this.state.period === "3M" ? this.state.colorClass : ''}`} onClick={this.updatePrices("3M")}>3M</button>
                            <button type="button" className={`period ${this.state.period === "1Y" ? this.state.colorClass : ''}`} onClick={this.updatePrices("1Y")}>1Y</button>
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
                        
                      
                        {this.stockDivs()}

                        </div>
                    </div>
                </div>
      
            </div>
            
        )
    }
}

export default Dashboard;