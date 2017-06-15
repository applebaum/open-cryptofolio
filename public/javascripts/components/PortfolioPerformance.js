import React, {Component} from "react";
import { Jumbotron } from 'react-bootstrap';
import allCoins from './allCoins';
import cookie from "react-cookies";

//connect to Node.js server via socket.io
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');


/*This will be a component for displaying overall value of user's portfolio*/

export default class Ticker extends Component {

    constructor(props){
        super(props);
        this.setData = this.setData.bind(this);
        this.state = {
            sum: 0
        }
    }

    // componentDidMount(){
    //     allCoins.forEach(function(coin){
    //         socket.on(coin, (data) => sessionStorage.setItem(coin, data.message.msg.price));
    //     });
    //     this.setData(this.props.data);
    // }

    // componentDidMount(){
    //     allCoins.forEach(function(coin){
    //         socket.removeListener(coin);
    //     });
    // }

    componentWillReceiveProps(nextProps){
        this.setData(nextProps.data);
    }

    // componentDidUpdate(){
    //     this.setData(this.props.data);
    // }

    setData(data){
        let arr = data;
        let coinNames = [];
        let coinValues = [];

        console.log(arr);


        arr.forEach(function(entry){
            coinNames.push(entry.id);
        });

        coinNames.forEach(function(entry){
            socket.on(entry, (data) => sessionStorage.setItem(entry, data.message.msg.price));
        });

        arr.forEach(function(entry){
            coinValues.push(entry.quantity * sessionStorage.getItem(entry.id));
        });

        console.log(coinValues);
        console.log(coinNames);

        let sum = coinValues.reduce((a, b) => a + b, 0);

        this.setState({sum: sum})


    }

    render() {

        // let repeat = this.setData(this.props.data);
        // this.setData(this.props.data);

        return (
            <Jumbotron style={{height: '425'}}>
                <h1>${(this.state.sum).toFixed(2)}</h1>
            </Jumbotron>
        );
    }
}

