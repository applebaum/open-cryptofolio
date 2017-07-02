import React, {Component} from "react";
import { ListGroup } from 'react-bootstrap';
import CoinEntry from './CoinEntry';

//list creating function
export default class CoinList extends Component {
    constructor(props) {
        super(props);
    }


    //triggered by child (CoinEntry) to trigger parent's (CoinInputApp) update
    returnData(){
        this.props.returnData();
    }

    showCoinChart(link, name, boolean) {
        this.props.showCoinChart(link, name, boolean);
    }

    render () {
    // map through the coins
    const coinNode = this.props.coins.map((coins) => {
        return <CoinEntry returnData={this.returnData.bind(this)}
                          showCoinChart={this.showCoinChart.bind(this)}
                          coin={coins}
                          remove={this.props.remove}
                          key={coins.id}
        />
    });
    // return list
    return (
        <div>
            <ListGroup> {coinNode} </ListGroup>
        </div>);
    }
};
