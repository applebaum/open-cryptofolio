import React, {Component} from "react";
import cookie from "react-cookies";
import csv from 'csv';
import { HelpBlock, Popover, Tooltip, OverlayTrigger, Accordion, Glyphicon, Panel, PanelGroup, Collapse, ControlLabel, ListGroupItem, ListGroup, FormGroup, FormControl, Form, Button, Jumbotron, Well, Table } from 'react-bootstrap';
//connect to Node.js server via socket.io
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');

/** This component renders input form for user to enter information on coins he/she'd like to track (also accepts previously
 * exported CSV portfolio file), passes data through handling functions (add and remove),
 * maps through it and creates list displayed to user. An option to export portfolio as CSV is also presented. */

// TODO: add 8 decimal digits validation
    // TODO: mousewheel
// this class handles form for user data input
class CoinForm extends Component {

    constructor(props) {
        //it receives coin handling functions as props from CoinInputApp
        super(props);
        this.state = {
            name: '',
            quantity: 0,
            disabledButton: false
        };
    }

    // sets coin chosen by user as state to display and send to CoinInputApp for handling on submit
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    //sets quantity specified by user as state to display and send to CoinInputApp for handling on submit
    handleQuantityChange(e) {
        this.setState({ quantity: e.target.value });
    }

    //check if user input data is valid and color form green/red accordingly
    getValidationState() {
        if (this.state.quantity > 0.00000001 && this.state.name.length > 1) return 'success';
        else if (this.state.quantity < 0.00000001) return 'error';
        else if (this.state.name.length < 1) return 'error';
    }

    //check if user input data is valid and enable/disable submit button accordingly
    disableButton() {
         if (this.state.quantity < 0.00000001) {
             return true
             } else if (this.state.name.length < 1) {return true}
         else {return false}
         }

         // reset form data on submit
    reset(){
        this.setState({
            name: '',
            quantity: 0});
    }



