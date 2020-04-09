import React, { Profiler } from 'react';
import { Link } from 'react-router-dom';
import DashInfo from './dash_stock';
import {fetchInfo} from '../../util/stock_show_util'
import {receiveInfo} from '../../actions/stock'

// import News from './news/news';

class Dashboard extends React.Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.findHoldings(this.props.currentUser)
    }

   

    render() {
        
     
        if (Object.values(this.props.holdings).length === 0) return null;
      
        // getting the tickers from props below 
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
        // getting tickers from props above saved to 'tickers' array

        // getting the share_count from props below 
        let hold2 = (Object.values(this.props.holdings))
        let share_counts = []
 
        hold2.forEach((pair) => {
                for (var key in pair) {
                    if(key === "share_count"){
                        share_counts.push(pair[key])
                    }
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
                    {/* <p className="dash-graph">graph goes here</p> */}
                        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/89853789_10158012842043427_7164842251091181568_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_oc=AQn8d5XZLyw9yTFHBxSwuQoCkWR_5ds_yEvXMyXgzQmIb0PFiUWRJyS3YFLqa6wWj9c&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=1cb29fa250d69a11f3e6063a35f1e1e3&oe=5E93175A" 
                        alt=""
                        className="graph-img"
                    />
                    <div className="dash-news">news articles go here</div>
                    </div>
                    <div className="dash-holdings">Cash 
                        <h2 className="dash-cash">$ Cash Balance</h2>
                        
                        <div className="dash-stocks">


                        <h3>Holdings:</h3>
                         
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