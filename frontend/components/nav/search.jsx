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
        let companies = Object.values(this.props.stocks);
        let entry = this.state.search.toUpperCase()
        let found = []

        console.log(this.state.search)
        console.log(suggestions)
        console.log(companies)

        if (entry.length > 0) {
            companies.forEach((ticker, idx) => {
                    if (ticker.symbol === entry){
                        found.push(ticker.symbol)
                        suggestions.unshift(
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
                    else if (ticker.symbol.startsWith(entry) || (ticker.name !== null
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
            })
        }

        if (suggestions.length < 5) {
            companies.forEach((ticker, idx) => {
                if (entry.length > 0 && !(found.includes(ticker.symbol))) {
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

        suggestions = (suggestions.slice(0, 7))

        return (
            <form className="search-form">
                <input
                    className="search-field"
                    type="search"
                    placeholder="Search Companies..."
                    value={this.state.search}
                    onChange={this.update("search")}
                    // onPointerOut={suggestions = []}
                />
                <ul className="suggestion-box">
                    {suggestions}
                </ul>
            </form>
        );
    }
}

export default SearchBar;
