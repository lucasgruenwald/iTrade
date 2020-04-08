import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: []
        }

        this.handleClick = this.handleClick.bind(this)
        this.update = this.update.bind(this)
    }

    handleClick(e) {
        this.setState({ search: '' })

    }

    update(entry) {
        return e => {
            this.setState({
                [entry]: e.currentTarget.value,
            }),
            this.update(this.state.search)
        }
    }

    render(){

        let suggestions = []

        return(
            <div className="search-bar-container">
                <div className="search-bar">

                    <input 
                        className='search-input' 
                        type="text" 
                        placeholder="url e.g. #/stock/AAPL"
                        value={this.state.search} 
                        onChange={this.update("search")} 
                    />

                    <div className="dropdown">
                        {suggestions}
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchBar;
