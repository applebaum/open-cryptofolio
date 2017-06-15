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
            data: cookie.load("data") || []
        }
    }

    componentWillMount(){
        this.sendToParent(this.state.data);
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
        this.sendToParent(this.state.data);
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
        this.sendToParent(remainder);
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
                _this.sendToParent(data);
            })
        };
    }

    sendToParent(data){
        this.props.data(data)
    }

    getReturnedData(newData){

        //LOOK AT ME

    }

    render(){
        // console.log(this.state.toUSD);
        // render JSX, pass props
        console.log(this.state.data);

        return (
            <div>
                <Jumbotron style={{height: '425', overflowY: 'scroll', overflowX: 'contain'}}>
                    <CoinForm
                        addCoin={this.addCoin.bind(this)}
                        data={this.state.data}
                        uploadCSV={this.uploadCSV.bind(this)}
                    />
                    <CoinList
                        coins={this.state.data}
                        remove={this.handleRemove.bind(this)}
                        returnData={this.getReturnedData.bind(this)}
                    />
                </Jumbotron>
                {/*<PortfolioPerformance coins={this.state.data}/>*/}
            </div>
        );
    }
}