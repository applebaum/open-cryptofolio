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
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: null,
                style: {
                    fontFamily: 'Helvetica Neue, sans-serif'
                },
                plotBorderColor: '#e6e6e9'
            },
            title: {
                text: this.props.name + ' performance',
                style: {
                    color: '#E0E0E3',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                 }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    width: '130px',
                    color: '#F0F0F0'
                },
                valueDecimals: 4,
                shared: true
            },
            xAxis: {
                gridLineColor: '#d3d3d6',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#cdcdd2',
                minorGridLineColor: '#c9c9d1',
                tickColor: '#c7c7cc',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#bababf',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#bcbcc2',
                minorGridLineColor: '#b6b6bd',
                tickColor: '#b4b4b9',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#b8b8bb'
                    },
                    text: 'Exchange rate'
                }
            },
            series: [{
                name: this.props.name + ' to USD',
                // data is fed directly from props
                data: this.props.data,
                id: 'dataseries'
                // the event marker flags
            }],
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#d3d3da'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#c4c4c9'
                }
            },
            credits: {
                style: {
                    color: '#c7c7c7'
                }
            },
            labels: {
                style: {
                    color: '#c7c7cc'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#2b908f'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                selected: 0,
                buttonTheme: {
                    fill: '#null',
                    stroke: '#ffffff',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#ffffff',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#2b908f',
                            stroke: '#ffffff',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#cfcfd6',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#dddddd',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#b7b7bf'
                }
            },

            scrollbar: {
                barBackgroundColor: '#d6d7cd',
                barBorderColor: '#c7c7cc',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#bbbbc1',
                buttonBorderColor: '#ccccd2',
                rifleColor: '#FFF',
                trackBackgroundColor: '#b5b5bd',
                trackBorderColor: '#c1c1c3'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
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
                    fontFamily: 'Open Sans, sans-serif'
                }
            },
            title: {
                text: 'Welcome to Open Cryptofolio! To see chart, create portfolio(s) or select coin from ticker (hidden by default).',
                style: {
                    color: '#fcfcff',
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
