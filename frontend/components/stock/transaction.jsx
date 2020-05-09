import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            cash: this.props.currentUser.available_cash,
            holdingId: this.props.holdingId,
            share_count: 0,
            tranType: "buy"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.stock_ticker !== this.props.stock_ticker) {
            // let positionKey = {
            //     user_id: this.props.currentUser.id,
            //     ticker: this.props.ticker
            // } 
            // this.props.getPosition(positionKey)
        };
    }

    componentDidMount(){
        

    }

    handleClick(dir) {
        this.setState({ tranType: dir });
        this.applyUnderline(dir);
    }

    handleSubmit(e){
        e.preventDefault()
        let newHoldingData = {
            user_id: this.state.user_id,
            stock_ticker: this.props.stock_ticker,
            share_count: this.state.share_count,
        }
        if (newHoldingData.share_count === 0) {
            return;
        } else if ( this.state.tranType === "buy"){
            // first check if user has enough cash

            // actions to delete previous holding & add new holding
            // e.g. deleteHolding && receiveHolding
            //      adds to share_count in prev holding
            // cash action
            //      subtracts relevant amount from cash bal
        } else {
            // first check if user has enough shares to sell

            // actions to delete previous holding & add new holding
            // e.g. deleteHolding && receiveHolding
            //      subtracts from share_count in prev holding
            // cash action
            //      adds relevant amount to cash bal
        }
 

    }
    
    updateShares() {
        return e => {
            this.setState({ share_count: parseInt(e.target.value) })
        }
    }

    applyUnderline(dir) {
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

        let estCost = this.state.share_count ? 
            (this.state.share_count * Number((this.props.price).replace(/[^0-9\.-]+/g, ""))).toLocaleString(
            'en-US', { style: 'currency', currency: 'USD' })
            : "$0"
    
        console.log("user_id: " + this.state.user_id)
        console.log("cash: " + this.state.cash)
        console.log("share_count: " + this.state.share_count)
        console.log("estCost: " + Number(estCost.replace(/[^0-9.-]+/g, "")))
        console.log("enough cash? " + (parseInt(Number(estCost.replace(/[^0-9.-]+/g, ""))) < parseInt(this.state.cash)))
        console.log("holdings: ", this.props.holdings)
        console.log("holdingId: " + this.state.holdingId)

        return(

            <div className="holdings-bar">
                <div className="flex-transaction">
                    <button type="button" onClick={() => this.handleClick('buy')} className="buy selected">Buy {this.props.stock_ticker}</button>
                    <button type="button" onClick={() => this.handleClick('sell')} className="sell">Sell {this.props.stock_ticker}</button>
                </div>
                <div className="flex-transaction">
                    <p className="shares-text">Shares</p>
                    <input  
                        type="number" 
                        placeholder="0" 
                        id="shares-input" 
                        className="shares-input"
                        value={this.state.share_count}
                        onChange={this.updateShares()} 
                        min="0"
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
                <button className="place-order" type="submit" value={this.state.tranType}>Place Order</button>
                <p className="buy-avail-cash">{this.state.cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}&nbsp; Buying Power Available</p>
            </div>

        );
    };

};

export default TransactionForm;