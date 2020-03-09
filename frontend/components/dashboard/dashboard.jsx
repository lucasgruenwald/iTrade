import React from 'react';


class Dashboard extends React.Component {

    render() {

        return (
            <div className="dashboard">
                <p>  User dashboard components start here!</p>
                <div className="portfolio">
                    <p className="dash-graph">graph goes here</p>
                    <p className="dash-holdings">holdings go here</p>
                </div>
                <p className="dash-news">news articles go here</p>
            </div>
        )
    }
}

export default Dashboard;