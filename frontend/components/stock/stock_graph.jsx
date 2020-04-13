import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    // add more here
    this.state = {};
    // and add to state
  }

  // add functions here

  render() {

    // const tickerGraph = (
    //     <div>
    //         <p>graph goes here</p>
    //     </div>
    // )

    return (
    <div className="stock-graph-holder">
        {/* {tickerGraph} */}
    </div>
    )
  };
};

export default StockGraph;
