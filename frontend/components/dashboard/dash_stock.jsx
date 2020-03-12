import React from 'react';
import { receiveInfo } from '../../actions/stock';
import { Link } from 'react-router-dom';

class DashInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        // this.ticker = []
    }

    componentDidMount() {
        receiveInfo(this.props.ticker);
    }

    render() {

        console.log(this.props.ticker)
        console.log(this.props.info)

        return (

            <div className="stock-info">

                <div className="flex">
                
                <h3><Link to={`/stock/${this.props.ticker}`} className="stock-link">{this.props.ticker}</Link></h3>
                    <p>$_____</p>
                </div>
                <p className="dash-numshares">{this.props.shares} Shares</p>
  
            </div>
        )
    }
}

export default DashInfo;
