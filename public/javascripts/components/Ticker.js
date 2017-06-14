import React, {Component} from "react";
import { Well } from 'react-bootstrap';


/* This component connects to Node.js using socket.io to receive trading data stream, which is then passed to state.
 *  It then compares coin name from received data to corresponding coin name and if it matches,
 *  sets received data as an individual state of that coin. Table then accesses this data from state
 *  and displays it to user. A table is sortable by columns. This component also renders Graph component
 * to which it send props on chosen coin */

//import Graph component in order to pass props to it
import Graph from './Graph'

//setup Reactable table
import Reactable from 'reactable';
let Table = Reactable.Table;
let Tr = Reactable.Tr;

//connect to Node.js server via socket.io
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenCoinData: null,
            chosenCoinName: null,
            //set empty data to initial state so it would render before actual data is loaded
            XMR: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            AMP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            ARDR: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BCY: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BELA: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BLK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BTM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BTS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BURST: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            CLAM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            DASH: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            DCR: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            DGB: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            DOGE: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            EMC2: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            ETC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            ETH: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            EXP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            FCT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            FLDC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            FLO: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            GAME: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            GNO: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            GNT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            GRC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            HUC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            LBC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            LSK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            LTC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            MAID: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NAUT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NEOS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NMC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NOTE: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NXC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            NXT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            OMNI: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            PASC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            PINK: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            POT: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            PPC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            RADS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            REP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            RIC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            SBD: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            SC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            SJCX: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            STEEM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XLM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            STRAT: {
                FLAGS: null,
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            SYS: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            VIA: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            VRC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            VTC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XBC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XCP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XEM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XPM: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XRP: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            XVC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            ZEC: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null },
            BCN: {
                price: null,
                volume: null,
                long: null,
                cap24hrChange: null }
        };
    }

    //connect to Node.js via socket.io and pass received data to handler function
    componentDidMount(){
        socket.on('AMP', (data) => this.setState({AMP: data.message.msg}));
        socket.on('ARDR', (data) => this.setState({ARDR: data.message.msg}));
        socket.on('BCN', (data) => this.setState({BCN: data.message.msg}));
        socket.on('BCY', (data) => this.setState({BCY: data.message.msg}));
        socket.on('BELA', (data) => this.setState({BELA: data.message.msg}));
        socket.on('BLK', (data) => this.setState({BLK: data.message.msg}));
        socket.on('BTC', (data) => this.setState({BTC: data.message.msg}));
        socket.on('BTCD', (data) => this.setState({BTCD: data.message.msg}));
        socket.on('BTM', (data) => this.setState({BTM: data.message.msg}));
        socket.on('BTS', (data) => this.setState({BTS: data.message.msg}));
        socket.on('BURST', (data) => this.setState({BURST: data.message.msg}));
        socket.on('CLAM', (data) => this.setState({CLAM: data.message.msg}));
        socket.on('DASH', (data) => this.setState({DASH: data.message.msg}));
        socket.on('DCR', (data) => this.setState({DCR: data.message.msg}));
        socket.on('DGB', (data) => this.setState({DGB: data.message.msg}));
        socket.on('DOGE', (data) => this.setState({DOGE: data.message.msg}));
        socket.on('EMC2', (data) => this.setState({EMC2: data.message.msg}));
        socket.on('ETC', (data) => this.setState({ETC: data.message.msg}));
        socket.on('ETH', (data) => this.setState({ETH: data.message.msg}));
        socket.on('EXP', (data) => this.setState({EXP: data.message.msg}));
        socket.on('FCT', (data) => this.setState({FCT: data.message.msg}));
        socket.on('FLDC', (data) => this.setState({FLDC: data.message.msg}));
        socket.on('FLO', (data) => this.setState({FLO: data.message.msg}));
        socket.on('GAME', (data) => this.setState({GAME: data.message.msg}));
        socket.on('GNO', (data) => this.setState({GNO: data.message.msg}));
        socket.on('GNT', (data) => this.setState({GNT: data.message.msg}));
        socket.on('GRC', (data) => this.setState({GRC: data.message.msg}));
        socket.on('HUC', (data) => this.setState({HUC: data.message.msg}));
        socket.on('LBC', (data) => this.setState({LBC: data.message.msg}));
        socket.on('LSK', (data) => this.setState({LSK: data.message.msg}));
        socket.on('LTC', (data) => this.setState({LTC: data.message.msg}));
        socket.on('MAID', (data) => this.setState({MAID: data.message.msg}));
        socket.on('NAUT', (data) => this.setState({NAUT: data.message.msg}));
        socket.on('NAV', (data) => this.setState({NAV: data.message.msg}));
        socket.on('NEOS', (data) => this.setState({NEOS: data.message.msg}));
        socket.on('NMC', (data) => this.setState({NMC: data.message.msg}));
        socket.on('NOTE', (data) => this.setState({NOTE: data.message.msg}));
        socket.on('NXC', (data) => this.setState({NXC: data.message.msg}));
        socket.on('NXT', (data) => this.setState({NXT: data.message.msg}));
        socket.on('OMNI', (data) => this.setState({OMNI: data.message.msg}));
        socket.on('PASC', (data) => this.setState({PASC: data.message.msg}));
        socket.on('PINK', (data) => this.setState({PINK: data.message.msg}));
        socket.on('POT', (data) => this.setState({POT: data.message.msg}));
        socket.on('PPC', (data) => this.setState({PPC: data.message.msg}));
        socket.on('RADS', (data) => this.setState({RADS: data.message.msg}));
        socket.on('REP', (data) => this.setState({REP: data.message.msg}));
        socket.on('RIC', (data) => this.setState({RIC: data.message.msg}));
        socket.on('SBD', (data) => this.setState({SBD: data.message.msg}));
        socket.on('SC', (data) => this.setState({SC: data.message.msg}));
        socket.on('SJCX', (data) => this.setState({SJCX: data.message.msg}));
        socket.on('STEEM', (data) => this.setState({STEEM: data.message.msg}));
        // socket.on('STR', (data) => this.setState({STR: data.message.msg}));
        socket.on('STRAT', (data) => this.setState({STRAT: data.message.msg}));
        socket.on('SYS', (data) => this.setState({SYS: data.message.msg}));
        socket.on('VIA', (data) => this.setState({VIA: data.message.msg}));
        socket.on('VRC', (data) => this.setState({VRC: data.message.msg}));
        socket.on('VTC', (data) => this.setState({VTC: data.message.msg}));
        socket.on('XBC', (data) => this.setState({XBC: data.message.msg}));
        socket.on('XCP', (data) => this.setState({XCP: data.message.msg}));
        socket.on('XEM', (data) => this.setState({XEM: data.message.msg}));
        socket.on('XMR', (data) => this.setState({XMR: data.message.msg}));
        socket.on('XPM', (data) => this.setState({XPM: data.message.msg}));
        socket.on('XRP', (data) => this.setState({XRP: data.message.msg}));
        socket.on('XVC', (data) => this.setState({XVC: data.message.msg}));
        socket.on('ZEC', (data) => this.setState({ZEC: data.message.msg}));

        console.log('ticker mounted!');
    }

    // disconnect from socket.io when component unmounts
    componentWillUnmount() {
        socket.removeListener('trades');
        console.log('ticker unmounted!');
    }

    /* setup table according to Reactable documentation */
    /* table rows display data from state */

    render() {
// console.log(this.state.data);
        return (
            <div>
                <Well style={{overflowY: 'scroll', overflowX: 'hidden', maxHeight: '845'}}>
            <Table
                width="100%" height="100%" id="table"
                    noDataText="Loading"
                    sortable={true}
                    defaultSort={{column: 'Coin', direction: 'asc'}}>

                <Tr onClick={() => this.displayChart('http://localhost:3000/hist/xmr', 'XMR')}
                    data={{
                    Coin: 'XMR',
                    Price: this.state.XMR.price,
                    Volume: this.state.XMR.volume,
                    Change: this.state.XMR.cap24hrChange,
                    Name: this.state.XMR.long
                }} />
                <Tr onClick={() => this.displayChart('http://localhost:3000/hist/amp', 'AMP')}
                    data={{
                    Coin: 'AMP',
                    Price: this.state.AMP.price,
                    Volume: this.state.AMP.volume,
                    Change: this.state.AMP.cap24hrChange,
                    Name: this.state.AMP.long
                }} /><Tr
                onClick={() => this.displayChart('http://localhost:3000/hist/ardr', 'ARDR')}
                data={{
                Coin: 'ARDR',
                Price: this.state.ARDR.price,
                Volume: this.state.ARDR.volume,
                Change: this.state.ARDR.cap24hrChange,
                Name: this.state.ARDR.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/bcn', 'BCN')}
                data={{
                Coin: 'BCN',
                Price: this.state.BCN.price,
                Volume: this.state.BCN.volume,
                Change: this.state.BCN.cap24hrChange,
                Name: this.state.BCN.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/bcy', 'BCY')}
                data={{
                Coin: 'BCY',
                Price: this.state.BCY.price,
                Volume: this.state.BCY.volume,
                Change: this.state.BCY.cap24hrChange,
                Name: this.state.BCY.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/BELA', 'BELA')}
                data={{
                Coin: 'BELA',
                Price: this.state.BELA.price,
                Volume: this.state.BELA.volume,
                Change: this.state.BELA.cap24hrChange,
                Name: this.state.BELA.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/blk', 'BLK')}
                data={{
                Coin: 'BLK',
                Price: this.state.BLK.price,
                Volume: this.state.BLK.volume,
                Change: this.state.BLK.cap24hrChange,
                Name: this.state.BLK.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/btm', 'BTM')}
                data={{
                Coin: 'BTM',
                Price: this.state.BTM.price,
                Volume: this.state.BTM.volume,
                Change: this.state.BTM.cap24hrChange,
                Name: this.state.BTM.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/bts', 'BTS')}
                data={{
                Coin: 'BTS',
                Price: this.state.BTS.price,
                Volume: this.state.BTS.volume,
                Change: this.state.BTS.cap24hrChange,
                Name: this.state.BTS.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/burst', 'BURST')}
                data={{
                Coin: 'BURST',
                Price: this.state.BURST.price,
                Volume: this.state.BURST.volume,
                Change: this.state.BURST.cap24hrChange,
                Name: this.state.BURST.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/clam', 'CLAM')}
                data={{
                Coin: 'CLAM',
                Price: this.state.CLAM.price,
                Volume: this.state.CLAM.volume,
                Change: this.state.CLAM.cap24hrChange,
                Name: this.state.CLAM.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/dash', 'DASH')}
                data={{
                Coin: 'DASH',
                Price: this.state.DASH.price,
                Volume: this.state.DASH.volume,
                Change: this.state.DASH.cap24hrChange,
                Name: this.state.DASH.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/dcr', 'DCR')}
                data={{
                Coin: 'DCR',
                Price: this.state.DCR.price,
                Volume: this.state.DCR.volume,
                Change: this.state.DCR.cap24hrChange,
                Name: this.state.DCR.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/dgb', 'DGB')}
                data={{
                Coin: 'DGB',
                Price: this.state.DGB.price,
                Volume: this.state.DGB.volume,
                Change: this.state.DGB.cap24hrChange,
                Name: this.state.DGB.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/doge', 'DOGE')}
                data={{
                Coin: 'DOGE',
                Price: this.state.DOGE.price,
                Volume: this.state.DOGE.volume,
                Change: this.state.DOGE.cap24hrChange,
                Name: this.state.DOGE.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/emc2', 'EMC2')}
                data={{
                Coin: 'EMC2',
                Price: this.state.EMC2.price,
                Volume: this.state.EMC2.volume,
                Change: this.state.EMC2.cap24hrChange,
                Name: this.state.EMC2.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/etc', 'ETC')}
                data={{
                Coin: 'ETC',
                Price: this.state.ETC.price,
                Volume: this.state.ETC.volume,
                Change: this.state.ETC.cap24hrChange,
                Name: this.state.ETC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/eth', 'ETH')}
                data={{
                Coin: 'ETH',
                Price: this.state.ETH.price,
                Volume: this.state.ETH.volume,
                Change: this.state.ETH.cap24hrChange,
                Name: this.state.ETH.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/exp', 'EXP')}
                data={{
                Coin: 'EXP',
                Price: this.state.EXP.price,
                Volume: this.state.EXP.volume,
                Change: this.state.EXP.cap24hrChange,
                Name: this.state.EXP.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/fct', 'FCT')}
                data={{
                Coin: 'FCT',
                Price: this.state.FCT.price,
                Volume: this.state.FCT.volume,
                Change: this.state.FCT.cap24hrChange,
                Name: this.state.FCT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/fldc', 'FLDC')}
                data={{
                Coin: 'FLDC',
                Price: this.state.FLDC.price,
                Volume: this.state.FLDC.volume,
                Change: this.state.FLDC.cap24hrChange,
                Name: this.state.FLDC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/flo', 'FLO')}
                data={{
                Coin: 'FLO',
                Price: this.state.FLO.price,
                Volume: this.state.FLO.volume,
                Change: this.state.FLO.cap24hrChange,
                Name: this.state.FLO.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/game', 'GAME')}
                data={{
                Coin: 'GAME',
                Price: this.state.GAME.price,
                Volume: this.state.GAME.volume,
                Change: this.state.GAME.cap24hrChange,
                Name: this.state.GAME.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/gno', 'GNO')}
                data={{
                Coin: 'GNO',
                Price: this.state.GNO.price,
                Volume: this.state.GNO.volume,
                Change: this.state.GNO.cap24hrChange,
                Name: this.state.GNO.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/gnt', 'GNT')}
                data={{
                Coin: 'GNT',
                Price: this.state.GNT.price,
                Volume: this.state.GNT.volume,
                Change: this.state.GNT.cap24hrChange,
                Name: this.state.GNT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/grc', 'GRC')}
                data={{
                Coin: 'GRC',
                Price: this.state.GRC.price,
                Volume: this.state.GRC.volume,
                Change: this.state.GRC.cap24hrChange,
                Name: this.state.GRC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/huc', 'HUC')}
                data={{
                Coin: 'HUC',
                Price: this.state.HUC.price,
                Volume: this.state.HUC.volume,
                Change: this.state.HUC.cap24hrChange,
                Name: this.state.HUC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/lbc', 'LBC')}
                data={{
                Coin: 'LBC',
                Price: this.state.LBC.price,
                Volume: this.state.LBC.volume,
                Change: this.state.LBC.cap24hrChange,
                Name: this.state.LBC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/lsk', 'LSK')}
                data={{
                Coin: 'LSK',
                Price: this.state.LSK.price,
                Volume: this.state.LSK.volume,
                Change: this.state.LSK.cap24hrChange,
                Name: this.state.LSK.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/ltc', 'LTC')}
                data={{
                Coin: 'LTC',
                Price: this.state.LTC.price,
                Volume: this.state.LTC.volume,
                Change: this.state.LTC.cap24hrChange,
                Name: this.state.LTC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/maid', 'MAID')}
                data={{
                Coin: 'MAID',
                Price: this.state.MAID.price,
                Volume: this.state.MAID.volume,
                Change: this.state.MAID.cap24hrChange,
                Name: this.state.MAID.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/naut', 'NAUT')}
                data={{
                Coin: 'NAUT',
                Price: this.state.NAUT.price,
                Volume: this.state.NAUT.volume,
                Change: this.state.NAUT.cap24hrChange,
                Name: this.state.NAUT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/neos', 'NEOS')}
                data={{
                Coin: 'NEOS',
                Price: this.state.NEOS.price,
                Volume: this.state.NEOS.volume,
                Change: this.state.NEOS.cap24hrChange,
                Name: this.state.NEOS.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/nmc', 'NMC')}
                data={{
                Coin: 'NMC',
                Price: this.state.NMC.price,
                Volume: this.state.NMC.volume,
                Change: this.state.NMC.cap24hrChange,
                Name: this.state.NMC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/note', 'NOTE')}
                data={{
                Coin: 'NOTE',
                Price: this.state.NOTE.price,
                Volume: this.state.NOTE.volume,
                Change: this.state.NOTE.cap24hrChange,
                Name: this.state.NOTE.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/nxc', 'NXC')}
                data={{
                Coin: 'NXC',
                Price: this.state.NXC.price,
                Volume: this.state.NXC.volume,
                Change: this.state.NXC.cap24hrChange,
                Name: this.state.NXC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/nxt', 'NXT')}
                data={{
                Coin: 'NXT',
                Price: this.state.NXT.price,
                Volume: this.state.NXT.volume,
                Change: this.state.NXT.cap24hrChange,
                Name: this.state.NXT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/omni', 'OMNI')}
                data={{
                Coin: 'OMNI',
                Price: this.state.OMNI.price,
                Volume: this.state.OMNI.volume,
                Change: this.state.OMNI.cap24hrChange,
                Name: this.state.OMNI.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/pasc', 'PASC')}
                data={{
                Coin: 'PASC',
                Price: this.state.PASC.price,
                Volume: this.state.PASC.volume,
                Change: this.state.PASC.cap24hrChange,
                Name: this.state.PASC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/pink', 'PINK')}
                data={{
                Coin: 'PINK',
                Price: this.state.PINK.price,
                Volume: this.state.PINK.volume,
                Change: this.state.PINK.cap24hrChange,
                Name: this.state.PINK.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/pot', 'POT')}
                     data={{
                Coin: 'POT',
                Price: this.state.POT.price,
                Volume: this.state.POT.volume,
                Change: this.state.POT.cap24hrChange,
                Name: this.state.POT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/ppc', 'PPC')}
                data={{
                Coin: 'PPC',
                Price: this.state.PPC.price,
                Volume: this.state.PPC.volume,
                Change: this.state.PPC.cap24hrChange,
                Name: this.state.PPC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/rads', 'RADS')}
                data={{
                Coin: 'RADS',
                Price: this.state.RADS.price,
                Volume: this.state.RADS.volume,
                Change: this.state.RADS.cap24hrChange,
                Name: this.state.RADS.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/rep', 'REP')}
                data={{
                Coin: 'REP',
                Price: this.state.REP.price,
                Volume: this.state.REP.volume,
                Change: this.state.REP.cap24hrChange,
                Name: this.state.REP.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/ric', 'RIC')}
                data={{
                Coin: 'RIC',
                Price: this.state.RIC.price,
                Volume: this.state.RIC.volume,
                Change: this.state.RIC.cap24hrChange,
                Name: this.state.RIC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/sbd', 'SBD')}
                data={{
                Coin: 'SBD',
                Price: this.state.SBD.price,
                Volume: this.state.SBD.volume,
                Change: this.state.SBD.cap24hrChange,
                Name: this.state.SBD.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/sc', 'SC')}
                data={{
                Coin: 'SC',
                Price: this.state.SC.price,
                Volume: this.state.SC.volume,
                Change: this.state.SC.cap24hrChange,
                Name: this.state.SC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/sjcx', 'SJCX')}
                data={{
                Coin: 'SJCX',
                Price: this.state.SJCX.price,
                Volume: this.state.SJCX.volume,
                Change: this.state.SJCX.cap24hrChange,
                Name: this.state.SJCX.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/steem', 'STEEM')}
                data={{
                Coin: 'STEEM',
                Price: this.state.STEEM.price,
                Volume: this.state.STEEM.volume,
                Change: this.state.STEEM.cap24hrChange,
                Name: this.state.STEEM.long
            }} />
                {/*<Tr onClick={() => this.displayChart('http://localhost:3000/hist/xlm', 'XLM')}*/}
                {/*data={{*/}
                {/*Coin: 'XLM',*/}
                {/*Price: this.state.XLM.price,*/}
                {/*Volume: this.state.XLM.volume,*/}
                {/*Change: this.state.XLM.cap24hrChange,*/}
                {/*Name: this.state.XLM.long*/}
            {/*}} />*/}
                <Tr onClick={() => this.displayChart('http://localhost:3000/hist/strat', 'STRAT')}
                data={{
                Coin: 'STRAT',
                Price: this.state.STRAT.price,
                Volume: this.state.STRAT.volume,
                Change: this.state.STRAT.cap24hrChange,
                Name: this.state.STRAT.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/sys', 'SYS')}
                data={{
                Coin: 'SYS',
                Price: this.state.SYS.price,
                Volume: this.state.SYS.volume,
                Change: this.state.SYS.cap24hrChange,
                Name: this.state.SYS.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/VIA', 'VIA')}
                data={{
                Coin: 'VIA',
                Price: this.state.VIA.price,
                Volume: this.state.VIA.volume,
                Change: this.state.VIA.cap24hrChange,
                Name: this.state.VIA.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/vrc', 'VRC')}
                data={{
                Coin: 'VRC',
                Price: this.state.VRC.price,
                Volume: this.state.VRC.volume,
                Change: this.state.VRC.cap24hrChange,
                Name: this.state.VRC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/vtc', 'VTC')}
                data={{
                Coin: 'VTC',
                Price: this.state.VTC.price,
                Volume: this.state.VTC.volume,
                Change: this.state.VTC.cap24hrChange,
                Name: this.state.VTC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xbc', 'XBC')}
                data={{
                Coin: 'XBC',
                Price: this.state.XBC.price,
                Volume: this.state.XBC.volume,
                Change: this.state.XBC.cap24hrChange,
                Name: this.state.XBC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xcp', 'XCP')}
                data={{
                Coin: 'XCP',
                Price: this.state.XCP.price,
                Volume: this.state.XCP.volume,
                Change: this.state.XCP.cap24hrChange,
                Name: this.state.XCP.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xem', 'XEM')}
                data={{
                Coin: 'XEM',
                Price: this.state.XEM.price,
                Volume: this.state.XEM.volume,
                Change: this.state.XEM.cap24hrChange,
                Name: this.state.XEM.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xpm', 'XPM')}
                data={{
                Coin: 'XPM',
                Price: this.state.XPM.price,
                Volume: this.state.XPM.volume,
                Change: this.state.XPM.cap24hrChange,
                Name: this.state.XPM.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xvc', 'XVC')}
                data={{
                Coin: 'XVC',
                Price: this.state.XVC.price,
                Volume: this.state.XVC.volume,
                Change: this.state.XVC.cap24hrChange,
                Name: this.state.XVC.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/xrp', 'XRP')}
                data={{
                Coin: 'XRP',
                Price: this.state.XRP.price,
                Volume: this.state.XRP.volume,
                Change: this.state.XRP.cap24hrChange,
                Name: this.state.XRP.long
            }} /><Tr onClick={() => this.displayChart('http://localhost:3000/hist/zec', 'ZEC')}
                data={{
                Coin: 'ZEC',
                Price: this.state.ZEC.price,
                Volume: this.state.ZEC.volume,
                Change: this.state.ZEC.cap24hrChange,
                Name: this.state.ZEC.long
            }} />
            </Table>
                </Well>
                {/*pass props on coin that user would like to see chart on*/}
                <Graph chosenCoinData={this.state.chosenCoinData} chosenCoinName={this.state.chosenCoinName} />
            </div>
                )
    };
}