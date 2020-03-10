import React from 'react';
import StockInfo from './stock_info'

class StockPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        } 

        // this.stockInfo = this.stockInfo.bind(this)
    }


    render() {

        let tickerInfo = {


        }

        return (
            <div className="stock-page">
            <p className="stock-page-graph">Stock Graph</p>
            <p className="stock-page-info">CEO: {this.state.ceo}</p>
            </div>
        )
    }

    
}

export default StockPage;