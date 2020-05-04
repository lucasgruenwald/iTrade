import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

class DashGraph extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ticker: "",
            closePrice: this.props.close,
            open: this.props.open,
            period: this.props.period,
            change: parseFloat(this.props.close - this.props.open).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2),
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.customTooltip = this.customTooltip.bind(this)
    }

    componentDidMount() {
        this.setState({
            period: this.props.period,
            open: this.props.open,
            change: parseFloat(this.props.close - this.props.open).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2),
        });
    }

    componentDidUpdate() {
        if (this.state.period !== this.props.period) {
            this.setState({
                period: this.props.period,
                change: parseFloat(this.props.close - this.props.open).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2)
            });

        };
    }

    handleMouseOver(e) {
        if (e && e.activePayload !== undefined) {
            let openPrice = this.state.open;
            // let hoverPrice = e.activePayload[0].payload.price;
            // temporarily replacing with fixed number 1
            let hoverPrice = 1;

            let change = hoverPrice - openPrice;
            let divChange = (change / hoverPrice) * 100

            this.setState({
                closePrice: parseFloat(e.activePayload[0].payload.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                change: parseFloat(change.toLocaleString('en-US', { style: 'currency', currency: 'USD' })),
                percentChange: parseFloat(divChange).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            })
        }
    }

    handleMouseOut(e) {
        let dollarChange = (this.props.close - this.props.open)
        let divisionChange = ((dollarChange / this.props.close) * 100)

        this.setState({
            closePrice: this.props.close,
            change: parseFloat(dollarChange).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            percentChange: parseFloat(divisionChange).toFixed(2)
        })
    }


    customTooltip(e) {
        return (
            <div className="custom-tooltip">
                <p className="label">{e.label}</p>
            </div>
        );
    }

    render(){

        let data = this.props.ticker || [];
        const label = "label"

        if (this.state.change[0] !== "-"){
            this.state.change = "+" + this.state.change
        }

        return(
            <div className="dash-graph-holder">

                <p className="change-counter">{`${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                <LineChart
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
                        // className='tooltip'
                        position={{ y: 0 }}
                        isAnimationActive={false}
                        content={this.customTooltip}
                        cursor={{ stroke: "black", strokeWidth: 0.7 }}
                        // formatter={(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        position={{ y: -40 }}
                    />

                    // <Line connectNulls type="linear" dataKey="price" dot={false} stroke={this.props.color} strokeWidth={3} />
                </LineChart>
            </div>
        )
    }

}


export default DashGraph;