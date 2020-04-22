import React from 'react';
// import Spinner from "../../../assets/images/Spinner.gif";

class FullPageLoading extends React.Component{

    render(){

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
