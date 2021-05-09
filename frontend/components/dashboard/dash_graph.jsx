import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

class DashGraph extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ticker: "",
            closePrice: this.props.close,
            open: this.props.open,
            cash: this.props.cash,
            period: this.props.period,
            change: parseFloat(parseFloat(this.props.close) - parseFloat(this.props.open)).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            // percentChange: parseFloat(((this.props.close - this.props.open) / this.props.open) * 100).toFixed(2),
            percentChange: this.props.changePercent,
            hoverPrice: this.props.close
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
        if ((e != undefined ) && (e.activePayload != undefined)) {

            let openPrice = (parseFloat(this.props.open));
            let hoverValue;
            let hoverPrice;
            if (e.activePayload[0] != null){
                hoverValue = (parseFloat(e.activePayload[0].payload.price) + parseFloat(this.state.cash));
                hoverPrice = parseFloat(e.activePayload[0].payload.price);
            } 
            let change = hoverPrice - openPrice;
            let divChange = (change / openPrice) * 100

            if (divChange[0] > 0) {
                divChange = "+" + parseFloat(divChange).toFixed(2)
            }

            if (e.activePayload[0] != null) {
          
                this.setState({
                    hoverPrice: hoverPrice,
                    closePrice: hoverPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                    change: parseFloat(change).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                    percentChange: parseFloat(divChange).toFixed(2)
                })
            } 
        }
    }

    handleMouseOut(e) {
        let dollarChange = (this.props.close - this.props.open)
        let divisionChange = ((dollarChange / this.props.close) * 100)

        this.setState({
            closePrice: this.props.close,
            change: parseFloat(dollarChange).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            percentChange: parseFloat(divisionChange).toFixed(2),
            hoverPrice: this.props.close
        })
    }


    customTooltip(e) {
        let time
        // (e.label) ? time = e.label.split(" ")[1] : time = null
        (e.label) ? time = e.label : time = null
        if (e.label && time.split(" ")[1] && this.state.period != "1Y") {
            time.split(" ")[1].slice(0,2) < 12 ? time = time + " AM PST" : time = time + " PM PST"
        }
        return (
            <div className="custom-tooltip">
                <p className="label">{time}</p>          
            </div>
        );
    }

    render(){

        let data = this.props.ticker || [];
        const label = "label"
        // let topPrice
        // if (hoverPrice === undefined){
        //     topPrice = this.props.close
        // } else{
        //     topPrice = hoverPrice
        // }

        if ((this.state.change[0] !== "-") && (this.state.change[0] !==  "+")){
            this.state.change = "+" + this.state.change
        }
        console.log(this.state.hoverPrice)
        console.log(this.state.cash)
        if (!this.state.hoverPrice) return null;

        return(
            <div className="dash-graph-holder">
                <h1>{(parseFloat(this.state.hoverPrice) + parseFloat(this.state.cash)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
                <p className="change-counter">{`${this.state.change}`} {`(${this.state.percentChange}%)`}</p>
                <ResponsiveContainer width="80%" height={350}>
                    <LineChart
                        className="line-chart"
                        // width={650}
                        // height={350}
                        data={data}
                        margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
                        onMouseMove={this.handleMouseOver}
                        onMouseLeave={this.handleMouseOut}>

                        <XAxis dataKey={"time"} hide={true} />
                        <YAxis hide={true} domain={['dataMin', 'dataMax']} />

                        <Tooltip
                            // className='tooltip'
                            isAnimationActive={false}
                            content={this.customTooltip}
                            cursor={{ stroke: "black", strokeWidth: 0.7 }}
                            // formatter={(value) => value}
                            position={{ y: -40 }}
                        />

                        // <Line connectNulls type="linear" dataKey="price" dot={false} stroke={this.props.color} strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }

}


export default DashGraph;