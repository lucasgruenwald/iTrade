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
        // getting share_count from props above saved to 'share_counts' array

        // let prices = []
        // tickers.forEach((ticker) => {
        //     // let obj = 
        //     prices.push

        // })
        

        
        return (
            <div className="dashboard">
                <h1>$87,361.19</h1>
                
                {/* <h1>{tickers.map((ticker) => 
                    <li>{this.props.receiveInfo(ticker).profile.price}</li>
                )}</h1> */}
 
                <div className="portfolio">
                    <div className="port-left">
                    <p className="dash-graph">graph goes here</p>
                    <div className="dash-news">news articles go here</div>
                    </div>
                    <div className="dash-holdings">Cash 
                        <h2 className="dash-cash">$23,708.52</h2>

                        <div className="dash-stocks">


                        <h3>You currently own:</h3>
                         
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