import React, {Component} from "react";
import { Col, Well } from 'react-bootstrap';
import Graph from './Graph';
import axios from 'axios';

/* This component is a container for Graph and Graph Placeholder (referenced by id from HighChart options)
   that renders to Layout*/

export default class GraphContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenCoinName: null,
            chosenCoinData: null,
            key: null
        }
    }

    componentWillReceiveProps(nextProps){
        // (for portfolio chart) only update component if received props are in fact new (to prevent endless api calls)
        if (this.props.portfolio !== nextProps.portfolio || this.props.date !== nextProps.date) {
            // alert('new prop!');
            //if props are new call calculating function
            this.calculatePortfolioSum(nextProps.portfolio, nextProps.date)

            //(for coin chart) only update component if received props are in fact new (to prevent endless api calls)
        } else if (this.props.chosenCoinData !== nextProps.chosenCoinData) {
            this.setState({chosenCoinName: nextProps.chosenCoinName, chosenCoinData: nextProps.chosenCoinData, key: Math.random()})

            //update component to resize it if ticker is shown/hidden
        } else if (this.props.showTicker !== nextProps.showTicker) {
            this.setState({key: Math.random()})
        }
    }

    calculatePortfolioSum(portfolio, date){
        //array for storing portfolio coin names
        let coinNames = [];
        //array for storing calculated value of each portfolio coin after filtering out by date (each element is value for a day)
        let filteredValues = [];
        //array for storing sum of filtered portfolio coin values (each element is sum value for a day)
        let valuesSum = [];
        //parse date string to Date object
        let portfolioTimeStamp = Date.parse(date);

        //create array of portfolio coin names
        portfolio.forEach(function(entry){
            coinNames.push(entry.id);
        });

        coinNames.forEach(function(name){

            //make API call for each coin based on coin name
            let path = 'http://localhost:3000/hist/' + name;

            axios
                .get(path)
                .then(function (data) {

                    //array of all historical prices (each element is a timestamp and price
                    let historicalPrice = data.data.price;
                    //filter out all elements that precede portfolio tracking date (create new array, no timestamps, only prices)
                    let filteredArray = historicalPrice.filter(function( element ) {
                        return element[0] > portfolioTimeStamp;
                    });

                    //multiply each price by portfolio quantity to get portfolio value for each coin
                    portfolio.forEach(function(entry){

                        if (entry.id === name) {
                            filteredValues.push(filteredArray.map(x => x[1] * entry.quantity))
                        }
                    });

                    //calculate sum of all coin values for each day
                    for(let i = 0; i < filteredValues[0].length; i++){
                        let runningSum = 0;
                        for(let j = 0; j < filteredValues.length; j++){
                            runningSum += filteredValues[j][i]
                        }
                        valuesSum[i] = runningSum
                    }
                });
        });
    }

    render() {

        return (
                <Col md={12}>
                        <Well>
                            <Graph chosenCoinData={this.state.chosenCoinData}
                                   chosenCoinName={this.state.chosenCoinName}
                                   key={this.state.key}
                            />
                        </Well>
                </Col>

            );
        }
}
