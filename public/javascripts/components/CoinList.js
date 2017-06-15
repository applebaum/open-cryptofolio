import React, {Component} from "react";
import { Accordion } from 'react-bootstrap';
import CoinEntry from './CoinEntry';

//list creating function
export default class CoinList extends Component {
    constructor(props) {
        super(props);
    }

    returnData(data){
        this.props.returnData(data);
    }

    render () {
    // map through the coins
    const coinNode = this.props.coins.map((coins) => {
        return <CoinEntry returnData={this.returnData.bind(this)} coin={coins} remove={this.props.remove}/>
    });
    // return list
    return (<Accordion> {coinNode} </Accordion>);
    }
};
