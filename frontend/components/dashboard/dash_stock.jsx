import React from 'react';
import { receiveInfo } from '../../actions/stock';
import { Link } from 'react-router-dom';

class DashInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        receiveInfo(this.props.ticker);
    }

    render() {
        let priceMap = this.props.prices
        let price = 0
        if (priceMap !== []) {
            priceMap.forEach((obj) => {
                if (obj.symbol === this.props.ticker){
                    price = obj.price
                }
            })
        }

        let plural = (this.props.shares > 1) ? "Shares" : "Share"

        return (
            
            <div className="stock-info">

                <Link to={`/stock/${this.props.ticker}`} className="stock-link"><div className="flex">

                <div>
                
                    <h3>{this.props.ticker}</h3>
                
                    <p className="dash-numshares">{this.props.shares} {plural}</p>

                </div>
                    <p className="dash-price">{(price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
                </div></Link>
  
            </div>
        )
    }
}

export default DashInfo;
