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

           <div className="stock-title">
            <h2>{this.props.info.symbol} -</h2> 
            <h2>  {this.props.info.profile.companyName}</h2>
           </div>

            <img src="https://melmagazine.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-31-at-5.47.12-PM.png" 
            alt="" className="stock-page-graph"/>

            <div className="stock-page-info">{<StockInfo profile={this.props.info.profile}/>}</div>

            </div>
        )
    }

    
}

export default StockPage;