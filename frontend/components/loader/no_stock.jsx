import React from 'react';

class NoStockWarning extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        
        return (
            <React.Fragment>

                <div className="no-stock-container">
                    <div className="no-stock">
                        <h1>Sorry, this stock is not supported yet. Please try a different stock.</h1>
                    </div>
                </div>


            </React.Fragment>
        );


    };
}

export default NoStockWarning;