import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../stock/info'

class Dashboard extends React.Component {

    render() {

        return (
            <div className="dashboard">
                <h1>$147,361.19</h1>
                <div className="portfolio">
                    <div className="port-left">
                    <p className="dash-graph">graph goes here</p>
                    <div className="dash-news">news articles go here</div>
                    </div>
                    <div className="dash-holdings">Cash 
                        <h2 className="dash-cash">$27,708.52</h2>

                        <div className="dash-stocks">

                        <div className="indiv-stock">
                            <div className="flex">
                                <h3><Link to="/stock/TSLA" className="stock-link">TSLA (Tesla)</Link></h3>
                                <p>$658.12</p>
                            </div>
                            <p className="dash-numshares">80 Shares</p> 
                        {/* <p>{<Info profile={this.props.info.profile.price.toLocaleString()}/>}</p> */}
                        </div>

                        <div className="indiv-stock">
                            <div className="flex">
                                <h3><Link to="/stock/AAPL" className="stock-link">AAPL (Apple)</Link></h3>
                                <p>$289.81</p>
                            </div>
                            <p className="dash-numshares">45 Shares</p>
                        </div>

                        <div className="indiv-stock">
                            <div className="flex">
                                <h3><Link to="/stock/AMZN" className="stock-link">AMZN (Amazon)</Link></h3>
                                <p>$1,107.64</p>
                            </div>
                            <p className="dash-numshares">20 Shares</p>
                        </div>

                        
                        <h3><Link to="/stock/FB" className="stock-link">FB (Facebook)</Link></h3>
                        <h3><Link to="/stock/GOOG" className="stock-link">GOOG (Alphabet)</Link></h3>
                        <h3><Link to="/stock/MSFT" className="stock-link">MSFT (Microsoft)</Link></h3>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;