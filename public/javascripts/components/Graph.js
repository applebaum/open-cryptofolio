import React, {Component} from "react";
import axios from 'axios';
import Chart from './Highcharts.react';

/** The GraphPreload component is rendered by Ticker component from which it receives props on coin user chose to display
   chart of.  It then sends HTTP GET request to Node.js server to route specified in received props which in turn sends
   request to external API to and redirects response (historical data on coin) back to client. While data is being fetched
   from external API this component renders a placeholder component (GraphPlaceHolder), and when it detects a change in
   state it renders a chart component (Graph). Graph component receives data as props and then uses it to render chart
   powered by HighCharts. */

export default class GraphPreload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            // key is used as a prop to notify child of update
            key: null
            }
        }

    componentDidMount() {
        // if chosenCoinData is a string, then render individual coin chart, if else render activePortfolio chart
        if (typeof this.props.chosenCoinData === 'string') {
            let _this = this;
            // set route path from props
            let path = this.props.chosenCoinData;
                // axios is used to make HTTP GET call to server
                axios
                    .get(path)
                    // received data is then passed to state, key state is changed to trigger child re-render
                    .then(function (data) {
                        _this.setState(Object.assign({}, _this.state, {data: data.data.price, key: Math.random() }))
                    });
        } else {
            this.setState({data: this.props.chosenCoinData})
        }
    }

    render() {

        // when a change of state is detected ('null' by default) a Graph component is rendered
        if (this.state.data) {
            // data from parent state is passed as props
            return <Graph key={this.state.key} data={this.state.data} name={this.props.chosenCoinName} />;
            // otherwise placeholder component is rendered
        } else {
            return <GraphPlaceHolder />;
        }
    }
}

class Graph extends Component {

     render() {
        //define chart options according to HighCharts documentation
        let chartOptions = {
            chart: {
                // backgroundColor: null,
                style: {
                    fontFamily: 'Helvetica Neue, sans-serif'
                }
            },
            rangeSelector: {
                selected: 0
            },
            title: {
                text: this.props.name + ' performance'
            },
            tooltip: {
                style: {
                    width: '130px'
                },
                valueDecimals: 4,
                shared: true
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            series: [{
                name: this.props.name + ' to USD',
                // data is fed directly from props
                data: this.props.data,
                id: 'dataseries'
                // the event marker flags
            }]
        };

        return (
            React.createElement(Chart, {
                container: 'graph',
                options: chartOptions,
                type: 'stockChart'
            })
        )
    }
}

// placeholder element dummy chart with text

class GraphPlaceHolder extends Component {

    render() {

        //define chart options according to HighCharts documentation
        let chartOptions = {
            chart: {
                backgroundColor: null,
                style: {
                    fontFamily: 'Helvetica Neue, sans-serif'
                }
            },
            title: {
                text: 'To see chart please choose coin on the right',
                style: {
                    fontSize: '32px'
                }
            }
        };

        return (
            React.createElement(Chart, {
                container: 'graph',
                options: chartOptions,
                type: 'stockChart'
            })
        )
    }
}
