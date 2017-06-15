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
        socket.on('BTC', (data) => this.setState({BTC: data.message.msg}));
        socket.on(this.props.coin.id, (data) => this.setState({data: data.message.msg}));
    }

    componentWillUnmount() {
        socket.removeListener('BTC');
        socket.removeListener(this.props.coin.id);
    }

    componentWillUpdate(){
        this.updatePrice();
    }

    updatePrice(){
        let data = this.props.coin;
        data.price = this.state.data.price;
        this.props.returnData(data);
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
