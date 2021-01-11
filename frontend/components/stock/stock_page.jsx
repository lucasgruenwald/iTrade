import React from 'react';
import StockInfo from './info'
import StockGraph from './stock_graph';
import TransactionContainer from './transaction_container';
import { fetchDailyPrices, fetch5D, fetch1M, fetch3M, fetch1Y } from '../../util/graph_api_util';
import FullPageLoading from "../loader/full_page.jsx"
import NoStockWarning from "../loader/no_stock.jsx"

class StockPage extends React.Component {
    
    constructor(props) {
    
        super(props);
        this.state = {
            ticker: this.props.ticker,
            holdingId: "",
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
            noStock: false
        }; 
        this.updatePrices = this.updatePrices.bind(this);
        this.renderDay = this.renderDay.bind(this);
        this.render5D = this.render5D.bind(this);
        this.render1M = this.render1M.bind(this);
        this.render1Y = this.render1Y.bind(this);
    };
    
    componentDidMount() {
        this.props.receiveOneNews(this.props.ticker)
        this.props.receiveInfo(this.props.ticker)
        fetchDailyPrices(this.props.ticker)
            .then((response) => {
                if (response.values) {
                    this.renderDay(response)
                    this.setState({
                        noStock: false
                    })
                } else {
                    this.setState({
                        noStock: true
                    })
                }
            })
        // .then(() => this.setState({ done: true }))
        let holding = {
            user_id: this.props.currentUser,
            ticker: this.props.ticker
        }
        this.props.getPosition(holding)
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            this.setState({ done: false })
            this.props.receiveOneNews(this.props.ticker);
            this.props.receiveInfo(this.props.ticker);
            fetchDailyPrices(this.props.ticker)
                .then(response => 
                    {if (response.values) {
                        this.renderDay(response)
                        this.setState({
                            noStock: false
                        })
                    } else {
                        this.setState({
                            noStock: true
                        })
                    }
                    }
                )
            let holding = {
                user_id: this.props.currentUser,
                ticker: this.props.ticker
            }
            this.props.getPosition(holding)
        };
    };

    UNSAFE_componentWillMount(){
        this.setState({ done: false })
    }

    componentWillUnmount() {
        // this.setState({ done: false })
    };

    renderDay(response) {

        let timesPrices = response.values.map(price => {
            return { time: price.datetime, price: parseFloat(price.close) };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length-1
        let firstOpen = response.values[firstValidIdx].previous_close

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
            return { time: price.datetime, price: parseFloat(price.close) };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        

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
            return { time: price.datetime, price: parseFloat(price.close) };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close

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
            return { time: price.datetime, price: parseFloat(price.close) };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close
        

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
            return { time: price.datetime, price: parseFloat(price.close) };
        })

        timesPrices = timesPrices.reverse()
        let lastClose = response.values[0].close
        let firstValidIdx = response.values.length - 1
        let firstOpen = response.values[firstValidIdx].previous_close

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
        if (this.state.noStock){
            return <NoStockWarning />
        }
        if (!this.state.done) {
            return <FullPageLoading />
        }

        let data = this.state[this.state.period];
        
        let newsList = newsList || [];
        let filterDesc

        this.props.news.forEach((item, idx) => {
            if (idx < 5 && (this.props.news[idx].urlToImage !== null)) {
                // let filterDesc = (this.props.news[idx].description).replace(/<[^>]*>?/gm, '');
                if (this.props.news[idx].description !== null) {
                    filterDesc = (this.props.news[idx].description).replace(/<[^>]*>?/gm, '');
                } else {
                    filterDesc = this.props.news[idx].description
                }
                newsList.push(
                    <a key={idx} target="_blank" href={`${this.props.news[idx].url}`} className="news-link">
                        <div className="news-div-indiv">
                            <div className="news-content">
                                <div className="news-text">
                                    <h3 key={idx * 10} className="news-title">{this.props.news[idx].title}</h3>
                                </div>
                                <p key={idx * 100} className="news-desc">{filterDesc}</p>
                            </div>
                            <div className="news-img-holder">
                            <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                            </div>
                        </div>
                    </a>
                )
            }
        });

        if (newsList.length < 1) {
            newsList.push(
                <a key={1} className="news-link">
                    <h3 key={1 * 100} className="news-title">News API Daily Limit Reached</h3>
                    <p key={1 * 1000} className="news-desc">Sorry about that! -Luke Gruenwald</p>
                </a>
            )
        }

        // if (!this.state.done){
        //     return <FullPageLoading/>
        // }
        
        return(
            <div className="stock-page">
                
            <div className="stock-left">

                <div className="stock-title">
                    <h2>{this.props.info.profile.companyName}</h2>
                </div>

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
                <div className="stock-news">
                    {newsList}
                </div>

            </div>

            <div className="transaction-margin">
                <TransactionContainer stock_ticker={this.props.ticker} holdingId={this.props.holdings.id} price={this.props.info.profile.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
            </div>

            </div>
        )
    }
}

export default StockPage;