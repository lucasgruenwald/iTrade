import React from 'react';


class StockInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.info;
        
    }

    // componentDidMount() {
    //     this.props.receiveInfo(this.props.ticker);
    // }

    render() {

        let mktCap = (this.props.profile.mktCap);

        return (      

            <div className="info-wrap">

                <div className="info">
    
                    <div className="ticker-about">
                        <h4>About</h4>
                        <div className="about-text">
                            <p>{this.props.profile.description}</p>
                        </div>
                    </div>     

                    <div className="ticker-text">
                        <div>
                            <h6>CEO</h6>
                            <h5>{this.props.profile.ceo}</h5>
                        </div>

                        <div>
                            <h6>Sector</h6>
                            <h5>{this.props.profile.sector}</h5>
                        </div>

                        <div>
                            <h6>Market Cap (Billion)</h6>
                            <h5>{(Number(mktCap).toPrecision()/1000000000).toFixed(3)}</h5>
                        </div>

                        <div className="avg-vol">
                            <h6>Average Volume</h6>
                            <h5>{(parseInt(this.props.profile.volAvg)).toLocaleString()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockInfo;
