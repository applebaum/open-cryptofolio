import React, {Component} from 'react';
import { Table, Well } from 'react-bootstrap';
import allCoins from './allCoins';
import TickerRow from './TickerRow';

export default class TickerTable extends Component {
    constructor(props) {
        super(props);
        this.chosenCoin = this.chosenCoin.bind(this);
    }

    chosenCoin(link, coin, showPortfolioChart){
        this.props.chosenCoin(link, coin, showPortfolioChart);
    }

    render() {

        // map through the coins
        const coinNode = allCoins.map((coins) => {
            return <TickerRow chosenCoin={this.chosenCoin} coin={coins} key={coins}/>
        });

        // return list
        return (<div className="ticker-container">

            <Table condensed hover>

                <thead>
                <tr
                    // className="ticker-head"
                >
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Change</th>
                    <th>Name</th>
                </tr>
                </thead>

                <tbody>
                {coinNode}
                </tbody>

            </Table>

        </div>);
    }
}