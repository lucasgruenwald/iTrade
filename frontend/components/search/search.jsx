import React from 'react';

class Search extends React.Component {


    render(){
        return(
            <input className="search-bar"
                type="text"
                placeholder="Search for stocks..."
            ></input>
        )
    }
}

export default Search;