import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

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

    handleClick(val){

    }

    handleSubmit(e){

    }

    render(){



        return(

            <div className="holdings-bar">
                <div className="flex-transaction">
                    <button type="button" className="buy selected">Buy {this.props.profile}</button>
                    <button type="button" className="sell">Sell {this.props.profile}</button>
                </div>
                <div className="flex-transaction">
                    <p className="shares-text">Shares</p>
                    <input type="text" placeholder="" className="shares-input"></input>
                </div>
                <div className="flex-transaction">
                    <p className="market-text">Market Price</p>
                    <p className="mkt-price-text">{this.props.price}</p>
                </div>
                <div className="flex-transaction">
                    <p className="cost-text">Estimated Cost</p>

                </div>
            </div>

        );
    };

};

export default TransactionForm;