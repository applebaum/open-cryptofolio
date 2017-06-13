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
        // set initial empty state for each coin available for tracking
        this.state = {
            removeWarning: false,
            data: {
                message: {
                    coin: null,
                    msg: {
                        price: null,
                        volume: null,
                        long: null,
                        cap24hrChange: null
                    }
                }
            },
            BTC: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XMR: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            AMP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            ARDR: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BCY: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BELA: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BLK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BTM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BTS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BURST: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            CLAM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            DASH: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            DCR: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            DGB: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            DOGE: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            EMC2: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            ETC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            ETH: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            EXP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            FCT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            FLDC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            FLO: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            GAME: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            GNO: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            GNT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            GRC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            HUC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            LBC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            LSK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            LTC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            MAID: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NAUT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NEOS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NMC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NOTE: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NXC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            NXT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            OMNI: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            PASC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            PINK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            POT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            PPC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            RADS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            REP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            RIC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            SBD: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            SC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            SJCX: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            STEEM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XLM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            STRAT: {
                FLAGS: null,
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            SYS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            VIA: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            VRC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            VTC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XBC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XCP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XEM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XPM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XRP: {
                price: 0,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            XVC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            ZEC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            },
            BCN: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null
            }
        };
    }


    //connect to Node.js via socket.io and pass received data to handler function
    componentDidMount(){
        socket.on('trades', (data) => this.setData(data));
    }

    //handler function passes received data to component state and fires update functions on all of the coins
    setData(data) {
        this.setState({
            data: data
        });
        this.updateBTC();
        this.updateXMR();
        this.updateBCN();
        this.updateAMP();
        this.updateARDR();
        this.updateBCY();
        this.updateBELA();
        this.updateBLK();
        this.updateBTM();
        this.updateBTS();
        this.updateBURST();
        this.updateCLAM();
        this.updateDASH();
        this.updateDCR();
        this.updateDGB();
        this.updateDOGE();
        this.updateEMC2();
        this.updateETC();
        this.updateETH();
        this.updateEXP();
        this.updateFCT();
        this.updateFLDC();
        this.updateFLO();
        this.updateGAME();
        this.updateGNO();
        this.updateGNT();
        this.updateGRC();
        this.updateHUC();
        this.updateLBC();
        this.updateLSK();
        this.updateLTC();
        this.updateMAID();
        this.updateNAUT();
        this.updateNEOS();
        this.updateNMC();
        this.updateNOTE();
        this.updateNXC();
        this.updateNXT();
        this.updateOMNI();
        this.updatePASC();
        this.updatePINK();
        this.updatePOT();
        this.updatePPC();
        this.updateRADS();
        this.updateREP();
        this.updateRIC();
        this.updateSBD();
        this.updateSC();
        this.updateSJCX();
        this.updateSTEEM();
        this.updateXLM();
        this.updateSTRAT();
        this.updateSYS();
        this.updateVIA();
        this.updateVRC();
        this.updateVTC();
        this.updateXBC();
        this.updateXCP();
        this.updateXEM();
        this.updateXPM();
        this.updateXRP();
        this.updateXVC();
        this.updateZEC();
    }

    // update functions compare coin name from component state to specified coin name,
    // and if it matches sets components state as specified coin state
    updateXMR() {
        if (this.state.data.message.coin === 'XMR') {
            this.setState({
                XMR: this.state.data.message.msg
            })
        }
    }

    updateBTC() {
        if (this.state.data.message.coin === 'BTC') {
            this.setState({
                BTC: this.state.data.message.msg
            })
        }
    }

    updateBCN() {
        if (this.state.data.message.coin === 'BCN') {
            this.setState({
                BCN: this.state.data.message.msg
            })
        }
    }

    updateAMP() {
        if (this.state.data.message.coin === 'AMP') {
            this.setState({
                AMP: this.state.data.message.msg
            })
        }
    }

    updateARDR() {
        if (this.state.data.message.coin === 'ARDR') {
            this.setState({
                ARDR: this.state.data.message.msg
            })
        }
    }

    updateBCY() {
        if (this.state.data.message.coin === 'BCY') {
            this.setState({
                BCY: this.state.data.message.msg
            })
        }
    }

    updateBELA() {
        if (this.state.data.message.coin === 'BELA') {
            this.setState({
                BELA: this.state.data.message.msg
            })
        }
    }

    updateBLK() {
        if (this.state.data.message.coin === 'BLK') {
            this.setState({
                BLK: this.state.data.message.msg
            })
        }
    }

    updateBTM() {
        if (this.state.data.message.coin === 'BTM') {
            this.setState({
                BTM: this.state.data.message.msg
            })
        }
    }

    updateBTS() {
        if (this.state.data.message.coin === 'BTS') {
            this.setState({
                BTS: this.state.data.message.msg
            })
        }
    }

    updateBURST() {
        if (this.state.data.message.coin === 'BURST') {
            this.setState({
                BURST: this.state.data.message.msg
            })
        }
    }

    updateCLAM() {
        if (this.state.data.message.coin === 'CLAM') {
            this.setState({
                CLAM: this.state.data.message.msg
            })
        }
    }

    updateDASH() {
        if (this.state.data.message.coin === 'DASH') {
            this.setState({
                DASH: this.state.data.message.msg
            })
        }
    }

    updateDCR() {
        if (this.state.data.message.coin === 'DCR') {
            this.setState({
                DCR: this.state.data.message.msg
            })
        }
    }

    updateDGB() {
        if (this.state.data.message.coin === 'DGB') {
            this.setState({
                DGB: this.state.data.message.msg
            })
        }
    }

    updateDOGE() {
        if (this.state.data.message.coin === 'DOGE') {
            this.setState({
                DOGE: this.state.data.message.msg
            })
        }
    }

    updateEMC2() {
        if (this.state.data.message.coin === 'EMC2') {
            this.setState({
                EMC2: this.state.data.message.msg
            })
        }
    }

    updateETC() {
        if (this.state.data.message.coin === 'ETC') {
            this.setState({
                ETC: this.state.data.message.msg
            })
        }
    }

    updateETH() {
        if (this.state.data.message.coin === 'ETH') {
            this.setState({
                ETH: this.state.data.message.msg
            })
        }
    }

    updateEXP() {
        if (this.state.data.message.coin === 'EXP') {
            this.setState({
                EXP: this.state.data.message.msg
            })
        }
    }

    updateFCT() {
        if (this.state.data.message.coin === 'FCT') {
            this.setState({
                FCT: this.state.data.message.msg
            })
        }
    }

    updateFLDC() {
        if (this.state.data.message.coin === 'FLDC') {
            this.setState({
                FLDC: this.state.data.message.msg
            })
        }
    }

    updateFLO() {
        if (this.state.data.message.coin === 'FLO') {
            this.setState({
                FLO: this.state.data.message.msg
            })
        }
    }

    updateGAME() {
        if (this.state.data.message.coin === 'GAME') {
            this.setState({
                GAME: this.state.data.message.msg
            })
        }
    }

    updateGNO() {
        if (this.state.data.message.coin === 'GNO') {
            this.setState({
                GNO: this.state.data.message.msg
            })
        }
    }

    updateGNT() {
        if (this.state.data.message.coin === 'GNT') {
            this.setState({
                GNT: this.state.data.message.msg
            })
        }
    }

    updateGRC() {
        if (this.state.data.message.coin === 'GRC') {
            this.setState({
                GRC: this.state.data.message.msg
            })
        }
    }

    updateHUC() {
        if (this.state.data.message.coin === 'HUC') {
            this.setState({
                HUC: this.state.data.message.msg
            })
        }
    }

    updateLBC() {
        if (this.state.data.message.coin === 'LBC') {
            this.setState({
                LBC: this.state.data.message.msg
            })
        }
    }

    updateLSK() {
        if (this.state.data.message.coin === 'LSK') {
            this.setState({
                LSK: this.state.data.message.msg
            })
        }
    }

    updateLTC() {
        if (this.state.data.message.coin === 'LTC') {
            this.setState({
                LTC: this.state.data.message.msg
            })
        }
    }

    updateMAID() {
        if (this.state.data.message.coin === 'MAID') {
            this.setState({
                MAID: this.state.data.message.msg
            })
        }
    }

    updateNAUT() {
        if (this.state.data.message.coin === 'NAUT') {
            this.setState({
                NAUT: this.state.data.message.msg
            })
        }
    }

    updateNEOS() {
        if (this.state.data.message.coin === 'NEOS') {
            this.setState({
                NEOS: this.state.data.message.msg
            })
        }
    }

    updateNMC() {
        if (this.state.data.message.coin === 'NMC') {
            this.setState({
                NMC: this.state.data.message.msg
            })
        }
    }

    updateNOTE() {
        if (this.state.data.message.coin === 'NOTE') {
            this.setState({
                NOTE: this.state.data.message.msg
            })
        }
    }

    updateNXC() {
        if (this.state.data.message.coin === 'NXC') {
            this.setState({
                NXC: this.state.data.message.msg
            })
        }
    }

    updateNXT() {
        if (this.state.data.message.coin === 'NXT') {
            this.setState({
                NXT: this.state.data.message.msg
            })
        }
    }

    updateOMNI() {
        if (this.state.data.message.coin === 'OMNI') {
            this.setState({
                OMNI: this.state.data.message.msg
            })
        }
    }

    updatePASC() {
        if (this.state.data.message.coin === 'PASC') {
            this.setState({
                PASC: this.state.data.message.msg
            })
        }
    }

    updatePINK() {
        if (this.state.data.message.coin === 'PINK') {
            this.setState({
                PINK: this.state.data.message.msg
            })
        }
    }

    updatePOT() {
        if (this.state.data.message.coin === 'POT') {
            this.setState({
                POT: this.state.data.message.msg
            })
        }
    }

    updatePPC() {
        if (this.state.data.message.coin === 'PPC') {
            this.setState({
                PPC: this.state.data.message.msg
            })
        }
    }

    updateRADS() {
        if (this.state.data.message.coin === 'RADS') {
            this.setState({
                RADS: this.state.data.message.msg
            })
        }
    }

    updateREP() {
        if (this.state.data.message.coin === 'REP') {
            this.setState({
                REP: this.state.data.message.msg
            })
        }
    }

    updateRIC() {
        if (this.state.data.message.coin === 'RIC') {
            this.setState({
                RIC: this.state.data.message.msg
            })
        }
    }

    updateSBD() {
        if (this.state.data.message.coin === 'SBD') {
            this.setState({
                SBD: this.state.data.message.msg
            })
        }
    }

    updateSTEEM() {
        if (this.state.data.message.coin === 'STEEM') {
            this.setState({
                STEEM: this.state.data.message.msg
            })
        }
    }

    updateSC() {
        if (this.state.data.message.coin === 'SC') {
            this.setState({
                SC: this.state.data.message.msg
            })
        }
    }

    updateSJCX() {
        if (this.state.data.message.coin === 'SJCX') {
            this.setState({
                SJCX: this.state.data.message.msg
            })
        }
    }

    updateXLM() {
        if (this.state.data.message.coin === 'STR') {
            this.setState({
                XLM: this.state.data.message.msg
            })
        }
    }

    updateSTRAT() {
        if (this.state.data.message.coin === 'STRAT') {
            this.setState({
                STRAT: this.state.data.message.msg
            })
        }
    }

    updateSYS() {
        if (this.state.data.message.coin === 'SYS') {
            this.setState({
                SYS: this.state.data.message.msg
            })
        }
    }
    updateVIA() {
        if (this.state.data.message.coin === 'VIA') {
            this.setState({
                VIA: this.state.data.message.msg
            })
        }
    }

    updateVRC() {
        if (this.state.data.message.coin === 'VRC') {
            this.setState({
                VRC: this.state.data.message.msg
            })
        }
    }

    updateVTC() {
        if (this.state.data.message.coin === 'VTC') {
            this.setState({
                VTC: this.state.data.message.msg
            })
        }
    }

    updateXBC() {
        if (this.state.data.message.coin === 'XBC') {
            this.setState({
                XBC: this.state.data.message.msg
            })
        }
    }
    updateXCP() {
        if (this.state.data.message.coin === 'XCP') {
            this.setState({
                XCP: this.state.data.message.msg
            })
        }
    }
    updateXEM() {
        if (this.state.data.message.coin === 'XEM') {
            this.setState({
                XEM: this.state.data.message.msg
            })
        }
    }

    updateXPM() {
        if (this.state.data.message.coin === 'XPM') {
            this.setState({
                XPM: this.state.data.message.msg
            })
        }
    }

    updateXRP() {
        if (this.state.data.message.coin === 'XRP') {
            this.setState({
                XRP: this.state.data.message.msg
            })
        }
    }

    updateXVC() {
        if (this.state.data.message.coin === 'XVC') {
            this.setState({
                XVC: this.state.data.message.msg
            })
        }
    }

    updateZEC() {
        if (this.state.data.message.coin === 'ZEC') {
            this.setState({
                ZEC: this.state.data.message.msg
            })
        }
    }

    // shows content hidden under cat (coin/BTC and coin/USD ratio)
    showContent(){
        //check for coin name and if data on coin was already received to avoid displaying uncalculated data,
        //otherwise return string placeholder
        if (this.props.coin.id === 'XMR' && this.state.XMR.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="allContentData" style={{display: 'inline-block'}}>
                    <div style={{display: 'inline-block'}} className="btcPriceFull">
                        <p className="toBTCRatioName"> {this.props.coin.id}/BTC: </p>
                        {' '}
                        {/*divide coin/USD price by BTC/USD price to calculate coin/BTC price and display 8 digits after decimal*/}
                        <p className="toBTCRatioValue"> {(this.state.XMR.price / this.state.BTC.price).toFixed(8)} </p>
                    </div>
                    {' '}
                    <div style={{display: 'inline-block'}} className="usdPriceFull">
                        <p className="toUSDRatioName"> {this.props.coin.id}/USD: </p>
                        {' '}
                        {/*show coin/USD price and display 2 digits after decimal*/}
                        <p className="toBTCRatioValue">{(this.state.XMR.price).toFixed(2)} </p>
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
            //    repeat for other coins
        } else if (this.props.coin.id === 'XRP' && this.state.XRP.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="allContentData" style={{display: 'inline-block'}}>
                    <div style={{display: 'inline-block'}} className="btcPriceFull">
                        <p className="toBTCRatioName"> {this.props.coin.id}/BTC: </p>
                        {' '}
                        <p className="toBTCRatioValue"> {(this.state.XRP.price / this.state.BTC.price).toFixed(8)} </p>
                    </div>
                    {' '}
                    <div style={{display: 'inline-block'}} className="usdPriceFull">
                        <p className="toUSDRatioName"> {this.props.coin.id}/USD: </p>
                        {' '}
                        <p className="toBTCRatioValue">{(this.state.XRP.price).toFixed(2)} </p>
                    </div>
                    {' '}
                    {/*render remove coin entry from portfolio button*/}
                    <OverlayTrigger delayShow={500} placement="right" overlay={<Tooltip id="tooltip">Remove coin from portfolio</Tooltip>}>
                        <Button bsStyle="danger" className="remove-button"
                                onClick={()=>this.setState({ removeWarning: true })}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </OverlayTrigger>
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
        //check for coin name and if data on coin was already received to avoid displaying uncalculated data,
        //otherwise return string placeholder
        if (this.props.coin.id === 'XMR' && this.state.XMR.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="coinEntryHeader" >
                    {/*display full coin name received from API*/}
                    <p className="coinNameLong"> {this.state.XMR.long}</p>
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
                            <p className="btcValue"> {((this.state.XMR.price * this.props.coin.quantity) / this.state.BTC.price).toFixed(8)} </p>
                        </div>
                        {' '}
                        <div style={{display: 'inline-block'}} className="USDFull">
                            <p className="usdName">  {'  USD:'} </p>
                            {' '}
                            {/*display coin entry value in USD by multiplying coin price in USD by quantity*/}
                            <p className="usdValue">{(this.state.XMR.price * this.props.coin.quantity).toFixed(2)}</p>
                        </div>
                        {' '}
                        {/*check if coin change percentage is positive or negative and apply className (red or green) accordingly*/}
                        {this.state.XMR.cap24hrChange > 0 ?
                            <p className='coinEntryChangeUp'> {' ('}{this.state.XMR.cap24hrChange}{'%)'}</p> :
                            <p className='coinEntryChangeDown'> {' ('}{this.state.XMR.cap24hrChange}{'%)'}</p>}
                    </div>
                    {' '}
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Show more</Tooltip>}>
                        <Button>
                            <Glyphicon glyph="menu-down"/>
                        </Button>
                    </OverlayTrigger>

                </div>
            )
            //    repeat for other coins
        } else if (this.props.coin.id === 'XRP' && this.state.XRP.price !== 0 && this.state.BTC.price !== 0) {
            return (
                <div className="coinEntryHeader" >
                    <p className="coinNameLong"> {this.state.XRP.long} </p>
                    {' '}
                    <div className="allHeaderData" style={{display: 'inline-block'}} >
                        <div style={{display: 'inline-block'}} className="coinQFull">
                            <p className="coinName"> {this.props.coin.name}{':'} </p>
                            {' '}
                            <p className="coinQ"> {this.props.coin.quantity} </p>
                        </div>
                        {' '}
                        <div style={{display: 'inline-block'}} className="BTCFull">
                            <p className="btcName"> BTC: </p>
                            {' '}
                            <p className="btcValue"> {((this.state.XRP.price * this.props.coin.quantity) / this.state.BTC.price).toFixed(8)} </p>
                        </div>
                        {' '}
                        <div style={{display: 'inline-block'}} className="USDFull">
                            <p className="usdName">  {'  USD:'} </p>
                            {' '}
                            <p className="usdValue">{(this.state.XRP.price * this.props.coin.quantity).toFixed(2)}</p>
                        </div>
                        {' '}
                        {this.state.XRP.cap24hrChange > 0 ?
                            <p className='coinEntryChangeUp'> {' ('}{this.state.XRP.cap24hrChange}{'%)'}</p> :
                            <p className='coinEntryChangeDown'> {' ('}{this.state.XRP.cap24hrChange}{'%)'}</p>}
                    </div>
                    {' '}
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Show more</Tooltip>}>
                        <Button>
                            <Glyphicon glyph="menu-down"/>
                        </Button>
                    </OverlayTrigger>
                </div>
            )
            //return string placeholder if data hasnt been loaded yet
        }  else {
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
