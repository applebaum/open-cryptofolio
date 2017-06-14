import React from 'react';
import { Table, Well } from 'react-bootstrap';
import allCoins from './allCoins';
import TickerRow from './TickerRow';

export default function TickerTable () {

    // map through the coins
    const coinNode = allCoins.map((coins) => {
        return <TickerRow coin={coins} />
    });

    // return list
    return (<Well className="ticker-container">

        <Table striped condensed hover >

        <thead>
        <tr  className="ticker-head">
            <th>Coin</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Change</th>
            <th>Name</th>
        </tr>
        </thead>

        <tbody>
        <tr className="ticker-head">{' '}</tr>
            {coinNode}
        </tbody>

    </Table>

        </Well>);

}