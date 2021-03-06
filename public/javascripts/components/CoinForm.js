import React, {Component} from "react";
import { Modal, HelpBlock, Popover, Tooltip, OverlayTrigger, Glyphicon, Collapse, ControlLabel, FormGroup, FormControl, Form, Button } from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';

// TODO: add 8 decimal digits validation
    // TODO: mousewheel
// this class handles form for user data input
export default class CoinForm extends Component {

    constructor(props) {
        //it receives coin handling functions as props from CoinInputApp
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            name: '',
            portfolioName: '',
            quantity: 0,
            selectedDay: this.props.date ? this.props.date : 'Select date',
            disabledButton: false,
            noDateWarning: false,
            sameCoinWarn: this.props.sameCoinWarn,
            editModal: false
        };
    }

    // sets coin chosen by user as state to display and send to CoinInputApp for handling on submit
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handlePortfolioNameChange(e) {
        this.setState({ portfolioName: e.target.value });
    }

    //sets quantity specified by user as state to display and send to CoinInputApp for handling on submit
    handleQuantityChange(e) {
        this.setState({ quantity: e.target.value });
    }

    //send selected date to parent and set it as state to display as placeholder
    handleDayClick (day) {
        //parse moment.js object to JS date object
        let parsedDate = day.toDate();
        //parse JS date object to string (in order to store it in cookies)
        let stringifiedDate = parsedDate.toDateString();
        //send parsed string to parent (CoinInputApp)
        this.props.setDate(stringifiedDate);
        //set string as state to display as placeholder
        this.setState({selectedDay: stringifiedDate});
    };

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
            quantity: 0,
        portfolioName: ''});
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

    showPortfolioChart(){
        if (this.state.selectedDay === 'Select date') {
            this.setState({noDateWarning: true})
        } else {
            this.props.showPortfolioChart(true)
        }
    }

    handleSameCoinWarn(){
        this.setState({sameCoinWarn:false});
        this.props.dismissWarn(false)
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
            <div className="coin-form">
                <OverlayTrigger placement="top"
                                overlay={<Tooltip id="tooltip">Add coin to portfolio</Tooltip>}>
                    <Button className="add-coin-btn" onClick={ ()=> this.setState({ open: !this.state.open })}>
                        <Glyphicon className="add-coin-gl" glyph="plus"/>
                    </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger placement="top"
                                overlay={<Tooltip id="tooltip">Download portfolio locally as CSV</Tooltip>}>
                    <Button className="export-btn" onClick={ () => this.downloadCSV({ filename: "portfolio-data.csv" }) }>
                        <Glyphicon className="export-gl" glyph='save'/>
                    </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger rootClose
                                placement="top"
                                trigger="click"
                                overlay={uploadPopover}>
                    <OverlayTrigger placement="top"
                                    overlay={<Tooltip id="tooltip">Upload portfolio CSV</Tooltip>}>
                        <Button className="export-btn">
                            <Glyphicon className="export-gl" glyph="open"/>
                        </Button>
                    </OverlayTrigger>
                </OverlayTrigger>
                {' '}

                <OverlayTrigger placement="top"
                                overlay={<Tooltip id="tooltip">Show portfolio performance chart</Tooltip>}>
                    <Button className="show-coin-chart-portfolio-button" onClick={this.showPortfolioChart.bind(this)}>
                        <Glyphicon className="show-chart-gl" glyph="signal"/>
                    </Button>
                </OverlayTrigger>


                <Modal className="modal" keyboard show={this.state.noDateWarning} bsSize="small">
                    <Modal.Header className="modal-header">
                        <Modal.Title className="modal-title" id="contained-modal-title-sm"><strong>Date is not specified</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h4>Please select portfolio tracking date</h4>
                    <DayPickerInput
                    style={{display: 'inline-block'}}
                    placeholder={this.state.selectedDay}
                    onDayChange={day => this.handleDayClick(day)}
                    />
                    </Modal.Body>

                    {this.state.selectedDay !== 'Select date' ?

                    <Modal.Footer className="modal-footer">
                        <Button className="modal-close-button" bsSize="large" onClick={() => {
                            this.setState({noDateWarning: false, selectedDay: 'Select date'})}}>
                            <Glyphicon glyph="menu-left"/>
                            {' '}
                            Return
                        </Button>
                        {' '}
                        <Button bsSize="large" bsStyle="success"
                                onClick={() => {
                        this.setState({noDateWarning: false})}}>
                        Confirm
                            {' '}
                            <Glyphicon glyph="ok"/>
                        </Button>
                    </Modal.Footer>

                        :

                        <Modal.Footer className="modal-footer">
                        <Button className="modal-close-button" bsSize="large" onClick={() => {
                        this.setState({noDateWarning: false, selectedDay: 'Select date'})}}>
                        <Glyphicon glyph="menu-left"/>
                        {' '}
                        Return
                        </Button>
                        </Modal.Footer> }


                </Modal>

                {' '}

                <Modal className="modal" keyboard show={this.state.sameCoinWarn} bsSize="small">
                    <Modal.Header className="modal-header">
                        <Modal.Title className="modal-title" id="contained-modal-title-sm"><strong>Coin already in portfolio</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h4>Coin already in portfolio!</h4>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                            <Button className="modal-close-button" bsSize="large"
                                    onClick={() => this.handleSameCoinWarn.bind(this)} >
                                <Glyphicon glyph="menu-left"/>
                                {' '}
                                Return
                            </Button>
                        </Modal.Footer>
                </Modal>


                {' '}
                <p className="tracking-label" style={{display: 'inline-block'}}>Tracking portfolio from:</p>
                {' '}
                <DayPickerInput
                    style={{display: 'inline-block'}}
                    placeholder={this.state.selectedDay}
                    onDayChange={day => this.handleDayClick(day)}
                />
                {' '}
                <div className="remove-edit-btns">
                <Button className="edit-name-btn"
                onClick={() => this.setState({editModal: !this.state.editModal})}>
                    <Glyphicon className="edit-name-gl" glyph="pencil" />
                </Button>
                {' '}
                <Button className="remove-port-btn" onClick={() => this.props.removePortfolio(this.props.portfolio.id)}>
                    <Glyphicon className="remove-port-gl" glyph="trash"/>
                </Button>
                </div>


                <Modal className="modal" keyboard show={this.state.editModal} bsSize="small">

                    <Modal.Header className="modal-header">
                        <Modal.Title className="modal-title" id="contained-modal-title-sm"><strong>Edit portfolio name</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h4>Please type in new portfolio name</h4>
                        <Form
                            // this function takes user input data and runs it through handling function,
                            // and then clears input window (and entered value itself) on submit
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.props.editName(this.state.portfolioName);
                                this.reset();
                                this.setState({editModal: false});
                            }}>
                        <FormControl
                            bsSize="sm"
                            type="text"
                            placeholder="Enter name"
                            value={this.state.portfolioName}
                            onChange={this.handlePortfolioNameChange.bind(this)}
                        />
                        </Form>
                        {this.state.portfolioName !== '' ? <HelpBlock> When done, hit Enter </HelpBlock> : null}
                    </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <Button className="modal-close-button" bsSize="large" onClick={() => {
                                this.setState({editModal: false, portfolioName: ''})}}>
                                <Glyphicon glyph="menu-left"/>
                                {' '}
                                Return
                            </Button>
                        </Modal.Footer>

                </Modal>

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
                            <Button className='sumbit-btn' type="submit" disabled={this.disableButton()}> Submit </Button>

                        </Form>
                    </div>
                </Collapse>

            </div>
        );
    }
}
