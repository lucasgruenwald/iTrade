import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
// import { withRouter } from 'react-router-dom';


class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: this.props.ticker,
      closePrice: this.props.close,
      change: parseFloat(this.props.close - this.props.open).toFixed(2),
      percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2),
      open: this.props.open,
      period: this.props.period,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.customTooltip = this.customTooltip.bind(this)
  }

  componentDidMount() {
    this.setState({
      period: this.props.period,
      open: this.props.open,
      change: parseFloat(this.props.close - this.props.open).toFixed(2),
      percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2),
    });
  }

  componentDidUpdate() {
    if (this.state.period !== this.props.period) {
      this.setState({
        period: this.props.period,
        change: parseFloat(this.props.close - this.props.open).toFixed(2),
        percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2)
      });

    };
  }

  handleMouseOver(e) {
    if (e && e.activePayload !== undefined) {
      let openPrice = this.state.open;
      let hoverPrice = e.activePayload[0].payload.price;

      let change = hoverPrice - openPrice;
      let divChange = (change / hoverPrice) * 100

      this.setState({
        closePrice: parseFloat(e.activePayload[0].payload.price).toFixed(2),
        change: parseFloat(change.toFixed(2)),
        percentChange: parseFloat(divChange).toFixed(2)
      })
    }
  }

  handleMouseOut(e) {
    let dollarChange = (this.props.close - this.props.open)
    let divisionChange = ((dollarChange / this.props.close) * 100)

    this.setState({
      closePrice: this.props.close,
      change: parseFloat(dollarChange).toFixed(2),
      percentChange: parseFloat(divisionChange).toFixed(2)
    })
  }

  customTooltip(e) {
    console.log(e)
    console.log(e.label)
    let time
    // (e.label) ? time = e.label.split(" ")[1] : time = null
    (e.label) ? time = e.label : time = null
    if (e.label && time.split(" ")[1]) {
      time.split(" ")[1].slice(0, 2) < 12 ? time = time + " AM" : time = time + " PM"
    }
    return (
      <div className="custom-tooltip">
        <p className="label">{time} PST</p>
      </div>
    );
  }


  render() {
    let data = this.props.ticker || [];
    const label = "label"

    return (
      <div className="stock-chart-holder">

        <p className="change-counter">{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

        <LineChart
          className="line-chart"
          width={650}
          height={350}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseOut}>
          
          <XAxis dataKey={"time"} hide={true} />
          <YAxis hide={true} domain={['dataMin', 'dataMax']} />

          <Tooltip 
            // className='tooltip'
            position={{ y: 0 }} 
            isAnimationActive={false} 
            content={this.customTooltip}
            cursor={{ stroke: "black", strokeWidth: 0.7 }}
            // formatter={(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            position={{ y: -40 }} 
          />
        
          <Line connectNulls type="linear" dataKey="price" dot={false} stroke={this.props.color} strokeWidth={3} />
        </LineChart>
        
      </div>
    )
  }
};

export default StockGraph;