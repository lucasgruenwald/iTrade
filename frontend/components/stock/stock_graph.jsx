import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

// import numeral from 'numeral';

class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    // add more here
    this.state = {
      timePeriod: "1d",
      price: 0,
      change: 0,
      percentageChange: 0,
      chartData: this.props.info.profile.price,
    };
    // and add to state
    this.handleOneDay = this.handleOneDay.bind(this);
  }

  handleOneDay() {
    console.log(this.oneDayColor);
    this.removeHighlight();

    this.setState({
      chartData: this.props.info.profile.price
    });
  }

  render() {
    // add functions here
    // add periods (snapshots)

    // let data = [];

    let dateFull = new Date();
    // let dayIdx = dateFull.getDay();
    // let isWeekend = (dayIdx === 0) || (dayIdx === 6)
    let color = "blue";

  

    const renderGraph = (
      <LineChart
        width={800}
        height={400}
        // data={data}
      >
        <YAxis domain={["dataMin", "dataMax"]} axisLine={false} hide={true} />
        <XAxis dataKey="created_at" hide={true} />
        <Line type="monotone" dataKey="valuation" stroke={color} dot={false} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      </LineChart>
    );

    return (
      <div className="stock-graph-holder">
        <p>renderGraph is below this line</p>
        {renderGraph}
      </div>
    );
  }
};

export default StockGraph;
