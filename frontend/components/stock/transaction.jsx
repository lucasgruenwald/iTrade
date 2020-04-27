import React from 'react';


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate( ) {
    }

    componentDidMount(){

    }

    handleSubmit(e){

    }

    render(){



        return(

            <div className="holdings-bar">
                <div className="flex">
                    <button type="button" className="buy">Buy {this.props.info.symbol}</button>
                    <button type="button" className="sell">Sell {this.props.info.symbol}</button>
                </div>
                <div className="flex">
                    <p className="shares-text">Shares</p>
                    <input type="text" placeholder="" className="shares-input"></input>
                </div>
                <div className="flex">
                    <p className="shares-text">Market Price</p>

                </div>
                <div className="flex">
                    <p className="shares-text">Estimated Cost</p>

                </div>
            </div>

        );
    };

};

export default TransactionForm;