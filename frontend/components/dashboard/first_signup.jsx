import React from 'react';
import FullPageLoading from '../loader/full_page.jsx'

class FirstSignup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            done: false,
        }
    }

    
    componentDidMount() {
        this.assignStocks(this.state.currentUser)
    }

    componentWillUnmount() {
        this.setState({ done: false });
    };

    assignStocks(currentUser){
        let freeHolding1 = {
            user_id: currentUser,
            stock_ticker: "FB",
            share_count: 100,
        }
        let freeHolding2 = {
            user_id: currentUser,
            stock_ticker: "AAPL",
            share_count: 250,
        }
        let freeHolding3 = {
            user_id: currentUser,
            stock_ticker: "AMD",
            share_count: 75,
        }
        let freeHolding4 = {
            user_id: currentUser,
            stock_ticker: "TSLA",
            share_count: 500,
        }
        let freeHolding5 = {
            user_id: currentUser,
            stock_ticker: "CRM",
            share_count: 40,
        }
        this.props.receiveHolding(freeHolding1)
        this.props.receiveHolding(freeHolding2)
        this.props.receiveHolding(freeHolding3)
        this.props.receiveHolding(freeHolding4)
        this.props.receiveHolding(freeHolding5)
        .then(() => this.props.history.push("/dashboard"))
        .then(
            this.setState({
                done: true
            })
        )
    }


    render() {

        if (Object.values(this.props.holdings).length === 0) return null;


        if (!this.state.done) {
            return <FullPageLoading />
        }

        return (
            <div className="first-signup-page">
            </div>

        )
    }
}

export default FirstSignup;