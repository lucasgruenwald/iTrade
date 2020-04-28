import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cash: this.props.currentUser.available_cash
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate( ) {
    }

    componentDidMount(){

    }

    handleSubmit(e){

    }

    handleClick(dir) {
        this.setState({ buySell: dir });
        this.changeUnderline(dir);
        // this.props.clearErrors();
    }
    
    updateShares() {
        return e => {
            this.setState({ purchase_shares: parseInt(e.target.value) })
        }
    }

    changeUnderline(dir) {
        let dirs = Array.prototype.slice.call(document.querySelectorAll('.buy, .sell'));
        dirs.forEach((way) => {
            let dirList = Array.prototype.slice.call(way.classList);
            way.classList.remove("selected")
            if (dirList.includes(dir)) {
                way.classList.add("selected")
            }
        })
    }

    render(){

        console.log(this.props.price)
        console.log(this.state.purchase_shares)
        let estCost = this.state.purchase_shares ? 
            (this.state.purchase_shares * Number((this.props.price).replace(/[^0-9\.-]+/g, ""))).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            : "$0"
    

        return(

            <div className="holdings-bar">
                <div className="flex-transaction">
                    <button type="button" onClick={() => this.handleClick('buy')} className="buy selected">Buy {this.props.profile}</button>
                    <button type="button" onClick={() => this.handleClick('sell')} className="sell">Sell {this.props.profile}</button>
                </div>
                <div className="flex-transaction">
                    <p className="shares-text">Shares</p>
                    <input  
                        type="number" 
                        placeholder="0" 
                        id="shares-input" 
                        className="shares-input"
                        value={this.state.purchase_shares}
                        onChange={this.updateShares()} 
                    />
                </div>
                <div className="flex-transaction">
                    <p className="market-text">Market Price</p>
                    <p className="mkt-price-text">{this.props.price}</p>
                </div>
                <div className="flex-transaction">
                    <p className="cost-text">Estimated Value</p>
                    <p className="cost-value">{estCost}</p>
                </div>           
                <button className="place-order">Place Order</button>
                <p className="buy-avail-cash">{this.state.cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}&nbsp; Buying Power Available</p>
            </div>

        );
    };

};

export default TransactionForm;