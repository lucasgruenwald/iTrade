import React from 'react';
import { fetchStockProfile } from '../../util/stock_show_util';

class StockInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }   
    
    
    render() {

        return (
            
            <div className="stock-info">

                <p>{this.props.ceo}</p>

            </div>

            // <p>https://financialmodelingprep.com/api/v3/company/profile/{AAPL}</p>
        )
    }
}

export default StockInfo;