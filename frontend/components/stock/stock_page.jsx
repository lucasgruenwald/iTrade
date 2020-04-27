import React from 'react';
import StockInfo from './info'
import StockGraph from './stock_graph';
import TransactionContainer from './transaction_container';
import { fetchDailyPrices, fetch5D, fetch1M, fetch3M, fetch1Y } from '../../util/graph_api_util';
import FullPageLoading from "../loader/full_page.jsx"

class StockPage extends React.Component {
    
    constructor(props) {
    
        super(props);
        this.state = {
            ticker: "",
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
        }; 
        this.updatePrices = this.updatePrices.bind(this);
        this.renderDay = this.renderDay.bind(this);
        this.render5D = this.render5D.bind(this);
        this.render1M = this.render1M.bind(this);
        this.render1Y = this.render1Y.bind(this);
    };
    
    componentDidMount() {
        fetchDailyPrices(this.props.ticker).then((response) => this.renderDay(response));
        this.props.receiveOneNews(this.props.ticker);
        this.props.receiveInfo(this.props.ticker);
        this.props.findHoldings(this.props.currentUser);
    };

    componentDidUpdate(prevProps) {
        let prev = prevProps.ticker || prevProps.match.params.ticker
        if (this.props.ticker !== prev) {
            this.setState({ done: false })
            fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response))
                // .then (this.props.receiveOneNews(this.props.ticker))
                // .then (this.props.receiveInfo(this.props.ticker));
        };
    };

    componentWillUnmount() {
        this.setState({ done: false })
    };

    renderDay(response) {

        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: price.close };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length-1
        let firstOpen = response.values[firstValidIdx].previous_close
        let minuteNow = response.values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${closeTime}`))

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

    render5D(response) {
        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: price.close };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        let minuteNow = response.values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            timesPrices.push({ time: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

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

    }

    render1M(response) {
        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: price.close };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        let minuteNow = response.values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            timesPrices.push({ time: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

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

    }

    render3M(response) {
        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: price.close };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        let minuteNow = response.values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            timesPrices.push({ time: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

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

    }

    render1Y(response) {

        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: price.close };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        let minuteNow = response.values[0].datetime.split(" ")[1]
        let dateNow = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${minuteNow}`))
        let closeTime = "12:59:00"
        let closeDate = new Date(Date.parse(`${response.values[0].datetime.split(" ")[0]} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            timesPrices.push({ time: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

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

    }

    updatePrices(key) {
        if (this.state.period !== key) {
            return e => {
                switch (key) {
                    case '1D':  
                        fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response)) 
                        break;
                    case '5D':  
                        fetch5D(this.props.ticker).then(response => this.render5D(response))
                        break;
                    case '1M': 
                        fetch1M(this.props.ticker).then(response => this.render1M(response))
                        break;
                    case '3M': 
                        fetch3M(this.props.ticker).then(response => this.render3M(response))
                        break;
                    case '1Y': 
                        fetch1Y(this.props.ticker).then(response => this.render1Y(response))
                        break;
                }
            }

        }
    }
 
    render(){
       
        if (Object.values(this.props.info).length === 0) return null;
        if (this.props.news === undefined) return null;
        if (this.state.period === undefined) return null;

        let data = this.state[this.state.period];

        let newsList = newsList || [];

        this.props.news.forEach((item, idx) => {
            if (idx < 5) {
                newsList.push(
                    <a key={idx} target="_blank" href={`${this.props.news[idx].url}`} className="news-link">
                        <div className="news-div-indiv">
                            <div className="news-content">
                                <div className="news-text">
                                    <h3 key={idx * 10} className="news-title">{this.props.news[idx].title}</h3>
                                </div>
                                <p key={idx * 100} className="news-desc">{this.props.news[idx].description}</p>
                            </div>
                            <div className="news-img-holder">
                            <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                            </div>
                        </div>
                    </a>
                )
            }
        });

        if (!this.state.done){
            return <FullPageLoading/>
        }

        return(
            <div className="stock-page">
                
            <div className="stock-left">

                <div className="stock-title">
                    <h2>{this.props.info.profile.companyName}</h2>
                </div>

                    <h1 className="stock-page-price">
                        {this.props.info.profile.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </h1>

                <StockGraph
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
                    <button type="button" className={`period ${this.state.period === "1D" ? this.state.colorClass : ''}`} onClick={ this.updatePrices("1D") }>1D</button>
                    <button type="button" className={`period ${this.state.period === "5D" ? this.state.colorClass : ''}`} onClick={ this.updatePrices("5D") }>5D</button>
                    <button type="button" className={`period ${this.state.period === "1M" ? this.state.colorClass : ''}`} onClick={ this.updatePrices("1M") }>1M</button>
                    <button type="button" className={`period ${this.state.period === "3M" ? this.state.colorClass : ''}`} onClick={ this.updatePrices("3M") }>3M</button>
                    <button type="button" className={`period ${this.state.period === "1Y" ? this.state.colorClass : ''}`} onClick={ this.updatePrices("1Y") }>1Y</button>
                </div>

                <div className="stock-page-info">{<StockInfo profile={this.props.info.profile}/>}</div>

                <h3 className="news-header-indiv">Top News:</h3>
                <div className="dash-news">
                    {newsList}
                </div>

            </div>

                <TransactionContainer profile={this.props.ticker}/>

            </div>
        )
    }
}

export default StockPage;