import React from "react";
import { Accordion } from 'react-bootstrap';
import CoinEntry from './CoinEntry';

//list creating function
export default function CoinList ({coins, remove})  {
    // map through the coins
    const coinNode = coins.map((coins) => {
        return <CoinEntry coin={coins} remove={remove}/>
    });
    // return list
    return (<Accordion> {coinNode} </Accordion>);
};
