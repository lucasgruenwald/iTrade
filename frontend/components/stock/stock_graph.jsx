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

        const renderGraph = (
            <LineChart >

            </LineChart>
        );

    return (
    <div className="stock-graph-holder">
        {renderGraph}
    </div>
    )
  };
};

export default StockGraph;
