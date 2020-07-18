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
                <div>Hmm... If you're reading this, the twelvedata API is likely sending incomplete pricing data
                    to my site again. Please let me know and I'll make sure it
                    gets fixed. In the meantime, you might still be able to use
                    the search bar above to view individual stock pages. Thank you!
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
