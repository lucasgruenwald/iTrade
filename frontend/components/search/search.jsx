import React from 'react';

class SearchBar extends React.Component {


    render(){
        return(

            <input className="search-bar"
                type="text"
                placeholder="change url  e.g.  #/stock/AAPL"    
            >
            </input>

        )
    }
}

export default SearchBar;