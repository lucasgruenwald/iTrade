import React, { Profiler } from 'react';
import DashInfo from './dash_stock';
import DashGraphContainer from './dash_graph_container.jsx'


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cash: this.props.user[this.props.currentUser].available_cash
        }
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
                                }
                            });
                        }
                    });
                });
            });
        this.props.receiveNews();
    }


    render() {
        
        if (Object.values(this.props.holdings).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.price).length === 0) return null;


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

        let sum = 0 + this.state.cash
        // let priceMap = this.props.prices
        // priceMap.forEach((ele, idx) => {
        //     let price = obj.price 
        //     let count = share_counts[idx]
        //     sum += (obj.price * count)
        // })



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


         
        
        return (
            <div className="dashboard">
            
                <h1>{sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
                <h5>+/- $___ (__%) today</h5>
 
                <div className="portfolio">
                    <div className="port-left">

                        <h3 className="graph-placeholder">---For now, see individual stock pages for graphs---</h3>

                        <DashGraphContainer/>

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