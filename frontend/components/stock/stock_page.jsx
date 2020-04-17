import React from 'react';
import StockInfo from './info'
import StockGraph from './stock_graph';
import { fetchDailyPrices, fetchPrices } from '../../util/graph_api_util';

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
            isLoading: true,
        }; 
        this.updatePrices = this.updatePrices.bind(this);
    };
    
    componentDidMount() {
        this.props.receiveOneNews(this.props.ticker);
        this.props.receiveInfo(this.props.ticker);
        this.props.findHoldings(this.props.currentUser);
        fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response));
    };

    componentDidUpdate(prevProps) {
        let prev = prevProps.ticker || prevProps.match.params.ticker
        if (this.props.ticker !== prev) {
            this.setState({ done: false })
            fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response));
        };
    };

    componentWillUnmount() {
        this.setState({ done: false })
    };

    renderDay(response) {
        const day = response.map(price => {
            return { label: price.label, price: price.close }
        })

        let prevIdx = response.length - 1
        while (response[prevIdx].close === null) {
            prevIdx -= 1
        }
        let lastClose = response[prevIdx].close

        let firstValidIdx = 0
        while (response[firstValidIdx].close === null) {
            firstValidIdx += 1
        }
        let firstOpen = response[firstValidIdx].open


        let minuteNow = response[prevIdx].minute
        let dateNow = new Date(Date.parse(`${response[prevIdx].date} ${minuteNow}`))
        let closeTime = "16:00"
        let closeDate = new Date(Date.parse(`${response[prevIdx].date} ${closeTime}`))

        while (dateNow < closeDate) {
            dateNow = new Date(dateNow.setMinutes(dateNow.getMinutes() + 1))
            day.push({ label: dateNow.toLocaleTimeString([], { timeStyle: 'short' }), price: null })
        }

        this.setState({
            "1D": day,
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

    renderPrices(response, time) {
        const data = response.map(price => {

            return {
                price: price.close,
                date: (time === "3M" || time === "1Y") ? price.date : new Date(Date.parse(`${price.date} ${price.label}`)).toLocaleString('en-US'),
                open: price.open,
                change: price.change,
                changePercent: price.changePercent
            }
        })

        this.setState({
            ticker: this.props.ticker,
            [time]: data,
            period: time,
            open: response[0].open,
            close: response[response.length - 1].close,
            change: response[response.length - 1].change,
            changePercent: response[response.length - 1].changePercent,
            backgroundColor: response[0].open < response[response.length - 1].close ? "activeGreenBackground" : "activeRedBackground",
            colorClass: response[0].open < response[response.length - 1].close ? "activeGreen" : "activeRed",
            color: response[0].open < response[response.length - 1].close ? "#21ce99" : "#f45531",
        });
    }

    updatePrices(period) {
        if (this.state.period !== period) {
            return e => {
                period === "1D" ? fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response)) : fetchPrices(this.props.ticker, period).then(response => this.renderPrices(response, period))
            }

        }
    }

    

    render(){
       
        if (Object.values(this.props.info).length === 0) return null;
        if (this.props.news === undefined) return null;

        const period = Object.keys(this.state).map(key => {
            if (key === "1D" || key === "5D" || key === "1M" || key === "3M" || key === "1Y" ) {
                return <button className={`period ${this.state.period === key ? this.state.colorClass : ''}`} key={`${key}-id`} onClick={this.updatePrices(key)} >{key.slice(0, 2).toUpperCase()}</button>
            };
        });

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
                                    {/* <p key={idx} className="news-site">{this.props.news[idx].source.name}</p> */}
                                </div>
                                <p key={idx * 100} className="news-desc">{this.props.news[idx].description}</p>
                            </div>
                            <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                        </div>
                    </a>
                )
            }
        });
        

        return(
            <div className="stock-page">
                
            <div className="stock-left">

                <div className="stock-title">
                    <h2>{this.props.info.profile.companyName}</h2>
                </div>

              <h1>${this.props.info.profile.price.toLocaleString()}</h1>

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

                <p>{this.state.period} chart</p>
                <div>{period}</div>

              {/* <div className="holding-data">Your equity & average cost will be displayed here</div> */}

                <div className="stock-page-info">{<StockInfo profile={this.props.info.profile}/>}</div>

                <h3 className="news-header-indiv">Top News:</h3>
                <div className="dash-news">
                    {newsList}
                </div>

            </div>
            

                <div className="holdings-bar">
                    <h4>Buy / Sell</h4>
                    <input type="text" placeholder="Number of Shares"/>
                </div>

               
            </div>
        )
    }

    
}

export default StockPage;