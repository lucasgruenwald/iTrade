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
            "5Y": [],
            period: "",
            open: null,
            close: null,
            change: 0,
            changePercent: 0,
            done: false,
            isLoading: true
        }; 
        this.updatePrices = this.updatePrices.bind(this);
    };
    
    componentDidMount() {
        this.props.receiveInfo(this.props.ticker);
        this.props.findHoldings(this.props.currentUser);
        fetchDailyPrices(this.props.ticker).then(response => this.renderDaily(response));
    };

    componentDidUpdate(prevProps) {
        let prev = prevProps.ticker || prevProps.match.params.ticker
        if (this.props.ticker !== prev) {
            this.setState({ done: false })
            fetchDailyPrices(this.props.ticker).then(response => this.renderDaily(response));
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

    renderPrices(response, timeFrame) {
        const data = response.map(price => {

            return {
                price: price.close,
                date: new Date(Date.parse(`${price.date} ${price.label}`)).toLocaleString('en-US'),
                open: price.open,
                change: price.change,
                changePercent: price.changePercent
            }
        })

        this.setState({
            ticker: this.props.ticker,
            [timeFrame]: data,
            period: timeFrame,
            open: response[0].open,
            close: response[response.length - 1].close,
            change: response[response.length - 1].change,
            changePercent: response[response.length - 1].changePercent,
            backgroundColor: response[0].open < response[response.length - 1].close ? "activeGreenBackground" : "activeRedBackground",
            colorClass: response[0].open < response[response.length - 1].close ? "activeGreen" : "activeRed",
            color: response[0].open < response[response.length - 1].close ? "#21ce99" : "#f45531",
        });
    }

    render(){
       
        if (Object.values(this.props.info).length === 0) return null;

        return(
            <div className="stock-page">
                
            <div className="stock-left">

            <div className="stock-title">
                <h2>{this.props.info.profile.companyName}</h2>
            </div>

            {/* <h2>{this.props.holdings}</h2> */}

            <h1>${this.props.info.profile.price.toLocaleString()}</h1>

            <StockGraph/>

            <div className="holding-data">Your equity & average cost will be displayed here</div>

            <div className="stock-page-info">{<StockInfo profile={this.props.info.profile}/>}</div>

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