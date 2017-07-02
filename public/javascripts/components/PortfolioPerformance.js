import React, {Component} from "react";
import { Table, Well, Button, Collapse } from 'react-bootstrap';
import axios from 'axios';
import ReactFitText from 'react-fittext';

/*This will be a component for displaying overall value of user's activePortfolio*/

export default class Performance extends Component {

    constructor(props){
        super(props);
        this.calculateSum = this.calculateSum.bind(this);
        this.state = {
            sum: 0,
            fiat: 'USD',
            converted: 0,
            fiatPrices: null
        }
    }

    componentDidMount(){
        let path = 'http://localhost:3000/api/fiatrates',
            _this = this;

        axios
            .get(path)
            .then(function (data) {
                console.log('asked api for fiat values');
                _this.setState({fiatPrices: data.data.rates})
            })
    }

    //on each socket update of CoinEntry, receive new props,
    //each time new props are received call function to set new state
    componentWillReceiveProps(nextProps){
        this.calculateSum(nextProps.data);
    }

    calculateSum(data){
        //array containing activePortfolio metadata (name, quantity)
        let arr = data;
        //array for storing tracked coin names only
        let coinNames = [];
        //array for storing value of each individual activePortfolio entry
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

        //take coin names from activePortfolio metadata and store them in new array
        arr.forEach(function(entry){
            coinNames.push(entry.id);
        });

        //take coin quantity from activePortfolio metadata,
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
            if (this.state.fiat !== 'USD') {
                this.convertFiat();
            }
        }
    }

    convertFiat(){
        // if (fiatValues) {
        let price = this.state.fiatPrices;
        if (price) {
            this.setState({ converted:  price[this.state.fiat] * this.state.sum })
        }
    // }
    }


    render() {

        return (
            <div className="sum-container" >

                <Button className="fiat-btn" onClick={() => this.setState({open: !this.state.open})}>
                    <h4>{this.state.fiat}</h4>
                </Button>

                <div className="sum">
                    <ReactFitText>
                        <h1>
                            {this.state.fiat === 'USD' ? (this.state.sum).toFixed(2) : (this.state.converted).toFixed(2)}
                        </h1>
                    </ReactFitText>
                </div>

                <Collapse in={this.state.open}>
                    <div className="fiat-table-container">
                        <Table condensed responsive>
                            <tbody>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'USD'})}
                                    className={this.state.fiat === 'USD' ? 'chosen-fiat' : 'available-fiats'}>
                                    USD
                                </td>
                                <td onClick={() => this.setState({fiat: 'EUR'})}
                                    className={this.state.fiat === 'EUR' ? 'chosen-fiat' : 'available-fiats'}>
                                    EUR
                                </td>
                                <td onClick={() => this.setState({fiat: 'GBP'})}
                                    className={this.state.fiat === 'GBP' ? 'chosen-fiat' : 'available-fiats'}>
                                    GBP
                                </td>
                                <td onClick={() => this.setState({fiat: 'CNY'})}
                                    className={this.state.fiat === 'CNY' ? 'chosen-fiat' : 'available-fiats'}>
                                    CNY
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'AUD'})}
                                    className={this.state.fiat === 'AUD' ? 'chosen-fiat' : 'available-fiats'}>
                                    AUD
                                </td>
                                <td onClick={() => this.setState({fiat: 'BGN'})}
                                    className={this.state.fiat === 'BGN' ? 'chosen-fiat' : 'available-fiats'}>
                                    BGN
                                </td>
                                <td onClick={() => this.setState({fiat: 'BRL'})}
                                    className={this.state.fiat === 'BRL' ? 'chosen-fiat' : 'available-fiats'}>
                                    BRL
                                </td>
                                <td onClick={() => this.setState({fiat: 'CAD'})}
                                    className={this.state.fiat === 'CAD' ? 'chosen-fiat' : 'available-fiats'}>
                                    CAD
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'CHF'})}
                                    className={this.state.fiat === 'CHF' ? 'chosen-fiat' : 'available-fiats'}>
                                    CHF
                                </td>
                                <td onClick={() => this.setState({fiat: 'CZK'})}
                                    className={this.state.fiat === 'CZK' ? 'chosen-fiat' : 'available-fiats'}>
                                    CZK
                                </td>
                                <td onClick={() => this.setState({fiat: 'DKK'})}
                                    className={this.state.fiat === 'DKK' ? 'chosen-fiat' : 'available-fiats'}>
                                    DKK
                                </td>
                                <td onClick={() => this.setState({fiat: 'HKD'})}
                                    className={this.state.fiat === 'HKD' ? 'chosen-fiat' : 'available-fiats'}>
                                    HKD
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'HRK'})}
                                    className={this.state.fiat === 'HRK' ? 'chosen-fiat' : 'available-fiats'}>
                                    HRK
                                </td>
                                <td onClick={() => this.setState({fiat: 'HUF'})}
                                    className={this.state.fiat === 'HUF' ? 'chosen-fiat' : 'available-fiats'}>
                                    HUF
                                </td>
                                <td onClick={() => this.setState({fiat: 'IDR'})}
                                    className={this.state.fiat === 'IDR' ? 'chosen-fiat' : 'available-fiats'}>
                                    IDR
                                </td>
                                <td onClick={() => this.setState({fiat: 'ILS'})}
                                    className={this.state.fiat === 'ILS' ? 'chosen-fiat' : 'available-fiats'}>
                                    ILS
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'INR'})}
                                    className={this.state.fiat === 'INR' ? 'chosen-fiat' : 'available-fiats'}>
                                    INR
                                </td>
                                <td onClick={() => this.setState({fiat: 'JPY'})}
                                    className={this.state.fiat === 'JPY' ? 'chosen-fiat' : 'available-fiats'}>
                                    JPY
                                </td>
                                <td onClick={() => this.setState({fiat: 'KRW'})}
                                    className={this.state.fiat === 'KRW' ? 'chosen-fiat' : 'available-fiats'}>
                                    KRW
                                </td>
                                <td onClick={() => this.setState({fiat: 'MXN'})}
                                    className={this.state.fiat === 'MXN' ? 'chosen-fiat' : 'available-fiats'}>
                                    MXN
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'MYR'})}
                                    className={this.state.fiat === 'MYR' ? 'chosen-fiat' : 'available-fiats'}>
                                    MYR
                                </td>
                                <td onClick={() => this.setState({fiat: 'NOK'})}
                                    className={this.state.fiat === 'NOK' ? 'chosen-fiat' : 'available-fiats'}>
                                    NOK
                                </td>
                                <td onClick={() => this.setState({fiat: 'NZD'})}
                                    className={this.state.fiat === 'NZD' ? 'chosen-fiat' : 'available-fiats'}>
                                    NZD
                                </td>
                                <td onClick={() => this.setState({fiat: 'PHP'})}
                                    className={this.state.fiat === 'PHP' ? 'chosen-fiat' : 'available-fiats'}>
                                    PHP
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'PLN'})}
                                    className={this.state.fiat === 'PLN' ? 'chosen-fiat' : 'available-fiats'}>
                                    PLN
                                </td>
                                <td onClick={() => this.setState({fiat: 'RON'})}
                                    className={this.state.fiat === 'RON' ? 'chosen-fiat' : 'available-fiats'}>
                                    RON
                                </td>
                                <td onClick={() => this.setState({fiat: 'RUB'})}
                                    className={this.state.fiat === 'RUB' ? 'chosen-fiat' : 'available-fiats'}>
                                    RUB
                                </td>
                                <td onClick={() => this.setState({fiat: 'SEK'})}
                                    className={this.state.fiat === 'SEK' ? 'chosen-fiat' : 'available-fiats'}>
                                    SEK
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.setState({fiat: 'SGD'})}
                                    className={this.state.fiat === 'SGD' ? 'chosen-fiat' : 'available-fiats'}>
                                    SGD
                                </td>
                                <td onClick={() => this.setState({fiat: 'THB'})}
                                    className={this.state.fiat === 'THB' ? 'chosen-fiat' : 'available-fiats'}>
                                    THB
                                </td>
                                <td onClick={() => this.setState({fiat: 'TRY'})}
                                    className={this.state.fiat === 'TRY' ? 'chosen-fiat' : 'available-fiats'}>
                                    TRY
                                </td>
                                <td onClick={() => this.setState({fiat: 'ZAR'})}
                                    className={this.state.fiat === 'ZAR' ? 'chosen-fiat' : 'available-fiats'}>
                                    ZAR
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Collapse>

            </div>
        );
    }
}

