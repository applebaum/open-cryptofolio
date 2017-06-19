import React, {Component} from "react";

//connect to Node.js server via socket.io
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');

export default class TickerEntry extends Component {
    constructor(props) {
        super(props);
        this.displayChart = this.displayChart.bind(this);
        this.state = {
            //set empty data to initial state so it would render before actual data is loaded
            data: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BTC: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            }
        }
    }

    //connect to Node.js via socket.io and pass received data to handler function
    componentDidMount(){
        socket.on('BTC', (data) => this.setState({BTC: data ? data.message.msg : 0}));
        socket.on(this.props.coin, (data) => this.setState({data: data ? data.message.msg: 0}));
    }

    componentWillUnmount() {
        socket.removeListener('BTC');
        socket.removeListener(this.props.coin);
        this.displayChart(null, null)
    }

    displayChart(link, coin, showPortfolioChart) {
        this.props.chosenCoin(link, coin, showPortfolioChart)
    }

    render() {


        if(this.state.data.price === 0 && this.state.BTC.price === 0) {
            return null
        } else {
            return (
                <tr
                    onClick={() => this.displayChart('http://localhost:3000/hist/' + this.props.coin, this.props.coin, false)}
                >
                    <td><strong>{this.props.coin}</strong></td>
                    <td>{(this.state.data.price / this.state.BTC.price).toFixed(8)}</td>
                    <td>{this.state.data.volume}</td>
                    {this.state.data.cap24hrChange > 0 ?
                        <td className="ticker-change-up">{this.state.data.cap24hrChange}</td> :
                        <td className="ticker-change-down">{this.state.data.cap24hrChange}</td>}
                    <td>{this.state.data.long}</td>
                </tr>
            )
        }
    }

}