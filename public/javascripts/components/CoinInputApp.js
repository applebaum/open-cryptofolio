import React, {Component} from "react";

import cookie from "react-cookies";
import csv from 'csv';
import { Tab, Jumbotron } from 'react-bootstrap';

import CoinForm from './CoinForm';
import CoinList from './CoinList';



/** This component renders input form for user to enter information on coins he/she'd like to track (also accepts previously
 * exported CSV activePortfolio file), passes data through handling functions (add and remove),
 * maps through it and creates list displayed to user. An option to export activePortfolio as CSV is also presented. */


// container component that handles all other components
export default class CoinInputApp extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        this.sendToParent = this.sendToParent.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            // data: cookie.load("data") || [],
            // date: cookie.load("tracking-date") || null,
            data: this.props.portfolio.data,
            date: this.props.portfolio.date,
            showPortfolioChart: true,
            sameCoinWarn: false
        }
    }

    // send activePortfolio metadata to parent (PortfolioContainer),
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
        if (this.state.data.filter(e => e.id === name).length > 0) {
            // this.setState({sameCoinWarn: true})
        } else {
            // assemble data, id is coin abbreviation taken from first three letters of input
            let coin = {name: name, id: name, quantity: quantity, portfolioId: this.props.portfolio.id};
            // update data - push JS object to state
            this.state.data.push(coin);
            // update state
            this.setState({data: this.state.data});
            // save data to cookies
            cookie.save("data", this.state.data, {path: "/", maxAge: 631138520});
            this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
        }
    }

    dismissWarn(boolean){
        this.setState({sameCoinWarn: boolean})
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

    // send activePortfolio metadata to parent (PortfolioContainer),
    // which passes it to sibling (PortfolioPerformance)
    sendToParent(data, date, showChart){
        let dataAndMeta = {id: this.props.portfolio.id, name: this.props.portfolio.name, date: date, data: data};
        this.props.getPortfolioMetadata(dataAndMeta, date, showChart);
    }

    //triggered each time child (CoinEntry) receives socket update (which sets new window value),
    //sends activePortfolio metadata to PortfolioPerformance to prompt its re-render
    getReturnedData(){
        this.sendToParent(this.state.data, this.state.date, this.state.showPortfolioChart);
    }

    showPortfolioChart(showChart){
        this.setState({showPortfolioChart: showChart});
        this.sendToParent(this.state.data, this.state.date, showChart)
    }

    showCoinChart(link, name, boolean) {
        this.props.showCoinChart(link, name, boolean)
    }

    handleRemovePortfolio(id){
        this.props.handleRemovePortfolio(id)
    }

    editName(name){
        this.props.editName(this.props.portfolio.id, name)
    }

    render(){
        // render JSX, pass props
        return (
            <Tab.Pane eventKey={this.props.portfolio.id}>
                <div className="portfolio-app">
                    <CoinForm
                        addCoin={this.addCoin.bind(this)}
                        data={this.state.data}
                        date={this.state.date}
                        uploadCSV={this.uploadCSV.bind(this)}
                        setDate={this.setDate.bind(this)}
                        showPortfolioChart={this.showPortfolioChart.bind(this)}
                        portfolio={this.props.portfolio}
                        removePortfolio={this.handleRemovePortfolio.bind(this)}
                        sameCoinWarn={this.state.sameCoinWarn}
                        dismissWarn={this.dismissWarn.bind(this)}
                        editName={this.editName.bind(this)}
                    />
                    <CoinList
                        className="coin-list"
                        coins={this.state.data}
                        remove={this.handleRemove.bind(this)}
                        returnData={this.getReturnedData.bind(this)}
                        showCoinChart={this.showCoinChart.bind(this)}
                    />
                </div>
            </Tab.Pane>
        );
    }
}