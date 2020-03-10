import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {

        return (
            <div className="dashboard">
                <h1>$147,361.19</h1>
                <div className="portfolio">
                    <div className="port-left">
                    <p className="dash-graph">graph goes here</p>
                    <p className="dash-news">news articles go here</p>
                    </div>
                    <div className="dash-holdings">Cash 
                        <h4>$27,708.52</h4>

                        <div className="dash-stocks">
                        <h3><Link to="/stock/AAPL" className="stock-link">AAPL (Apple)</Link></h3>
                        <h3><Link to="/stock/AMZN" className="stock-link">AMZN (Amazon)</Link></h3>
                        <h3><Link to="/stock/FB" className="stock-link">FB (Facebook)</Link></h3>
                        <h3><Link to="/stock/GOOG" className="stock-link">GOOG (Alphabet)</Link></h3>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;