    // CSV export functionality:
    //
    // first the function loops through the keys on one of the objects to create a header row, followed by a newline.
    // then it loops through each object and writes out the values of each property.
    convertArrayOfObjectsToCSV(args) {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data === null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

    // this function takes the CSV we created and prepends a special string that tells the browser
    // that  content is CSV and it needs to be downloaded
    downloadCSV(args) {
    let data, filename, link;

    let csv = this.convertArrayOfObjectsToCSV({
        data: this.props.data
    });
    if (csv === null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}


// render JSX
    render () {
        const uploadPopover = (
            <Popover id="popover-trigger-click">
                <FormControl
                    id="formControlsFile"
                    type="file"
                    accept=".csv"
                    onChange={this.props.uploadCSV}/>
                <HelpBlock>Select portfolio CSV file</HelpBlock>
            </Popover>
        );

        return (
        // form rendering JSX
            <div>
                <OverlayTrigger placement="top"
                                overlay={<Tooltip id="tooltip">Add coin to portfolio</Tooltip>}>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    <Glyphicon glyph="plus"/>
                </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger placement="top"
                                overlay={<Tooltip id="tooltip">Download portfolio locally as CSV</Tooltip>}>
                <Button onClick={ () => this.downloadCSV({ filename: "portfolio-data.csv" }) }>
                    <Glyphicon glyph='save'/>
                </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger rootClose
                    placement="top"
                    trigger="click"
                    overlay={uploadPopover}>
                    <OverlayTrigger placement="top"
                                    overlay={<Tooltip id="tooltip">Upload portfolio CSV</Tooltip>}>
                        <Button>
                            <Glyphicon glyph="open"/>
                        </Button>
                    </OverlayTrigger>
                </OverlayTrigger>
                {' '}
                <Collapse in={this.state.open}>
                    <div>
                        {' '}
                        <Form inline
            // this function takes user input data and runs it through handling function,
            // and then clears input window (and entered value itself) on submit
              onSubmit={(e) => {
                  e.preventDefault();
                  this.props.addCoin(this.state.name, this.state.quantity);
                  this.reset();
              }}>
                        <FormGroup
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Coin name</ControlLabel>
                            {' '}
                            <FormControl
                                bsSize="sm"
                                type="text"
                                placeholder="Choose coin"
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                                componentClass="select"
                            >
                                <option value=''>Select coin</option>
                                <option value="AMP">AMP Synereo</option>
                                <option value="ARDR">ARDR Ardor</option>
                                <option value="BCN">BCN Bytecoin</option>
                                <option value="BCY">BCY	BitCrystals</option>
                                <option value="BELA">BELA Belacoin</option>
                                <option value="BLK">BLK BlackCoin</option>
                                <option value="BTC">BTC Bitcoin</option>
                                <option value="BTCD">BTCD BitcoinDark</option>
                                <option value="BTM">BTM Bitmark</option>
                                <option value="BTS">BTS BitShare</option>
                                <option value="BURST">BURST Burst</option>
                                <option value="CLAM">CLAM CLAMS</option>
                                <option value="DASH">DASH Dash</option>
                                <option value="DCR">DCR Decred</option>
                                <option value="DGB">DGB DigiByte</option>
                                <option value="DOGE">DOGE Dogecoin</option>
                                <option value="EMC2">EMC2 Einsteinium</option>
                                <option value="ETC">ETC Ethereum Classic</option>
                                <option value="ETH">ETH Ethereum</option>
                                <option value="EXP">EXP Expanse</option>
                                <option value="FCT">FCT Factom</option>
                                <option value="FLDC">FLDC FoldingCoin</option>
                                <option value="FLO">FLO Florincoin</option>
                                <option value="GAME">GAME GameCredits</option>
                                <option value="GNO">GNO Gnosis</option>
                                <option value="GNT">GNT Golem</option>
                                <option value="GRC">GRC Gridcoin Research</option>
                                <option value="HUC">HUC Huntercoin</option>
                                <option value="LBC">LBC LBRY Credits </option>
                                <option value="LSK">LSK Lisk</option>
                                <option value="LTC">LTC Litecoin</option>
                                <option value="MAID">MAID MaidSafeCoin</option>
                                <option value="NAUT">NAUT Nautiluscoin</option>
                                <option value="NAV">NAV NAVCoin</option>
                                <option value="NEOS">NEOS Neoscoin</option>
                                <option value="NMC">NMC Namecoin</option>
                                <option value="NOTE">NOTE DNotes</option>
                                <option value="NXC">NXC Nexium</option>
                                <option value="NXT">NXT NXT</option>
                                <option value="OMNI">OMNI Omni</option>
                                <option value="PASC">PASC PascalCoin</option>
                                <option value="PINK">PINK Pinkcoin</option>
                                <option value="POT">POT PotCoin</option>
                                <option value="PPC">PPC Peercoin</option>
                                <option value="REP">REP Augur</option>
                                <option value="RIC">RIC Riecoin</option>
                                <option value="SBD">SBD Steem Dollars</option>
                                <option value="SC">SC Siacoin</option>
                                <option value="SJCX">SJCX Storjcoin X</option>
                                <option value="STEEM">STEEM STEEM</option>
                                <option value="STR">STR Stellar</option>
                                <option value="STRAT">STRAT Stratis</option>
                                <option value="SYS">SYS Syscoin</option>
                                <option value="VIA">VIA Viacoin</option>
                                <option value="VRC">VRC VeriCoin</option>
                                <option value="VTC">VTC Vertcoin</option>
                                <option value="XBC">XBC BitcoinPlus</option>
                                <option value="XCP">XCP Counterparty</option>
                                <option value="XEM">XEM NEM</option>
                                <option value="XMR">XMR Monero</option>
                                <option value="XPM">XPM Primecoin</option>
                                <option value="XRP">XRP Ripple</option>
                                <option value="XVC">XVC Vcash</option>
                                <option value="ZEC">ZEC Zcash</option>
                            </FormControl>
                            {' '}
                            <ControlLabel>Quantity</ControlLabel>
                            {' '}
                            <FormControl
                                bsSize="sm"
                                type='number'
                                placeholder="Enter quantity"
                                value={this.state.quantity}
                                onChange={this.handleQuantityChange.bind(this)}
                            />
                        </FormGroup>
                        {' '}
                        <Button type="submit" disabled={this.disableButton()}> Submit </Button>

                    </Form>
                </div>
            </Collapse>
            </div>
        );
    }
}

//list item entry creating function
class Coin extends Component {
    // each coin, with props received from CoinInputApp data handling function,
    // coin entry removed (for now) by clicking on list item
    constructor(props) {
        // pass props to parent class
        super(props);
        // set initial empty state for each coin available for tracking
        this.state = {
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
                price: null,
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
                    <p className="coinNameLong"> {this.state.XMR.long} </p>
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
                    {/*render remove coin entry from portfolio button*/}
                    <OverlayTrigger delayShow={500} placement="right" overlay={<Tooltip id="tooltip">Remove coin from portfolio</Tooltip>}>
                    <Button bsStyle="danger" className="remove-button"
                        onClick={() => {
                            this.props.remove(this.props.coin.id)}}>
                        <Glyphicon glyph="remove"/>
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
                    <OverlayTrigger delayShow={500} placement="right" overlay={<Tooltip id="tooltip">Remove coin from portfolio</Tooltip>}>
                        <Button bsStyle="danger" className="remove-button"
                                onClick={() => {
                                    this.props.remove(this.props.coin.id)}}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </OverlayTrigger>
                </div>
            )
            //return string placeholder if data hasnt been loaded yet
        }  else {
            return (<div style={{display: 'inline-block'}}> <p className="loading-entry"> Loading data... </p> </div>)
        }
    }

render() {
    return (
        <Panel
            className="coinEntry"
            collapsible
            // data displayed in header
            header={this.showHeader()}
            key={this.props.coin.id} >
            {/*data displayed under cat*/}
            {this.showContent()}
        </Panel>);
}}

//list creating function
const CoinList = ({coins, remove}) => {
    // map through the coins
    const coinNode = coins.map((coins) => {
        return (<Coin coin={coins} remove={remove}/>)
    });
    // return list
    return (<Accordion >{coinNode}</Accordion>);
};


// container component that handles all other components
export default class CoinInputApp extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            data: cookie.load("data") || []
        }
    }

    // add coin handler
    addCoin(name, quantity){
        // assemble data, id is coin abbreviation taken from first three letters of input
        const coin = {name: name, id: name, quantity: quantity};
        // update data - push JS object to state
        this.state.data.push(coin);
        // update state
        this.setState({data: this.state.data});
        // save data to cookies
        cookie.save("data", this.state.data, {path: "/", maxAge: 631138520})
    }
    // handle remove
    handleRemove(id){
        // filter all coins except the one to be removed
        const remainder = this.state.data.filter((coin) => {
            if(coin.id !== id) return coin;
        });
        // update state with filter
        this.setState({data: remainder});
        // update cookies
        cookie.save("data", remainder, {path: "/", maxAge: 631138520})
    }

    // this function handles CSV upload, it utilises File Reader to read content of file without downloading it,
    // and parses CSV to JSON using csv package
    uploadCSV(e) {
        //define File Reader instance
        const reader = new FileReader();
        //define file uploaded by user
        const file = e.target.files[0];
        // define this to use in nested function
        let _this = this;

        //read file content and output a string
        reader.readAsBinaryString(file);

        //when file was read pass it to CSV parser
        reader.onload = () => {
            //parse CSV to JSON using csv package
            csv.parse(reader.result, {columns: true}, function (err, data) {
                //set parsed data as state
                _this.setState({data: data});
                //update cookies
                cookie.save("data", data, {path: "/", maxAge: 631138520})

            })
        };
    }

    render(){
        // console.log(this.state.toUSD);
        // render JSX, pass props
        console.log(this.state.data);

        return (
            <Jumbotron style={{height: '425', overflowY: 'scroll', overflowX: 'contain'}}>
                <CoinForm
                    addCoin={this.addCoin.bind(this)}
                    data={this.state.data}
                    uploadCSV={this.uploadCSV.bind(this)}
                />
                <CoinList
                    coins={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </Jumbotron>
        );
    }
}