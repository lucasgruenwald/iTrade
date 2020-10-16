import React from 'react';
// import Spinner from "../../../assets/images/Spinner.gif";

class FullPageLoading extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            message: ""
        }

    }

  
    render(){
        setTimeout(
            function () {
                this.setState({ done: "error" })
            }
                .bind(this),
            10000
        );

        if (this.state.done === "error") {
            return (
                <div>
                    <div className="error-msg">
                        Hmm... If you're reading this, the twelvedata API is likely sending 
                        incomplete pricing data to my site again. Please let me know and I'll make sure it
                        gets fixed. In the meantime, refreshing the page may work. If not, please revisit
                        the portfolio page and try searching for a new stock. Thank you!
                    </div>
                </div>
            )
        }
        return(
            <React.Fragment>

                <div className="load-container">
                    <div className="load">
                        <img src="https://i.imgur.com/FEDTpyE.gif" className="spinner"/>
                    </div>
                </div>
                

            </React.Fragment>
        );
    };

};

export default FullPageLoading;
