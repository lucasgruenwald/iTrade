import React from 'react';
import StockInfo from './info'

class StockPage extends React.Component {
    
    constructor(props) {
    
        super(props);
        this.state = {
            ticker: ""
        } 
    }

    componentDidMount() {
        this.props.receiveInfo(this.props.ticker);
    }


    render(){
       
        if (Object.values(this.props.info).length === 0) return null;
        return(
            <div className="stock-page">

            <div className="stock-left">

            <div className="stock-title">
                <h2>{this.props.info.profile.companyName}</h2>
            </div>

            <h1>${this.props.info.profile.price.toLocaleString()}</h1>

            {/* <div className="holdings-bar">
                <h4>Holdings</h4>
                <p></p>
            </div> */}

            <img src="https://melmagazine.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-31-at-5.47.12-PM.png" 
            alt="" className="stock-page-graph"/>

            <div className="holding-data">Your equity & average cost will be displayed here</div>

            <div className="stock-page-info">{<StockInfo profile={this.props.info.profile}/>}</div>

            </div>

                {/* <div className="stock-right">right side</div> */}
            </div>
        )
    }

    
}

export default StockPage;