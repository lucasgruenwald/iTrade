import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.currentUser.id,
            cash: this.props.currentUser.available_cash,
            holdingId: this.props.holdingId,
            numShares: 0,
            tranType: "buy"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.ticker !== this.props.ticker) {
            // let positionKey = {
            //     user_id: this.props.currentUser.id,
            //     ticker: this.props.ticker
            // } 
            // this.props.getPosition(positionKey)
        };
    }

    componentDidMount(){
        // console.log(this.props.currentUser.id)
        // console.log(this.props.ticker)
        // let positionKey = {
        //     user_id: this.props.currentUser.id,
        //     ticker: this.props.ticker
        // }
        // this.props.getPosition(positionKey)
    }

    handleSubmit(e){
        e.preventDefault()
        let submitData = {
            userId: this.state.userId,
            ticker: this.props.ticker,
            numShares: this.state.numShares,
            cash: this.state.cash
        }

        if (submitData.numShares === 0) {
            return;
        } else if ( this.state.tranType === "buy"){
            // this.props.receiveHolding(submitData)
        } else {
            // sell actions
        }
 

    }

    handleClick(dir) {
        this.setState({ tranType: dir });
        this.applyUnderline(dir);
    }
    
    updateShares() {
        return e => {
            this.setState({ numShares: parseInt(e.target.value) })
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

        let estCost = this.state.numShares ? 
            (this.state.numShares * Number((this.props.price).replace(/[^0-9\.-]+/g, ""))).toLocaleString(
            'en-US', { style: 'currency', currency: 'USD' })
            : "$0"
    
        // console.log(this.state.userId)
        // console.log(this.state.cash)
        // console.log(Number(estCost.replace(/[^0-9.-]+/g, "")))
        // console.log(parseInt(Number(estCost.replace(/[^0-9.-]+/g, ""))) < parseInt(this.state.cash))
        console.log(this.state.holdingId)

        return(

            <div className="holdings-bar">
                <div className="flex-transaction">
                    <button type="button" onClick={() => this.handleClick('buy')} className="buy selected">Buy {this.props.ticker}</button>
                    <button type="button" onClick={() => this.handleClick('sell')} className="sell">Sell {this.props.ticker}</button>
                </div>
                <div className="flex-transaction">
                    <p className="shares-text">Shares</p>
                    <input  
                        type="number" 
                        placeholder="0" 
                        id="shares-input" 
                        className="shares-input"
                        value={this.state.numShares}
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