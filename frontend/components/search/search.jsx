import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: []
        }

        this.handleClearBar = this.handleClearBar.bind(this)
        this.update = this.update.bind(this)
    }

    handleClearBar() {
        this.setState({ search: '' });
    }

    update(entry) {
        return e => {
            this.setState({
                [entry]: e.currentTarget.value,
            })
        }
    }

    render(){

        let suggestions = []

        return(

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

        )
    }
}

export default SearchBar;
