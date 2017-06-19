import React, {Component} from "react";

import { Modal, Tooltip, OverlayTrigger, Glyphicon, Panel, Button } from 'react-bootstrap';

//connect to Node.js server via socket.io
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');

//list item entry creating function
export default class Coin extends Component {
    // each coin, with props received from CoinInputApp data handling function,
    // coin entry removed (for now) by clicking on list item
    constructor(props) {
        // pass props to parent class
        super(props);
        this.updatePrice = this.updatePrice.bind(this);
        // set initial empty state for each coin available for tracking
        this.state = {
            removeWarning: false,
            data: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BTC: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            }
        };
    }

    //receive socket data on BTC and selected coin, pass that data to state
    componentDidMount(){
        socket.on('BTC', (data) => this.setState({BTC: data ? data.message.msg : 0}));
        socket.on(this.props.coin.id, (data) => {
            //set new data as state
            this.setState({data: data ? data.message.msg : 0});
            //call updatePrice function to update window values on each socket update
            this.updatePrice();
            //notify parent that data was updated
            this.props.returnData();
        });
    }

    //close connection on component unmount
    componentWillUnmount() {
        socket.removeListener('BTC');
        socket.removeListener(this.props.coin.id);
    }

    //function sets global window.coin value equal to price of current coin
    updatePrice(){
        switch (this.props.coin.id) {
            case 'AMP': window.AMP = this.state.data.price; break;
            case 'ARDR': window.ARDR = this.state.data.price; break;
            case 'BCN': window.BCN = this.state.data.price; break;
            case 'BCY': window.BCY = this.state.data.price; break;
            case 'BELA': window.BELA = this.state.data.price; break;
            case 'BLK': window.BLK = this.state.data.price; break;
            case 'BTC': window.BTC = this.state.data.price; break;
            case 'BTCD': window.BTCD = this.state.data.price; break;
            case 'BTM': window.BTM = this.state.data.price; break;
            case 'BTS': window.BTS = this.state.data.price; break;
            case 'BURST': window.BURST = this.state.data.price; break;
            case 'CLAM': window.CLAM = this.state.data.price; break;
            case 'DASH': window.DASH = this.state.data.price; break;
            case 'DCR': window.DCR = this.state.data.price; break;
            case 'DGB': window.DGB = this.state.data.price; break;
            case 'DOGE': window.DOGE = this.state.data.price; break;
            case 'EMC2': window.EMC2 = this.state.data.price; break;
            case 'ETC': window.ETC = this.state.data.price; break;
            case 'ETH': window.ETH = this.state.data.price; break;
            case 'EXP': window.EXP = this.state.data.price; break;
            case 'FCT': window.FCT = this.state.data.price; break;
            case 'FLDC': window.FLDC = this.state.data.price; break;
            case 'FLO': window.FLO = this.state.data.price; break;
            case 'GAME': window.GAME = this.state.data.price; break;
            case 'GNO': window.GNO = this.state.data.price; break;
            case 'GNT': window.GNT = this.state.data.price; break;
            case 'GRC': window.GRC = this.state.data.price; break;
            case 'HUC': window.HUC = this.state.data.price; break;
            case 'LBC': window.LBC = this.state.data.price; break;
            case 'LSK': window.LSK = this.state.data.price; break;
            case 'LTC': window.LTC = this.state.data.price; break;
            case 'MAID': window.MAID = this.state.data.price; break;
            case 'NAUT': window.NAUT = this.state.data.price; break;
            case 'NAV': window.NAV = this.state.data.price; break;
            case 'NEOS': window.NEOS = this.state.data.price; break;
            case 'NMC': window.NMC = this.state.data.price; break;
            case 'NOTE': window.NOTE = this.state.data.price; break;
            case 'NXC': window.NXC = this.state.data.price; break;
            case 'NXT': window.NXT = this.state.data.price; break;
            case 'OMNI': window.OMNI = this.state.data.price; break;
            case 'PASC': window.PASC = this.state.data.price; break;
            case 'PINK': window.PINK = this.state.data.price; break;
            case 'POT': window.POT = this.state.data.price; break;
            case 'PPC': window.PPC = this.state.data.price; break;
            case 'RADS': window.RADS = this.state.data.price; break;
            case 'REP': window.REP = this.state.data.price; break;
            case 'RIC': window.RIC = this.state.data.price; break;
            case 'SBD': window.SBD = this.state.data.price; break;
            case 'SC': window.SC = this.state.data.price; break;
            case 'SJCX': window.SJCX = this.state.data.price; break;
            case 'STR': window.STR = this.state.data.price; break;
            case 'STRAT': window.STRAT = this.state.data.price; break;
            case 'SYS': window.SYS = this.state.data.price; break;
            case 'VIA': window.VIA = this.state.data.price; break;
            case 'VRC': window.VRC = this.state.data.price; break;
            case 'VTC': window.VTC = this.state.data.price; break;
            case 'XBC': window.XBC = this.state.data.price; break;
            case 'XCP': window.XCP = this.state.data.price; break;
            case 'XEM': window.XEM = this.state.data.price; break;
            case 'XMR': window.XMR = this.state.data.price; break;
            case 'XPM': window.XPM = this.state.data.price; break;
            case 'XRP': window.XRP = this.state.data.price; break;
            case 'XVC': window.XVC = this.state.data.price; break;
            case 'ZEC': window.ZEC = this.state.data.price; break;
        }
    }

    // shows content hidden under cat (coin/BTC and coin/USD ratio)
    showContent(){
        //check  if data on coin was already received to avoid displaying uncalculated data,
        //otherwise return string placeholder
        if (this.state.data.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="allContentData" style={{display: 'inline-block'}}>
                    <div style={{display: 'inline-block'}} className="btcPriceFull">
                        <p className="toBTCRatioName"> {this.props.coin.id}/BTC: </p>
                        {' '}
                        {/*divide coin/USD price by BTC/USD price to calculate coin/BTC price and display 8 digits after decimal*/}
                        <p className="toBTCRatioValue"> {(this.state.data.price / this.state.BTC.price).toFixed(8)} </p>
                    </div>
                    {' '}
                    <div style={{display: 'inline-block'}} className="usdPriceFull">
                        <p className="toUSDRatioName"> {this.props.coin.id}/USD: </p>
                        {' '}
                        {/*show coin/USD price and display 2 digits after decimal*/}
                        <p className="toBTCRatioValue">{(this.state.data.price).toFixed(2)} </p>
                    </div>
                    {' '}
                    {/*render remove coin entry from portfolio button*/}
                    <OverlayTrigger delayShow={500} placement="right" overlay={<Tooltip id="tooltip">Remove coin from portfolio</Tooltip>}>
                        <Button bsStyle="danger" className="remove-button"
                                onClick={()=>this.setState({ removeWarning: true })}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </OverlayTrigger>
                    {/*render delete coin confirmation controlled by this.state.removeWarning boolean*/}
                    <Modal className="modal" keyboard show={this.state.removeWarning} bsSize="small">
                        <Modal.Header className="modal-header">
                            <Modal.Title className="modal-title" id="contained-modal-title-sm"><strong>Delete entry</strong></Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                            <h4>Are you sure you want to delete {' ' + this.props.coin.id + ' '} from your portfolio?</h4>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <Button className="modal-close-button" bsSize="large" onClick={() => {
                                this.closeWarning()}}>
                                <Glyphicon glyph="menu-left"/>
                                {' '}
                                Return
                            </Button>
                            {' '}
                            <Button className="modal-remove-button" bsSize="large" bsStyle="danger"
                                    onClick={() => {
                                        this.props.remove(this.props.coin.id)}}>
                                Delete
                                {' '}
                                <Glyphicon glyph="trash"/>
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else {
            // return string placeholder if data wasnt loaded
            return (<div style={{display: 'inline-block'}}> <p className="loading-entry"> Loading data... </p> </div>)
        }
    }

    //shows content displayed in coin entry header
    showHeader(){
        //check if data on coin was already received to avoid displaying uncalculated data,
        //otherwise return string placeholder
        if (this.state.data.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="coinEntryHeader" >
                    {/*display full coin name received from API*/}
                    <p className="coinNameLong"> {this.state.data.long}</p>
                    {' '}
                    <div className="allHeaderData" style={{display: 'inline-block'}} >
                        <div style={{display: 'inline-block'}} className="coinQFull">
                            {/*show coin symbol and quantity received from input props*/}
                            <p className="coinName"> {this.props.coin.name}{':'} </p>
                            {' '}
                            <p className="coinQ"> {this.props.coin.quantity} </p>
                        </div>
                        {' '}
                        <div style={{display: 'inline-block'}} className="BTCFull">
                            <p className="btcName"> BTC: </p>
                            {' '}
                            {/*display coin entry value in BTC by first calculating value in USD (coin USD price multiplied by quantitiy),
                             and then dividing result by BTC price, 8 digits after decimal displayed*/}
                            <p className="btcValue"> {((this.state.data.price * this.props.coin.quantity) / this.state.BTC.price).toFixed(8)} </p>
                        </div>
                        {' '}
                        <div style={{display: 'inline-block'}} className="USDFull">
                            <p className="usdName">  {'  USD:'} </p>
                            {' '}
                            {/*display coin entry value in USD by multiplying coin price in USD by quantity*/}
                            <p className="usdValue">{(this.state.data.price * this.props.coin.quantity).toFixed(2)}</p>
                        </div>
                        {' '}
                        {/*check if coin change percentage is positive or negative and apply className (red or green) accordingly*/}
                        {this.state.data.cap24hrChange > 0 ?
                            <p className='coinEntryChangeUp'> {' ('}{this.state.data.cap24hrChange}{'%)'}</p> :
                            <p className='coinEntryChangeDown'> {' ('}{this.state.data.cap24hrChange}{'%)'}</p>}
                    </div>
                    {' '}
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Show more</Tooltip>}>
                        <Button>
                            <Glyphicon glyph="menu-down"/>
                        </Button>
                    </OverlayTrigger>

                </div>
            )
        } else {
            return (<div style={{display: 'inline-block'}}> <p className="loading-entry"> Loading data... </p> </div>)
        }
    }

    closeWarning() {this.setState({ removeWarning: false })};


    render() {
        return (
            <div>
                <Panel
                    className="coinEntry"
                    collapsible
                    // data displayed in header
                    header={this.showHeader()}
                    key={this.props.coin.id} >
                    {/*data displayed under cat*/}
                    {this.showContent()}
                </Panel>

            </div>);
    }}
