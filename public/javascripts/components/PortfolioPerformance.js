import React, {Component} from "react";
import { Jumbotron } from 'react-bootstrap';

/*This will be a component for displaying overall value of user's portfolio*/

export default class Ticker extends Component {

    constructor(props){
        super(props);
        this.setData = this.setData.bind(this);
        this.state = {
            sum: 0
        }
    }
    //on each socket update of CoinEntry, receive new props,
    //each time new props are received call function to set new state
    componentWillReceiveProps(nextProps){
        this.setData(nextProps.data);
    }

    setData(data){

        //array containing portfolio metadata (name, quantity)
        let arr = data;
        //array for storing tracked coin names only
        let coinNames = [];
        //array for storing value of each individual portfolio entry
        let coinValues = [];
        //function returns coin price from window.coin (set in CoinEntry on each socket update)
        //depending on received name
        let returnPrice = (name) => {
            switch (name) {
                case 'AMP': return window.AMP; break;
                case 'ARDR': return window.ARDR; break;
                case 'BCN': return window.BCN; break;
                case 'BCY': return window.BCY; break;
                case 'BELA': return window.BELA; break;
                case 'BLK': return window.BLK; break;
                case 'BTC': return window.BTC; break;
                case 'BTCD': return window.BTCD; break;
                case 'BTM': return window.BTM; break;
                case 'BTS': return window.BTS; break;
                case 'BURST': return window.BURST; break;
                case 'CLAM': return window.CLAM; break;
                case 'DASH': return window.DASH; break;
                case 'DCR': return window.DCR; break;
                case 'DGB': return window.DGB; break;
                case 'DOGE': return window.DOGE; break;
                case 'EMC2': return window.EMC2; break;
                case 'ETC': return window.ETC; break;
                case 'ETH': return window.ETH; break;
                case 'EXP': return window.EXP; break;
                case 'FCT': return window.FCT; break;
                case 'FLDC': return window.FLDC; break;
                case 'FLO': return window.FLO; break;
                case 'GAME': return window.GAME; break;
                case 'GNO': return window.GNO; break;
                case 'GNT': return window.GNT; break;
                case 'GRC': return window.GRC; break;
                case 'HUC': return window.HUC; break;
                case 'LBC': return window.LBC; break;
                case 'LSK': return window.LSK; break;
                case 'LTC': return window.LTC; break;
                case 'MAID': return window.MAID; break;
                case 'NAUT': return window.NAUT; break;
                case 'NAV': return window.NAV; break;
                case 'NEOS': return window.NEOS; break;
                case 'NMC': return window.NMC; break;
                case 'NOTE': return window.NOTE; break;
                case 'NXC': return window.NXC; break;
                case 'NXT': return window.NXT; break;
                case 'OMNI': return window.OMNI; break;
                case 'PASC': return window.PASC; break;
                case 'PINK': return window.PINK; break;
                case 'POT': return window.POT; break;
                case 'PPC': return window.PPC; break;
                case 'RADS': return window.RADS; break;
                case 'REP': return window.REP; break;
                case 'RIC': return window.RIC; break;
                case 'SBD': return window.SBD; break;
                case 'SC': return window.SC; break;
                case 'SJCX': return window.SJCX; break;
                case 'STR': return window.STR; break;
                case 'STRAT': return window.STRAT; break;
                case 'SYS': return window.SYS; break;
                case 'VIA': return window.VIA; break;
                case 'VRC': return window.VRC; break;
                case 'VTC': return window.VTC; break;
                case 'XBC': return window.XBC; break;
                case 'XCP': return window.XCP; break;
                case 'XEM': return window.XEM; break;
                case 'XMR': return window.XMR; break;
                case 'XPM': return window.XPM; break;
                case 'XRP': return window.XRP; break;
                case 'XVC': return window.XVC; break;
                case 'ZEC': return window.ZEC; break;
            }
        };

        //take coin names from portfolio metadata and store them in new array
        arr.forEach(function(entry){
            coinNames.push(entry.id);
        });

        //take coin quantity from portfolio metadata,
        //multiply it by corresponding coin's price (retrieved from window.coin),
        //push result values to new array
        arr.forEach(function(entry){
            coinValues.push(entry.quantity * returnPrice(entry.id));
        });

        //add all values from coinValues array
        let sum = coinValues.reduce((a, b) => a + b, 0);

        //if sum returns valid value, set it as state
        if (sum) {
            this.setState({sum: sum});
            window.sum = sum;
        }
    }

    render() {

        //display data from state (2 decimals)
        return (
            <Jumbotron style={{height: '425'}}>
                <h1>${(this.state.sum).toFixed(2)}</h1>
            </Jumbotron>
        );
    }
}

