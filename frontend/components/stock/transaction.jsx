import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            cash: this.props.currentUser.available_cash,
            holdingId: this.props.holdingId,
            share_count: 0,
            tranType: "buy",
            buttonText: "Place Order"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeButton = this.changeButton.bind(this);
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
        let tick = this.props.stock_ticker
        const holding = {
            user_id: this.state.user_id,
            stock_ticker: tick,
            share_count: this.state.share_count,
        }
        console.log("new holding for submit: ")
        console.log(holding)
        // let newCash = {
        //     id: this.state.user_id,
        //     email: this.props.email,
        //     available_cash: (this.state.cash - (this.state.share_count * Number((this.props.price).replace(/[^0-9.-]+/g, ""))))
        // }
        let prevShares = this.state.share_count
        
        if (holding.share_count === 0) {
            return;
        } else if ( this.state.tranType === "buy"){
            if ((this.state.share_count * Number((this.props.price).replace(/[^0-9.-]+/g, ""))) < (this.state.cash)) {
                if (this.props.holdings.share_count > 0) {
                    let total = holding.share_count + this.props.holdings.share_count
                    const editedHolding = {
                        user_id: this.state.user_id,
                        stock_ticker: tick,
                        share_count: total
                    }
                    this.props.updateHolding(editedHolding)
                    this.state.share_count = 0
                    this.state.buttonText = "Order Complete"
                } else {
                    this.props.receiveHolding(holding)
                    this.state.share_count = 0
                    this.state.buttonText = "Order Complete"
                }

                let newCashVal = parseFloat(this.state.cash) - (prevShares * parseFloat((this.props.price).replace(/[^0-9\.-]+/g, "")))
                console.log(newCashVal)
                // this.setState({
                //     cash: newCashVal
                // })
                // subtract from cash (provide new value)
                // PATCH  /api/users/:id(.:format)  api/users#update
                // this.props.updateCash(newCash)
            } else {
                console.log("you don't have enough cash to buy this")
            }
        } else {
            if (this.state.share_count <= this.props.holdings.share_count){
                if (this.state.share_count === this.props.holdings.share_count){
                    this.props.removeHolding(holding)
                    this.state.share_count = 0
                    this.state.buttonText = "Order Complete"
                } 
                else {
                    let total = this.props.holdings.share_count - holding.share_count  
                    const editedHolding = {
                        user_id: this.state.user_id,
                        stock_ticker: tick,
                        share_count: total
                    }
                    this.props.updateHolding(editedHolding)
                    this.state.share_count = 0
                    this.state.buttonText = "Order Complete"
                }

                let newCashVal = parseFloat(this.state.cash) + (prevShares * parseFloat((this.props.price).replace(/[^0-9\.-]+/g, "")))
                console.log(newCashVal)
                // this.setState({
                //     cash: newCashVal
                // })
                // add to existing cash (provide new value)
                // PATCH  /api/users/:id(.:format)  api/users#update
                // this.props.updateCash(this.state.cash + (this.state.share_count * Number((this.props.price).replace(/[^0-9.-]+/g, ""))))
            } else {
                console.log("you don't have enough shares to sell")
            }
        }
        this.changeButton()
    }

    changeButton(){
        setTimeout(() => this.setState({ buttonText: "Place Order"}), 2000);
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
        // console.log(this.props.stock_ticker)
        // console.log(this.props.stock_ticker)
        let shareCounter = this.props.holdings.share_count ? this.props.holdings.share_count : 0
        
        let estCost = this.state.share_count ? 
            (this.state.share_count * Number((this.props.price).replace(/[^0-9\.-]+/g, ""))).toLocaleString(
            'en-US', { style: 'currency', currency: 'USD' })
            : "$0"
    

        console.log("existing holdings: ", this.props.holdings)
        console.log("number shares existing: ", this.props.holdings.share_count)

        return(

            <form className="holdings-bar" onSubmit={this.handleSubmit}>
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
                <button className={"place-order" + this.state.buttonText[0]} type="submit" value={this.state.tranType}>{this.state.buttonText}</button>
                <p className="buy-avail-cash">{this.state.cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}&nbsp; Buying Power Available</p>
                <p className="shares-show">You currently own {shareCounter} shares</p>
            </form>

        );
    };

};

export default TransactionForm;