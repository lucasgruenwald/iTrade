import React from 'react';
import SearchContainer from './search_container';
// import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // componentDidMount() {
    //     this.props.receiveStocks();
    // }


    render() {
        // if (this.props.stocks.length === 0) return null;
       

        return (
            <div className="nav_plus_quotron">
                <div className="nav-bar">

                    <div className="nav-search-box">
                        <SearchContainer stocks={this.props.stocks} />
                    </div>


                </div>
            </div>
        );
    }
}

export default Nav;