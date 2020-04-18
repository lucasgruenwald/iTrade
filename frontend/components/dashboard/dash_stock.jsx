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
        priceMap.forEach((obj) => {
            if (obj.symbol === this.props.ticker){
                price = obj.price
            }
        })

        return (
            
            <div className="stock-info">

                <div className="flex">

                <div>
                
                    <h3><Link to={`/stock/${this.props.ticker}`} className="stock-link">{this.props.ticker}</Link></h3>
                
                    <p className="dash-numshares">{this.props.shares} Shares</p>

                </div>
                
                <p className="dash-price">${price}</p>

                </div>
  
            </div>
        )
    }
}

export default DashInfo;
