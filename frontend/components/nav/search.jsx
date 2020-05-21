import React from 'react';
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: []
        }

        this.handleClearForm = this.handleClearForm.bind(this)
        this.update = this.update.bind(this)
    }

    handleClearForm() {
        this.setState({ search: '' });
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value,
            })
        }
    }


    render() {
        let suggestions = []
       
        // if (!this.props.stocks) return null;

        let companies = Object.values(this.props.stocks);
        let entry = this.state.search.toUpperCase()
        let found = []
        companies.forEach((ticker, idx) => {
            if (entry.length > 0) {
                if (ticker.symbol.startsWith(entry) || (ticker.name !== null
                    && ticker.name.toUpperCase().startsWith(entry))) {
                    found.push(ticker.symbol)
                    suggestions.push(
                        <li key={idx} className="suggestion-item">
                            <Link
                                to={`/stock/${ticker.symbol}`}
                                key={idx}
                                className="suggestion-link"
                                onClick={this.handleClearForm}>
                                {ticker.symbol} · {ticker.name}
                            </Link>
                        </li>
                    )
                }
            }
        })

        if (suggestions.length < 5) {
            companies.forEach((ticker, idx) => {
                if (entry.length > 0 && !found.includes(ticker.symbol)) {
                    if (ticker.symbol.startsWith(entry) || (ticker.name !== null
                        && ticker.name.toUpperCase().includes(entry))) {
                        suggestions.push(
                            <li key={idx} className="suggestion-item">
                                <Link
                                    to={`/stock/${ticker.symbol}`}
                                    key={idx}
                                    className="suggestion-link"
                                    onClick={this.handleClearForm}>
                                    {ticker.symbol} · {ticker.name}
                                </Link>
                            </li>
                        )
                    }
                }
            })
        }

        suggestions = (suggestions.slice(0, 5)).reverse()

        return (
            <form className="search-form">
                <input
                    className="search-field"
                    type="search"
                    placeholder="Search Companies..."
                    value={this.state.search}
                    onChange={this.update("search")}
                />
                <ul className="suggestion-box">
                    {suggestions}
                </ul>
            </form>
        );
    }
}

export default SearchBar;
