import React, {Component} from "react";
import io from 'socket.io-client';
import Reactable from 'reactable';
let Table = Reactable.Table;
let Tr = Reactable.Tr;
let socket = io.connect('http://localhost:3000');

/* This component connects to Node.js using socket.io to receive trading data stream, which is then passed to state.
*  It then compares coin name from received data to corresponding coin name and if it matches,
*  sets received data as an individual state of that coin. Table then accesses this data from state
*  and displays it to user. A table is sortable by columns. */

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set empty data to initial state so it would render before actual data is loaded
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
        socket.on('trades', (data) => this.setData(data));
    }

    //handler function passes received data to component state and fires update functions on all of the coins
    setData(data) {
        this.setState({
            data: data
        });
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
        if (this.state.data.message.coin === 'XLM') {
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

    /* setup table according to Reactable documentation */
    /* table rows display data from state */

    render() {
        return (
            <div className="ticker-container">

            <Table  width="100%" height="100%" id="table"
                    noDataText="Loading"
                    sortable={true}
                    defaultSort={{column: 'Coin', direction: 'asc'}}>

                <Tr data={{
                    Coin: 'XMR',
                    Price: this.state.XMR.price,
                    Volume: this.state.XMR.volume,
                    Change: this.state.XMR.cap24hrChange,
                    Name: this.state.XMR.long
                }} />
                <Tr data={{
                    Coin: 'AMP',
                    Price: this.state.AMP.price,
                    Volume: this.state.AMP.volume,
                    Change: this.state.AMP.cap24hrChange,
                    Name: this.state.AMP.long
                }} /><Tr data={{
                Coin: 'ARDR',
                Price: this.state.ARDR.price,
                Volume: this.state.ARDR.volume,
                Change: this.state.ARDR.cap24hrChange,
                Name: this.state.ARDR.long
            }} /><Tr data={{
                Coin: 'BCN',
                Price: this.state.BCN.price,
                Volume: this.state.BCN.volume,
                Change: this.state.BCN.cap24hrChange,
                Name: this.state.BCN.long
            }} /><Tr data={{
                Coin: 'BCY',
                Price: this.state.BCY.price,
                Volume: this.state.BCY.volume,
                Change: this.state.BCY.cap24hrChange,
                Name: this.state.BCY.long
            }} /><Tr data={{
                Coin: 'BELA',
                Price: this.state.BELA.price,
                Volume: this.state.BELA.volume,
                Change: this.state.BELA.cap24hrChange,
                Name: this.state.BELA.long
            }} /><Tr data={{
                Coin: 'BLK',
                Price: this.state.BLK.price,
                Volume: this.state.BLK.volume,
                Change: this.state.BLK.cap24hrChange,
                Name: this.state.BLK.long
            }} /><Tr data={{
                Coin: 'BTM',
                Price: this.state.BTM.price,
                Volume: this.state.BTM.volume,
                Change: this.state.BTM.cap24hrChange,
                Name: this.state.BTM.long
            }} /><Tr data={{
                Coin: 'BTS',
                Price: this.state.BTS.price,
                Volume: this.state.BTS.volume,
                Change: this.state.BTS.cap24hrChange,
                Name: this.state.BTS.long
            }} /><Tr data={{
                Coin: 'BURST',
                Price: this.state.BURST.price,
                Volume: this.state.BURST.volume,
                Change: this.state.BURST.cap24hrChange,
                Name: this.state.BURST.long
            }} /><Tr data={{
                Coin: 'CLAM',
                Price: this.state.CLAM.price,
                Volume: this.state.CLAM.volume,
                Change: this.state.CLAM.cap24hrChange,
                Name: this.state.CLAM.long
            }} /><Tr data={{
                Coin: 'DASH',
                Price: this.state.DASH.price,
                Volume: this.state.DASH.volume,
                Change: this.state.DASH.cap24hrChange,
                Name: this.state.DASH.long
            }} /><Tr data={{
                Coin: 'DCR',
                Price: this.state.DCR.price,
                Volume: this.state.DCR.volume,
                Change: this.state.DCR.cap24hrChange,
                Name: this.state.DCR.long
            }} /><Tr data={{
                Coin: 'DGB',
                Price: this.state.DGB.price,
                Volume: this.state.DGB.volume,
                Change: this.state.DGB.cap24hrChange,
                Name: this.state.DGB.long
            }} /><Tr data={{
                Coin: 'DOGE',
                Price: this.state.DOGE.price,
                Volume: this.state.DOGE.volume,
                Change: this.state.DOGE.cap24hrChange,
                Name: this.state.DOGE.long
            }} /><Tr data={{
                Coin: 'EMC2',
                Price: this.state.EMC2.price,
                Volume: this.state.EMC2.volume,
                Change: this.state.EMC2.cap24hrChange,
                Name: this.state.EMC2.long
            }} /><Tr data={{
                Coin: 'ETC',
                Price: this.state.ETC.price,
                Volume: this.state.ETC.volume,
                Change: this.state.ETC.cap24hrChange,
                Name: this.state.ETC.long
            }} /><Tr data={{
                Coin: 'ETH',
                Price: this.state.ETH.price,
                Volume: this.state.ETH.volume,
                Change: this.state.ETH.cap24hrChange,
                Name: this.state.ETH.long
            }} /><Tr data={{
                Coin: 'EXP',
                Price: this.state.EXP.price,
                Volume: this.state.EXP.volume,
                Change: this.state.EXP.cap24hrChange,
                Name: this.state.EXP.long
            }} /><Tr data={{
                Coin: 'FCT',
                Price: this.state.FCT.price,
                Volume: this.state.FCT.volume,
                Change: this.state.FCT.cap24hrChange,
                Name: this.state.FCT.long
            }} /><Tr data={{
                Coin: 'FLDC',
                Price: this.state.FLDC.price,
                Volume: this.state.FLDC.volume,
                Change: this.state.FLDC.cap24hrChange,
                Name: this.state.FLDC.long
            }} /><Tr data={{
                Coin: 'FLO',
                Price: this.state.FLO.price,
                Volume: this.state.FLO.volume,
                Change: this.state.FLO.cap24hrChange,
                Name: this.state.FLO.long
            }} /><Tr data={{
                Coin: 'GAME',
                Price: this.state.GAME.price,
                Volume: this.state.GAME.volume,
                Change: this.state.GAME.cap24hrChange,
                Name: this.state.GAME.long
            }} /><Tr data={{
                Coin: 'GNO',
                Price: this.state.GNO.price,
                Volume: this.state.GNO.volume,
                Change: this.state.GNO.cap24hrChange,
                Name: this.state.GNO.long
            }} /><Tr data={{
                Coin: 'GNT',
                Price: this.state.GNT.price,
                Volume: this.state.GNT.volume,
                Change: this.state.GNT.cap24hrChange,
                Name: this.state.GNT.long
            }} /><Tr data={{
                Coin: 'GRC',
                Price: this.state.GRC.price,
                Volume: this.state.GRC.volume,
                Change: this.state.GRC.cap24hrChange,
                Name: this.state.GRC.long
            }} /><Tr data={{
                Coin: 'HUC',
                Price: this.state.HUC.price,
                Volume: this.state.HUC.volume,
                Change: this.state.HUC.cap24hrChange,
                Name: this.state.HUC.long
            }} /><Tr data={{
                Coin: 'LBC',
                Price: this.state.LBC.price,
                Volume: this.state.LBC.volume,
                Change: this.state.LBC.cap24hrChange,
                Name: this.state.LBC.long
            }} /><Tr data={{
                Coin: 'LSK',
                Price: this.state.LSK.price,
                Volume: this.state.LSK.volume,
                Change: this.state.LSK.cap24hrChange,
                Name: this.state.LSK.long
            }} /><Tr data={{
                Coin: 'LTC',
                Price: this.state.LTC.price,
                Volume: this.state.LTC.volume,
                Change: this.state.LTC.cap24hrChange,
                Name: this.state.LTC.long
            }} /><Tr data={{
                Coin: 'MAID',
                Price: this.state.MAID.price,
                Volume: this.state.MAID.volume,
                Change: this.state.MAID.cap24hrChange,
                Name: this.state.MAID.long
            }} /><Tr data={{
                Coin: 'NAUT',
                Price: this.state.NAUT.price,
                Volume: this.state.NAUT.volume,
                Change: this.state.NAUT.cap24hrChange,
                Name: this.state.NAUT.long
            }} /><Tr data={{
                Coin: 'NEOS',
                Price: this.state.NEOS.price,
                Volume: this.state.NEOS.volume,
                Change: this.state.NEOS.cap24hrChange,
                Name: this.state.NEOS.long
            }} /><Tr data={{
                Coin: 'NMC',
                Price: this.state.NMC.price,
                Volume: this.state.NMC.volume,
                Change: this.state.NMC.cap24hrChange,
                Name: this.state.NMC.long
            }} /><Tr data={{
                Coin: 'NOTE',
                Price: this.state.NOTE.price,
                Volume: this.state.NOTE.volume,
                Change: this.state.NOTE.cap24hrChange,
                Name: this.state.NOTE.long
            }} /><Tr data={{
                Coin: 'NXC',
                Price: this.state.NXC.price,
                Volume: this.state.NXC.volume,
                Change: this.state.NXC.cap24hrChange,
                Name: this.state.NXC.long
            }} /><Tr data={{
                Coin: 'NXT',
                Price: this.state.NXT.price,
                Volume: this.state.NXT.volume,
                Change: this.state.NXT.cap24hrChange,
                Name: this.state.NXT.long
            }} /><Tr data={{
                Coin: 'OMNI',
                Price: this.state.OMNI.price,
                Volume: this.state.OMNI.volume,
                Change: this.state.OMNI.cap24hrChange,
                Name: this.state.OMNI.long
            }} /><Tr data={{
                Coin: 'PASC',
                Price: this.state.PASC.price,
                Volume: this.state.PASC.volume,
                Change: this.state.PASC.cap24hrChange,
                Name: this.state.PASC.long
            }} /><Tr data={{
                Coin: 'PINK',
                Price: this.state.PINK.price,
                Volume: this.state.PINK.volume,
                Change: this.state.PINK.cap24hrChange,
                Name: this.state.PINK.long
            }} /><Tr data={{
                Coin: 'POT',
                Price: this.state.POT.price,
                Volume: this.state.POT.volume,
                Change: this.state.POT.cap24hrChange,
                Name: this.state.POT.long
            }} /><Tr data={{
                Coin: 'PPC',
                Price: this.state.PPC.price,
                Volume: this.state.PPC.volume,
                Change: this.state.PPC.cap24hrChange,
                Name: this.state.PPC.long
            }} /><Tr data={{
                Coin: 'RADS',
                Price: this.state.RADS.price,
                Volume: this.state.RADS.volume,
                Change: this.state.RADS.cap24hrChange,
                Name: this.state.RADS.long
            }} /><Tr data={{
                Coin: 'REP',
                Price: this.state.REP.price,
                Volume: this.state.REP.volume,
                Change: this.state.REP.cap24hrChange,
                Name: this.state.REP.long
            }} /><Tr data={{
                Coin: 'RIC',
                Price: this.state.RIC.price,
                Volume: this.state.RIC.volume,
                Change: this.state.RIC.cap24hrChange,
                Name: this.state.RIC.long
            }} /><Tr data={{
                Coin: 'SBD',
                Price: this.state.SBD.price,
                Volume: this.state.SBD.volume,
                Change: this.state.SBD.cap24hrChange,
                Name: this.state.SBD.long
            }} /><Tr data={{
                Coin: 'SC',
                Price: this.state.SC.price,
                Volume: this.state.SC.volume,
                Change: this.state.SC.cap24hrChange,
                Name: this.state.SC.long
            }} /><Tr data={{
                Coin: 'SJCX',
                Price: this.state.SJCX.price,
                Volume: this.state.SJCX.volume,
                Change: this.state.SJCX.cap24hrChange,
                Name: this.state.SJCX.long
            }} /><Tr data={{
                Coin: 'STEEM',
                Price: this.state.STEEM.price,
                Volume: this.state.STEEM.volume,
                Change: this.state.STEEM.cap24hrChange,
                Name: this.state.STEEM.long
            }} /><Tr data={{
                Coin: 'XLM',
                Price: this.state.XLM.price,
                Volume: this.state.XLM.volume,
                Change: this.state.XLM.cap24hrChange,
                Name: this.state.XLM.long
            }} /><Tr data={{
                Coin: 'STRAT',
                Price: this.state.STRAT.price,
                Volume: this.state.STRAT.volume,
                Change: this.state.STRAT.cap24hrChange,
                Name: this.state.STRAT.long
            }} /><Tr data={{
                Coin: 'SYS',
                Price: this.state.SYS.price,
                Volume: this.state.SYS.volume,
                Change: this.state.SYS.cap24hrChange,
                Name: this.state.SYS.long
            }} /><Tr data={{
                Coin: 'VIA',
                Price: this.state.VIA.price,
                Volume: this.state.VIA.volume,
                Change: this.state.VIA.cap24hrChange,
                Name: this.state.VIA.long
            }} /><Tr data={{
                Coin: 'VRC',
                Price: this.state.VRC.price,
                Volume: this.state.VRC.volume,
                Change: this.state.VRC.cap24hrChange,
                Name: this.state.VRC.long
            }} /><Tr data={{
                Coin: 'VTC',
                Price: this.state.VTC.price,
                Volume: this.state.VTC.volume,
                Change: this.state.VTC.cap24hrChange,
                Name: this.state.VTC.long
            }} /><Tr data={{
                Coin: 'XBC',
                Price: this.state.XBC.price,
                Volume: this.state.XBC.volume,
                Change: this.state.XBC.cap24hrChange,
                Name: this.state.XBC.long
            }} /><Tr data={{
                Coin: 'XCP',
                Price: this.state.XCP.price,
                Volume: this.state.XCP.volume,
                Change: this.state.XCP.cap24hrChange,
                Name: this.state.XCP.long
            }} /><Tr data={{
                Coin: 'XEM',
                Price: this.state.XEM.price,
                Volume: this.state.XEM.volume,
                Change: this.state.XEM.cap24hrChange,
                Name: this.state.XEM.long
            }} /><Tr data={{
                Coin: 'XPM',
                Price: this.state.XPM.price,
                Volume: this.state.XPM.volume,
                Change: this.state.XPM.cap24hrChange,
                Name: this.state.XPM.long
            }} /><Tr data={{
                Coin: 'XVC',
                Price: this.state.XVC.price,
                Volume: this.state.XVC.volume,
                Change: this.state.XVC.cap24hrChange,
                Name: this.state.XVC.long
            }} /><Tr data={{
                Coin: 'XRP',
                Price: this.state.XRP.price,
                Volume: this.state.XRP.volume,
                Change: this.state.XRP.cap24hrChange,
                Name: this.state.XRP.long
            }} /><Tr data={{
                Coin: 'ZEC',
                Price: this.state.ZEC.price,
                Volume: this.state.ZEC.volume,
                Change: this.state.ZEC.cap24hrChange,
                Name: this.state.ZEC.long
            }} />
            </Table>
            </div>
        )

    };
}