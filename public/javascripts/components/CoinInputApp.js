import React, {Component} from "react";

import cookie from "react-cookies";
import csv from 'csv';
import { Jumbotron } from 'react-bootstrap';

import CoinForm from './CoinForm';
import CoinList from './CoinList';



/** This component renders input form for user to enter information on coins he/she'd like to track (also accepts previously
 * exported CSV portfolio file), passes data through handling functions (add and remove),
 * maps through it and creates list displayed to user. An option to export portfolio as CSV is also presented. */


// container component that handles all other components
export default class CoinInputApp extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        this.sendToParent = this.sendToParent.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            data: cookie.load("data") || [],
            date: cookie.load("tracking-date") || null,
            showPortfolioChart: true
        }
    }

    // send portfolio metadata to parent (PortfolioContainer),
    // which passes it to sibling (PortfolioPerformance)
    componentWillMount(){
        this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.showPortfolioChart === false){
            this.setState({showPortfolioChart: false})
        }
    }

    // add coin handler
    addCoin(name, quantity){
        // assemble data, id is coin abbreviation taken from first three letters of input
        let coin = {name: name, id: name, quantity: quantity, price: 0};
        // update data - push JS object to state
        this.state.data.push(coin);
        // update state
        this.setState({data: this.state.data});
        // save data to cookies
        cookie.save("data", this.state.data, {path: "/", maxAge: 631138520});
        this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
    }

    // handle remove
    handleRemove(id){
        // filter all coins except the one to be removed
        const remainder = this.state.data.filter((coin) => {
            if(coin.id !== id) return coin;
        });
        // update state with filter
        this.setState({data: remainder});
        // update cookies
        cookie.save("data", remainder, {path: "/", maxAge: 631138520});
        //send updated data to parent
        this.sendToParent(remainder, this.state.date, this.state.showPortfolioChart);
    }


    //receives date string from child (CoinForm), saves it to state and cookies
    setDate(date){
        this.setState({date: date});
        cookie.save("tracking-date", date, {path: "/", maxAge: 631138520});
        this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
    }


    // this function handles CSV upload, it utilises File Reader to read content of file without downloading it,
    // and parses CSV to JSON using csv package
    uploadCSV(e) {
        //define File Reader instance
        const reader = new FileReader();
        //define file uploaded by user
        const file = e.target.files[0];
        // define this to use in nested function
        let _this = this;

        //read file content and output a string
        reader.readAsBinaryString(file);

        //when file was read pass it to CSV parser
        reader.onload = () => {
            //parse CSV to JSON using csv package
            csv.parse(reader.result, {columns: true}, function (err, data) {
                //set parsed data as state
                _this.setState({data: data});
                //update cookies
                cookie.save("data", data, {path: "/", maxAge: 631138520});
                //send updated data to parent
                _this.sendToParent(data, this.state.date, this.state.showPortfolioChart);
            })
        };
    }

    // send portfolio metadata to parent (PortfolioContainer),
    // which passes it to sibling (PortfolioPerformance)
    sendToParent(data, date, showChart){
        this.props.getPortfolioMetadata(data, date, showChart)
    }

    //triggered each time child (CoinEntry) receives socket update (which sets new window value),
    //sends portfolio metadata to PortfolioPerformance to prompt its re-render
    getReturnedData(){
        this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
    }

    showPortfolioChart(showChart){
        this.setState({showPortfolioChart: showChart});
        this.sendToParent(this.state.data, this.state.date, showChart)
    }

    render(){
        // render JSX, pass props
        return (
            <div>
                <Jumbotron style={{height: '425', overflowY: 'scroll', overflowX: 'contain'}}>
                    <CoinForm
                        addCoin={this.addCoin.bind(this)}
                        data={this.state.data}
                        date={this.state.date}
                        uploadCSV={this.uploadCSV.bind(this)}
                        setDate={this.setDate.bind(this)}
                        showPortfolioChart={this.showPortfolioChart.bind(this)}
                    />
                    <CoinList
                        coins={this.state.data}
                        remove={this.handleRemove.bind(this)}
                        returnData={this.getReturnedData.bind(this)}
                    />
                </Jumbotron>
            </div>
        );
    }
}