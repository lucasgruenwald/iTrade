import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { fetchDailyPrices, fetch5D, fetch1M, fetch3M, fetch1Y } from '../../util/graph_api_util';
import FullPageLoading from "../loader/full_page.jsx"
// import graph tools

class DashGraph extends React.Component{

    constructor(props) {
        super(props);
        // add more here
        this.state = {
        };
        // and add to state
    }


    // add functions here 


    render(){


        // const mainGraph = (
        //     <div>
        //         <p>graph goes here</p>
        //     </div>
        // )


        return(
            <div className="dash-graph-holder">

                {/* <p className="change-counter">{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p> */}

                {/* <LineChart
                    className="line-chart"
                    width={650}
                    height={350}
                    data={data}
                    margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOut}>

                    <XAxis dataKey={label} hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']} />

                    <Tooltip
                        className='tooltip'
                        position={{ y: 0 }}
                        isAnimationActive={false}
                        content={this.customTooltip}
                        cursor={{ stroke: "black", strokeWidth: 0.7 }}
                        formatter={(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        position={{ y: -40 }}
                    />

                    // <Line connectNulls type="linear" dataKey="price" dot={false} stroke={this.props.color} strokeWidth={3} />
                </LineChart> */}
            </div>
        )
    }

}


export default DashGraph;