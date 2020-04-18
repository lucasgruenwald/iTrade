import React, { Profiler } from 'react';
// import { Link } from 'react-router-dom';
import DashInfo from './dash_stock';
import DashGraphContainer from './dash_graph_container.jsx'
// import {fetchInfo} from '../../util/stock_show_util'
// import {receiveInfo} from '../../actions/stock'
// import NavContainer from '../nav/nav_container'

// import News from './news/news';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
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

        console.log(this.props.price)
        
        if (Object.values(this.props.holdings).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.price).length === 0) return null;


        let hold = (Object.values(this.props.holdings))
        let arr = []
        hold.forEach((obj) => {
            arr.push(Object.values(obj))
        })
        let tickers = []
        arr.forEach((subarr) => {
            subarr.forEach((ele) => {
                if (typeof ele === 'string'){
                    tickers.push(ele)
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

        let priceObj = this.props.price

        let newsList = []

        this.props.news.forEach((item, idx) => {
            if (idx < 8){
            newsList.push(
                <a key={idx} target="_blank"  href={`${this.props.news[idx].url}`} className="news-link">
                    <div className="news-div">
                        <div className="news-content">
                            <div className="news-text">
                                <h3 key={idx * 100} className="news-title">{this.props.news[idx].title}</h3>
                                {/* <p key={idx} className="news-site">{this.props.news[idx].source.name}</p> */}
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
            
                <h1>$ Portfolio Balance</h1>
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
                    <div className="dash-holdings">Cash 
                        <h2 className="dash-cash">$ Cash Balance</h2>

                        <h4>Stocks</h4>
                        
                        <div className="dash-stocks">
                         
                        {tickers.map((tick, idx) =>
                            <div key={idx*50} className="indiv-stock">{<DashInfo ticker={tick} shares={share_counts[idx]} prices={priceObj} />}</div>
                        )}

                        </div>
                    </div>
                </div>
      
            </div>
            
        )
    }
}

export default Dashboard;