import React, {Component} from "react";
import axios from 'axios';
import Chart from './Highcharts.react';

/* The GraphPreload component sends HTTP GET request to Node.js server which in turn sends request to external API to and redirects
 response (historical data on coin) back to client. While data is being fetched from external API this component
 renders a placeholder component (GraphPlaceHolder), and when it detects a change in state it renders a chart component
 (Graph). Graph component receives data as props and then uses it to render chart powered by HighCharts. */

export default class GraphPreload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
            }
        }

    componentDidMount () {
        let _this = this;
        this.serverRequest =
            // axios is used to make HTTP GET call to server
            axios
                .get("http://localhost:3000/hist/xmr")
                // received data is then passed to state
                .then(function(data){
                    _this.setState(Object.assign({}, _this.state, { data: data }))
                });
    }

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render() {
        // when a change of state is detected ('null' by default) a Graph component is rendered
        if (this.state.data) {
            // data from parent state is passed as props
            return <Graph data={this.state.data.data} />;
            // otherwise placeholder component is rendered
        } else {
            return <GraphPlaceHolder  />;
        }
    }
}

class Graph extends Component {
    render() {

        //define chart options according to HighCharts documentation
        let chartOptions = {
            rangeSelector: {
                selected: 0
            },
            title: {
                text: 'XMR to USD exchange rate'
            },
            tooltip: {
                style: {
                    width: '200px'
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
                name: 'XMR to USD',
                // data is fed directly from props
                data: this.props.data.price,
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

// placeholder element returns text
class GraphPlaceHolder extends Component {
    render(){
        return <div className="graph">Loading chart data...</div>
    }
}