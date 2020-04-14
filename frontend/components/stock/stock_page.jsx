import React from 'react';
import StockInfo from './info'
import StockGraph from './stock_graph';
import { fetchDailyPrices, fetchPrices } from '../../util/graph_api_util';

class StockPage extends React.Component {
    
    constructor(props) {
    
        super(props);
        this.state = {
            ticker: ""
        } 
    }
    
    componentDidMount() {
        this.props.receiveInfo(this.props.ticker);
        this.props.findHoldings(this.props.currentUser)
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