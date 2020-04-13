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
        this.props.findHoldings(this.props.currentUser);
        this.props.receiveNews();
    }


    render() {
        
        if (Object.values(this.props.holdings).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
        if (Object.values(this.props.stocks).length === 0) return null;
      
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

        let newsList = []

        this.props.news.forEach((item, idx) => {
            if (idx < 8){
            newsList.push(
                <a target="_blank" href={`${this.props.news[idx].url}`} className="news-link">
                    <div className="news-div">
                        <div className="news-content">
                            <div className="news-text">
                                <h3 key={idx + 30} className="news-title">{this.props.news[idx].title}</h3>
                                {/* <p key={idx} className="news-site">{this.props.news[idx].source.name}</p> */}
                            </div>
                            <p key={idx + 60} className="news-desc">{this.props.news[idx].description}</p>
                        </div>
                        <img className="news-img" src={`${this.props.news[idx].urlToImage}`} />
                    </div>
                </a>
            )
            }
        })
         
        
        return (
            <div className="dashboard">
            
                <h1>$ Portfolio Balance</h1>
                <h5>+/- $___ (__%) today</h5>
                {/* <h1>{tickers.map((ticker) => 
                    <li>{this.props.receiveInfo(ticker).profile.price}</li>
                )}</h1> */}
 
                <div className="portfolio">
                    <div className="port-left">
                        {/* <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/89853789_10158012842043427_7164842251091181568_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_oc=AQn8d5XZLyw9yTFHBxSwuQoCkWR_5ds_yEvXMyXgzQmIb0PFiUWRJyS3YFLqa6wWj9c&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=1cb29fa250d69a11f3e6063a35f1e1e3&oe=5E93175A" 
                        alt=""
                        className="graph-img"
                        /> */}
                        <h3 className="graph-placeholder">---For now, see individual stock pages for graphs---</h3>

                        <DashGraphContainer/>

                        <h3 className="news-header">Top News:</h3>
                        <div className="dash-news">
                            {newsList}
                        </div>
                    </div>
                    <div className="dash-holdings">Cash 
                        <h2 className="dash-cash">$ Cash Balance</h2>
                        
                        <div className="dash-stocks">


                        <h4>Stocks</h4>
                         
                        {tickers.map((tick, idx) =>
                            <div className="indiv-stock">{<DashInfo ticker={tick} shares={share_counts[idx]}/>}</div>
                        )}

                        </div>
                    </div>
                </div>
      
            </div>
            
        )
    }
}

export default Dashboard;