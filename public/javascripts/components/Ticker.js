import React, {Component} from "react";
import io from 'socket.io-client';
import Reactable from 'reactable';
let socket = io.connect('http://localhost:3000');
let Table = Reactable.Table;
let Tr = Reactable.Tr;

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                FROMSYMBOL:  null,
                TOSYMBOL: null,
                FLAGS: null,
                PRICE: null,
                LASTUPDATE: null,
                LASTVOLUME: null,
                LASTVOLUMETO: null,
                LASTTRADEID: null,
                VOLUME24HOUR: null,
                VOLUME24HOURTO: null,
                OPEN24HOUR: null,
                HIGH24HOUR: null,
                LOW24HOUR: null,
                LASTMARKET: null },
            XMR: {
                FLAGS: null,
                PRICE: null },
            AMP: {
                FLAGS: null,
                PRICE: null },
            ARDR: {
                FLAGS: null,
                PRICE: null },
            BCY: {
                FLAGS: null,
                PRICE: null },
            BELA: {
                FLAGS: null,
                PRICE: null },
            BLK: {
                FLAGS: null,
                PRICE: null },
            BTM: {
                FLAGS: null,
                PRICE: null },
            BTS: {
                FLAGS: null,
                PRICE: null },
            BURST: {
                FLAGS: null,
                PRICE: null },
            CLAM: {
                FLAGS: null,
                PRICE: null },
            DASH: {
                FLAGS: null,
                PRICE: null },
            DCR: {
                FLAGS: null,
                PRICE: null },
            DGB: {
                FLAGS: null,
                PRICE: null },
            DOGE: {
                FLAGS: null,
                PRICE: null },
            EMC2: {
                FLAGS: null,
                PRICE: null },
            ETC: {
                FLAGS: null,
                PRICE: null },
            ETH: {
                FLAGS: null,
                PRICE: null },
            EXP: {
                FLAGS: null,
                PRICE: null },
            FCT: {
                FLAGS: null,
                PRICE: null },
            FLDC: {
                FLAGS: null,
                PRICE: null },
            FLO: {
                FLAGS: null,
                PRICE: null },
            GAME: {
                FLAGS: null,
                PRICE: null },
            GNO: {
                FLAGS: null,
                PRICE: null },
            GNT: {
                FLAGS: null,
                PRICE: null },
            GRC: {
                FLAGS: null,
                PRICE: null },
            HUC: {
                FLAGS: null,
                PRICE: null },
            LBC: {
                FLAGS: null,
                PRICE: null },
            LSK: {
                FLAGS: null,
                PRICE: null },
            LTC: {
                FLAGS: null,
                PRICE: null },
            MAID: {
                FLAGS: null,
                PRICE: null },
            NAUT: {
                FLAGS: null,
                PRICE: null },
            NAV: {
                FLAGS: null,
                PRICE: null },
            NEOS: {
                FLAGS: null,
                PRICE: null },
            NMC: {
                FLAGS: null,
                PRICE: null },
            NOTE: {
                FLAGS: null,
                PRICE: null },
            NXC: {
                FLAGS: null,
                PRICE: null },
            NXT: {
                FLAGS: null,
                PRICE: null },
            OMNI: {
                FLAGS: null,
                PRICE: null },
            PASC: {
                FLAGS: null,
                PRICE: null },
            PINK: {
                FLAGS: null,
                PRICE: null },
            POT: {
                FLAGS: null,
                PRICE: null },
            PPC: {
                FLAGS: null,
                PRICE: null },
            RADS: {
                FLAGS: null,
                PRICE: null },
            REP: {
                FLAGS: null,
                PRICE: null },
            RIC: {
                FLAGS: null,
                PRICE: null },
            SBD: {
                FLAGS: null,
                PRICE: null },
            SC: {
                FLAGS: null,
                PRICE: null },
            SJCX: {
                FLAGS: null,
                PRICE: null },
            STEEM: {
                FLAGS: null,
                PRICE: null },
            STR: {
                FLAGS: null,
                PRICE: null },
            STRAT: {
                FLAGS: null,
                PRICE: null },
            SYS: {
                FLAGS: null,
                PRICE: null },
            VIA: {
                FLAGS: null,
                PRICE: null },
            VRC: {
                FLAGS: null,
                PRICE: null },
            VTC: {
                FLAGS: null,
                PRICE: null },
            XBC: {
                FLAGS: null,
                PRICE: null },
            XCP: {
                FLAGS: null,
                PRICE: null },
            XEM: {
                FLAGS: null,
                PRICE: null },
            XPM: {
                FLAGS: null,
                PRICE: null },
            XRP: {
                FLAGS: null,
                PRICE: null },
            XVC: {
                FLAGS: null,
                PRICE: null },
            ZEC: {
                FLAGS: null,
                PRICE: null },
            BCN: {
                FLAGS: null,
                PRICE: null }
        };
    }

    componentDidMount(){
        socket.on('m', (data) => this.setData(data));

    }

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
        this.updateNAV();
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
        this.updateSTR();
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

    updateXMR() {
        if (this.state.data.FROMSYMBOL === 'XMR' && this.state.data.FLAGS !== '4') {
            this.setState({
                XMR: this.state.data
            })
        }
    }

    updateBCN() {
        if (this.state.data.FROMSYMBOL === 'BCN' && this.state.data.FLAGS !== '4') {
            this.setState({
                BCN: this.state.data
            })
        }
    }

    updateAMP() {
        if (this.state.data.FROMSYMBOL === 'AMP' && this.state.data.FLAGS !== '4') {
            this.setState({
                AMP: this.state.data
            })
        }
    }

    updateARDR() {
        if (this.state.data.FROMSYMBOL === 'ARDR' && this.state.data.FLAGS !== '4') {
            this.setState({
                ARDR: this.state.data
            })
        }
    }

    updateBCY() {
        if (this.state.data.FROMSYMBOL === 'BCY' && this.state.data.FLAGS !== '4') {
            this.setState({
                BCY: this.state.data
            })
        }
    }

    updateBELA() {
        if (this.state.data.FROMSYMBOL === 'BELA' && this.state.data.FLAGS !== '4') {
            this.setState({
                BELA: this.state.data
            })
        }
    }

    updateBLK() {
        if (this.state.data.FROMSYMBOL === 'BLK' && this.state.data.FLAGS !== '4') {
            this.setState({
                BLK: this.state.data
            })
        }
    }

    updateBTM() {
        if (this.state.data.FROMSYMBOL === 'BTM' && this.state.data.FLAGS !== '4') {
            this.setState({
                BTM: this.state.data
            })
        }
    }

    updateBTS() {
        if (this.state.data.FROMSYMBOL === 'BTS' && this.state.data.FLAGS !== '4') {
            this.setState({
                BTS: this.state.data
            })
        }
    }

    updateBURST() {
        if (this.state.data.FROMSYMBOL === 'BURST' && this.state.data.FLAGS !== '4') {
            this.setState({
                BURST: this.state.data
            })
        }
    }

    updateCLAM() {
        if (this.state.data.FROMSYMBOL === 'CLAM' && this.state.data.FLAGS !== '4') {
            this.setState({
                CLAM: this.state.data
            })
        }
    }

    updateDASH() {
        if (this.state.data.FROMSYMBOL === 'DASH' && this.state.data.FLAGS !== '4') {
            this.setState({
                DASH: this.state.data
            })
        }
    }

    updateDCR() {
        if (this.state.data.FROMSYMBOL === 'DCR' && this.state.data.FLAGS !== '4') {
            this.setState({
                DCR: this.state.data
            })
        }
    }

    updateDGB() {
        if (this.state.data.FROMSYMBOL === 'DGB' && this.state.data.FLAGS !== '4') {
            this.setState({
                DGB: this.state.data
            })
        }
    }

    updateDOGE() {
        if (this.state.data.FROMSYMBOL === 'DOGE' && this.state.data.FLAGS !== '4') {
            this.setState({
                DOGE: this.state.data
            })
        }
    }

    updateEMC2() {
        if (this.state.data.FROMSYMBOL === 'EMC2' && this.state.data.FLAGS !== '4') {
            this.setState({
                EMC2: this.state.data
            })
        }
    }

    updateETC() {
        if (this.state.data.FROMSYMBOL === 'ETC' && this.state.data.FLAGS !== '4') {
            this.setState({
                ETC: this.state.data
            })
        }
    }

    updateETH() {
        if (this.state.data.FROMSYMBOL === 'ETH' && this.state.data.FLAGS !== '4') {
            this.setState({
                ETH: this.state.data
            })
        }
    }

    updateEXP() {
        if (this.state.data.FROMSYMBOL === 'EXP' && this.state.data.FLAGS !== '4') {
            this.setState({
                EXP: this.state.data
            })
        }
    }

    updateFCT() {
        if (this.state.data.FROMSYMBOL === 'FCT' && this.state.data.FLAGS !== '4') {
            this.setState({
                FCT: this.state.data
            })
        }
    }

    updateFLDC() {
        if (this.state.data.FROMSYMBOL === 'FLDC' && this.state.data.FLAGS !== '4') {
            this.setState({
                FLDC: this.state.data
            })
        }
    }

    updateFLO() {
        if (this.state.data.FROMSYMBOL === 'FLO' && this.state.data.FLAGS !== '4') {
            this.setState({
                FLO: this.state.data
            })
        }
    }

    updateGAME() {
        if (this.state.data.FROMSYMBOL === 'GAME' && this.state.data.FLAGS !== '4') {
            this.setState({
                GAME: this.state.data
            })
        }
    }

    updateGNO() {
        if (this.state.data.FROMSYMBOL === 'GNO' && this.state.data.FLAGS !== '4') {
            this.setState({
                GNO: this.state.data
            })
        }
    }

    updateGNT() {
        if (this.state.data.FROMSYMBOL === 'GNT' && this.state.data.FLAGS !== '4') {
            this.setState({
                GNT: this.state.data
            })
        }
    }

    updateGRC() {
        if (this.state.data.FROMSYMBOL === 'GRC' && this.state.data.FLAGS !== '4') {
            this.setState({
                GRC: this.state.data
            })
        }
    }

    updateHUC() {
        if (this.state.data.FROMSYMBOL === 'HUC' && this.state.data.FLAGS !== '4') {
            this.setState({
                HUC: this.state.data
            })
        }
    }

    updateLBC() {
        if (this.state.data.FROMSYMBOL === 'LBC' && this.state.data.FLAGS !== '4') {
            this.setState({
                LBC: this.state.data
            })
        }
    }

    updateLSK() {
        if (this.state.data.FROMSYMBOL === 'LSK' && this.state.data.FLAGS !== '4') {
            this.setState({
                LSK: this.state.data
            })
        }
    }

    updateLTC() {
        if (this.state.data.FROMSYMBOL === 'LTC' && this.state.data.FLAGS !== '4') {
            this.setState({
                LTC: this.state.data
            })
        }
    }

    updateMAID() {
        if (this.state.data.FROMSYMBOL === 'MAID' && this.state.data.FLAGS !== '4') {
            this.setState({
                MAID: this.state.data
            })
        }
    }

    updateNAUT() {
        if (this.state.data.FROMSYMBOL === 'NAUT' && this.state.data.FLAGS !== '4') {
            this.setState({
                NAUT: this.state.data
            })
        }
    }

    updateNAV() {
        if (this.state.data.FROMSYMBOL === 'NAV' && this.state.data.FLAGS !== '4') {
            this.setState({
                NAV: this.state.data
            })
        }
    }

    updateNEOS() {
        if (this.state.data.FROMSYMBOL === 'NEOS' && this.state.data.FLAGS !== '4') {
            this.setState({
                NEOS: this.state.data
            })
        }
    }

    updateNMC() {
        if (this.state.data.FROMSYMBOL === 'NMC' && this.state.data.FLAGS !== '4') {
            this.setState({
                NMC: this.state.data
            })
        }
    }

    updateNOTE() {
        if (this.state.data.FROMSYMBOL === 'NOTE' && this.state.data.FLAGS !== '4') {
            this.setState({
                NOTE: this.state.data
            })
        }
    }

    updateNXC() {
        if (this.state.data.FROMSYMBOL === 'NXC' && this.state.data.FLAGS !== '4') {
            this.setState({
                NXC: this.state.data
            })
        }
    }

    updateNXT() {
        if (this.state.data.FROMSYMBOL === 'NXT' && this.state.data.FLAGS !== '4') {
            this.setState({
                NXT: this.state.data
            })
        }
    }

    updateOMNI() {
        if (this.state.data.FROMSYMBOL === 'OMNI' && this.state.data.FLAGS !== '4') {
            this.setState({
                OMNI: this.state.data
            })
        }
    }

    updatePASC() {
        if (this.state.data.FROMSYMBOL === 'PASC' && this.state.data.FLAGS !== '4') {
            this.setState({
                PASC: this.state.data
            })
        }
    }

    updatePINK() {
        if (this.state.data.FROMSYMBOL === 'PINK' && this.state.data.FLAGS !== '4') {
            this.setState({
                PINK: this.state.data
            })
        }
    }

    updatePOT() {
        if (this.state.data.FROMSYMBOL === 'POT' && this.state.data.FLAGS !== '4') {
            this.setState({
                POT: this.state.data
            })
        }
    }

    updatePPC() {
        if (this.state.data.FROMSYMBOL === 'PPC' && this.state.data.FLAGS !== '4') {
            this.setState({
                PPC: this.state.data
            })
        }
    }

    updateRADS() {
        if (this.state.data.FROMSYMBOL === 'RADS' && this.state.data.FLAGS !== '4') {
            this.setState({
                RADS: this.state.data
            })
        }
    }

    updateREP() {
        if (this.state.data.FROMSYMBOL === 'REP' && this.state.data.FLAGS !== '4') {
            this.setState({
                REP: this.state.data
            })
        }
    }

    updateRIC() {
        if (this.state.data.FROMSYMBOL === 'RIC' && this.state.data.FLAGS !== '4') {
            this.setState({
                RIC: this.state.data
            })
        }
    }

    updateSBD() {
        if (this.state.data.FROMSYMBOL === 'SBD' && this.state.data.FLAGS !== '4') {
            this.setState({
                SBD: this.state.data
            })
        }
    }

    updateSTEEM() {
        if (this.state.data.FROMSYMBOL === 'STEEM' && this.state.data.FLAGS !== '4') {
            this.setState({
                STEEM: this.state.data
            })
        }
    }

    updateSC() {
        if (this.state.data.FROMSYMBOL === 'SC' && this.state.data.FLAGS !== '4') {
            this.setState({
                SC: this.state.data
            })
        }
    }

    updateSJCX() {
        if (this.state.data.FROMSYMBOL === 'SJCX' && this.state.data.FLAGS !== '4') {
            this.setState({
                SJCX: this.state.data
            })
        }
    }

    updateSTR() {
        if (this.state.data.FROMSYMBOL === 'STR' && this.state.data.FLAGS !== '4') {
            this.setState({
                STR: this.state.data
            })
        }
    }

    updateSTRAT() {
        if (this.state.data.FROMSYMBOL === 'STRAT' && this.state.data.FLAGS !== '4') {
            this.setState({
                STRAT: this.state.data
            })
        }
    }

    updateSYS() {
        if (this.state.data.FROMSYMBOL === 'SYS' && this.state.data.FLAGS !== '4') {
            this.setState({
                SYS: this.state.data
            })
        }
    }

    updateVIA() {
        if (this.state.data.FROMSYMBOL === 'VIA' && this.state.data.FLAGS !== '4') {
            this.setState({
                VIA: this.state.data
            })
        }
    }

    updateVRC() {
        if (this.state.data.FROMSYMBOL === 'VRC' && this.state.data.FLAGS !== '4') {
            this.setState({
                VRC: this.state.data
            })
        }
    }

    updateVTC() {
        if (this.state.data.FROMSYMBOL === 'VTC' && this.state.data.FLAGS !== '4') {
            this.setState({
                VTC: this.state.data
            })
        }
    }

    updateXBC() {
        if (this.state.data.FROMSYMBOL === 'XBC' && this.state.data.FLAGS !== '4') {
            this.setState({
                XBC: this.state.data
            })
        }
    }

    updateXCP() {
        if (this.state.data.FROMSYMBOL === 'XCP' && this.state.data.FLAGS !== '4') {
            this.setState({
                XCP: this.state.data
            })
        }
    }

    updateXEM() {
        if (this.state.data.FROMSYMBOL === 'XEM' && this.state.data.FLAGS !== '4') {
            this.setState({
                XEM: this.state.data
            })
        }
    }

    updateXPM() {
        if (this.state.data.FROMSYMBOL === 'XPM' && this.state.data.FLAGS !== '4') {
            this.setState({
                XPM: this.state.data
            })
        }
    }

    updateXRP() {
        if (this.state.data.FROMSYMBOL === 'XRP' && this.state.data.FLAGS !== '4') {
            this.setState({
                XRP: this.state.data
            })
        }
    }

    updateXVC() {
        if (this.state.data.FROMSYMBOL === 'XVC' && this.state.data.FLAGS !== '4') {
            this.setState({
                XVC: this.state.data
            })
        }
    }

    updateZEC() {
        if (this.state.data.FROMSYMBOL === 'ZEC' && this.state.data.FLAGS !== '4') {
            this.setState({
                ZEC: this.state.data
            })
        }
    }

    render() {
        // console.log(this.state.XMR);
        return (
            <div className="ticker-container">
            <Table  width="100%" height="100%" id="table"
                    noDataText="Loading"
                    sortable={true}
                    defaultSort={{column: 'Coin', direction: 'asc'}}>
                <Tr data={{ Coin: 'XMR', Price: this.state.XMR.PRICE }} />
                <Tr data={{ Coin: 'DOGE', Price: this.state.DOGE.PRICE }} />
                <Tr data={{ Coin: 'AMP', Price: this.state.AMP.PRICE }} />
                <Tr data={{ Coin: 'ARDR', Price: this.state.ARDR.PRICE }} />
                <Tr data={{ Coin: 'BCN', Price: this.state.BCN.PRICE }} />
                <Tr data={{ Coin: 'BCY', Price: this.state.BCY.PRICE }} />
                <Tr data={{ Coin: 'BELA', Price: this.state.BELA.PRICE }} />
                <Tr data={{ Coin: 'BLK', Price: this.state.BLK.PRICE }} />
                <Tr data={{ Coin: 'BTM', Price: this.state.BTM.PRICE }} />
                <Tr data={{ Coin: 'BTS', Price: this.state.BTS.PRICE }} />
                <Tr data={{ Coin: 'BURST', Price: this.state.BURST.PRICE }} />
                <Tr data={{ Coin: 'CLAM', Price: this.state.CLAM.PRICE }} />
                <Tr data={{ Coin: 'DASH', Price: this.state.DASH.PRICE }} />
                <Tr data={{ Coin: 'DCR', Price: this.state.DCR.PRICE }} />
                <Tr data={{ Coin: 'DGB', Price: this.state.DGB.PRICE }} />
                <Tr data={{ Coin: 'EMC2', Price: this.state.EMC2.PRICE }} />
                <Tr data={{ Coin: 'ETC', Price: this.state.ETC.PRICE }} />
                <Tr data={{ Coin: 'ETH', Price: this.state.ETH.PRICE }} />
                <Tr data={{ Coin: 'EXP', Price: this.state.EXP.PRICE }} />
                <Tr data={{ Coin: 'FCT', Price: this.state.FCT.PRICE }} />
                <Tr data={{ Coin: 'FLDC', Price: this.state.FLDC.PRICE }} />
                <Tr data={{ Coin: 'FLO', Price: this.state.FLO.PRICE }} />
                <Tr data={{ Coin: 'GAME', Price: this.state.GAME.PRICE }} />
                <Tr data={{ Coin: 'GNO', Price: this.state.GNO.PRICE }} />
                <Tr data={{ Coin: 'GNT', Price: this.state.GNT.PRICE }} />
                <Tr data={{ Coin: 'GRC', Price: this.state.GRC.PRICE }} />
                <Tr data={{ Coin: 'HUC', Price: this.state.HUC.PRICE }} />
                <Tr data={{ Coin: 'LBC', Price: this.state.LBC.PRICE }} />
                <Tr data={{ Coin: 'LSK', Price: this.state.LSK.PRICE }} />
                <Tr data={{ Coin: 'LTC', Price: this.state.LTC.PRICE }} />
                <Tr data={{ Coin: 'MAID', Price: this.state.MAID.PRICE }} />
                <Tr data={{ Coin: 'NAUT', Price: this.state.NAUT.PRICE }} />
                <Tr data={{ Coin: 'NAV', Price: this.state.NAV.PRICE }} />
                <Tr data={{ Coin: 'NEOS', Price: this.state.NEOS.PRICE }} />
                <Tr data={{ Coin: 'NMC', Price: this.state.NMC.PRICE }} />
                <Tr data={{ Coin: 'NOTE', Price: this.state.NOTE.PRICE }} />
                <Tr data={{ Coin: 'NXC', Price: this.state.NXC.PRICE }} />
                <Tr data={{ Coin: 'NXT', Price: this.state.NXT.PRICE }} />
                <Tr data={{ Coin: 'OMNI', Price: this.state.OMNI.PRICE }} />
                <Tr data={{ Coin: 'PASC', Price: this.state.PASC.PRICE }} />
                <Tr data={{ Coin: 'PINK', Price: this.state.PINK.PRICE }} />
                <Tr data={{ Coin: 'POT', Price: this.state.POT.PRICE }} />
                <Tr data={{ Coin: 'PPC', Price: this.state.PPC.PRICE }} />
                <Tr data={{ Coin: 'RADS', Price: this.state.RADS.PRICE }} />
                <Tr data={{ Coin: 'REP', Price: this.state.REP.PRICE }} />
                <Tr data={{ Coin: 'RIC', Price: this.state.RIC.PRICE }} />
                <Tr data={{ Coin: 'SBD', Price: this.state.SBD.PRICE }} />
                <Tr data={{ Coin: 'SC', Price: this.state.SC.PRICE }} />
                <Tr data={{ Coin: 'SJCX', Price: this.state.SJCX.PRICE }} />
                <Tr data={{ Coin: 'STEEM', Price: this.state.STEEM.PRICE }} />
                <Tr data={{ Coin: 'STR', Price: this.state.STR.PRICE }} />
                <Tr data={{ Coin: 'STRAT', Price: this.state.STRAT.PRICE }} />
                <Tr data={{ Coin: 'SYS', Price: this.state.SYS.PRICE }} />
                <Tr data={{ Coin: 'VIA', Price: this.state.VIA.PRICE }} />
                <Tr data={{ Coin: 'VRC', Price: this.state.VRC.PRICE }} />
                <Tr data={{ Coin: 'VTC', Price: this.state.VTC.PRICE }} />
                <Tr data={{ Coin: 'XBC', Price: this.state.XBC.PRICE }} />
                <Tr data={{ Coin: 'XCP', Price: this.state.XCP.PRICE }} />
                <Tr data={{ Coin: 'XEM', Price: this.state.XEM.PRICE }} />
                <Tr data={{ Coin: 'XPM', Price: this.state.XPM.PRICE }} />
                <Tr data={{ Coin: 'XRP', Price: this.state.XRP.PRICE }} />
                <Tr data={{ Coin: 'XVC', Price: this.state.XVC.PRICE }} />
                <Tr data={{ Coin: 'ZEC', Price: this.state.ZEC.PRICE }} />
            </Table>
            </div>

        //
        //     {/*<div className="ticker-container">*/}
        //         {/*<table width="100%">*/}
        //             {/*<tbody>*/}
        //             {/*<tr>*/}
        //                 {/*<th>Coin</th>*/}
        //                 {/*<th>Price  [Ƀ]</th>*/}
        //             {/*</tr>*/}
        //             {/*<tr>*/}
        //                 {/*<td>XMR</td>*/}
        //                 {/*<td>{this.state.XMR.PRICE}</td>*/}
        //             {/*</tr>*/}
        //             {/*<tr>*/}
        //                 {/*<td>BCN</td>*/}
        //                 {/*<td>{this.state.BCN.PRICE}</td>*/}
        //             {/*</tr>*/}
        //             {/*</tbody>*/}
        //         {/*</table>*/}
        //     {/*</div>*/}
        )
// }
    };
}

// utilities config //
var CCC = CCC || {};

CCC.STATIC=CCC.STATIC || {};

CCC.STATIC.TYPE={
    'TRADE'                  : '0'
    , 'FEEDNEWS'               : '1'
    , 'CURRENT'                : '2'
    , 'LOADCOMPLATE'           : '3'
    , 'COINPAIRS'              : '4'
    , 'CURRENTAGG'             : '5'
    , 'TOPLIST'                : '6'
    , 'TOPLISTCHANGE'          : '7'
    , 'ORDERBOOK'              : '8'
    , 'FULLORDERBOOK'          : '9'
    , 'ACTIVATION'             : '10'

    , 'TRADECATCHUP'           : '100'
    , 'NEWSCATCHUP'            : '101'

    , 'TRADECATCHUPCOMPLETE'   : '300'
    , 'NEWSCATCHUPCOMPLETE'    : '301'

};

CCC.STATIC.CURRENCY = CCC.STATIC.CURRENCY || {};

CCC.STATIC.CURRENCY.SYMBOL = {
    'BTC'  : 'Ƀ'
    , 'LTC'  : 'Ł'
    , 'DAO'  : 'Ð'
    , 'USD'  : '$'
    , 'CNY'  : '¥'
    , 'EUR'  : '€'
    , 'GBP'  : '£'
    , 'JPY'  : '¥'
    , 'PLN'  : 'zł'
    , 'RUB'  : '₽'
    , 'ETH'  : 'Ξ'
    , 'GOLD' : 'Gold g'
    , 'INR'  : '₹'
    , 'BRL'  : 'R$'
};

CCC.STATIC.CURRENCY.getSymbol = function(symbol){
    return CCC.STATIC.CURRENCY.SYMBOL[symbol] || symbol;
};

CCC.STATIC.UTIL = {
    exchangeNameMapping : {
        'CCCAGG':'CryptoCompare Index',
        'BTCChina':'BTCC'
    },
    isMobile: function(userAgent){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4)))
            return true;
        return false;
    },
    convertToMB : function(bytes){
        return (parseInt(bytes,10)/1024/1024).toFixed(2)+' MB';
    },
    getNameForExchange : function(exchangeName){
        if(this.exchangeNameMapping.hasOwnProperty(exchangeName)){
            return this.exchangeNameMapping[exchangeName];
        }
        return exchangeName;
    },
    noExponents : function(value){
        var data= String(value).split(/[eE]/);
        if(data.length== 1) return data[0];

        var  z= '', sign= value<0? '-':'',
            str= data[0].replace('.', ''),
            mag= Number(data[1])+ 1;

        if(mag<0){
            z= sign + '0.';
            while(mag++) z += '0';
            return z + str.replace(/^\-/,'');
        }
        mag -= str.length;
        while(mag--) z += '0';
        return str + z;
    },
    reduceFloatVal : function(value){
        value = parseFloat(value);
        if(value>1){
            value = Math.round(value * 100) / 100;
            return value;
        }
        if(value>=0.00001000){
            return parseFloat(value.toPrecision(4));
        }
        if(value>=0.00000100){
            return parseFloat(value.toPrecision(3));
        }
        if(value>=0.00000010){
            return parseFloat(value.toPrecision(2));
        }
        return parseFloat(value.toPrecision(1));
    },
    reduceReal : function(value){
        value = parseFloat(value);
        return parseFloat(value.toFixed(8));
    },
    convertCurrentKeyToAll : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.CURRENTAGG;
        valuesArray[1]='CCCAGG';
        return valuesArray.join('~');
    },
    convertCurrentKeyToTrade : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.TRADE;
        return valuesArray.join('~');
    },
    convertValueToDisplay: function(symbol,value,filterNumberFunctionAngularJS,type,fullNumbers){
        var prefix = '';
        var valueSign=1;
        value = parseFloat(value);
        var valueAbs=Math.abs(value);
        var decimalsOnBigNumbers = 2;
        var decimalsOnNormalNumbers = 2;
        var decimalsOnSmallNumbers = 4;
        if(fullNumbers===true){
            decimalsOnBigNumbers =2;
            decimalsOnNormalNumbers = 0;
            decimalsOnSmallNumbers= 4;
        }
        if(type=="8decimals"){
            decimalsOnBigNumbers =4;
            decimalsOnNormalNumbers = 8;
            decimalsOnSmallNumbers= 8;
            if(value<0.0001 && value>=0.00001){decimalsOnSmallNumbers=4;}
            if(value<0.001 && value>=0.0001){decimalsOnSmallNumbers=5;}
            if(value<0.01 && value>=0.001){decimalsOnSmallNumbers=6;}
            if(value<0.1 && value>=0.01){decimalsOnSmallNumbers=7;}
        }
        if(symbol!=''){prefix = symbol+' ';}
        if(value<0){valueSign = -1;}
        if(value==0){return prefix+'0';}

        if(value<0.00001000 && value>=0.00000100 && decimalsOnSmallNumbers>3){
            decimalsOnSmallNumbers=3;
        }
        if(value<0.00000100 && value>=0.00000010 && decimalsOnSmallNumbers>2){
            decimalsOnSmallNumbers=2;
        }
        if(value<0.00000010 && decimalsOnSmallNumbers>1){
            decimalsOnSmallNumbers=1;
        }

        if(type=="short"||type=="8decimals"){
            if(valueAbs>10000000000){
                valueAbs=valueAbs/1000000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' B';
            }
            if(valueAbs>10000000){
                valueAbs=valueAbs/1000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' M';
            }
            if(valueAbs>10000){
                valueAbs=valueAbs/1000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' K';
            }
            if(type=="8decimals" && valueAbs>=100){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers);
            }
            if(valueAbs>=1){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }
            return prefix+(valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers);
        }else{
            if(valueAbs>=1){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }

            return prefix+this.noExponents((valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers));
        }
    }
};


CCC.TRADE=CCC.TRADE || {};
/*
 trade fields binary values always in the last ~
 */

CCC.TRADE.FLAGS = {
    'SELL'       : 0x1 // hex for binary 1
    , 'BUY'        : 0x2 // hex for binary 10
    , 'UNKNOWN'    : 0x4 // hex for binary 100
}

CCC.TRADE.FIELDS = {
    'T'          : 0x0  // hex for binary 0, it is a special case of fields that are always there TYPE
    , 'M'          : 0x0  // hex for binary 0, it is a special case of fields that are always there MARKET
    , 'FSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there FROM SYMBOL
    , 'TSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there TO SYMBOL
    , 'F'          : 0x0  // hex for binary 0, it is a special case of fields that are always there FLAGS
    , 'ID'         : 0x1  // hex for binary 1                                                       ID
    , 'TS'         : 0x2  // hex for binary 10                                                      TIMESTAMP
    , 'Q'          : 0x4  // hex for binary 100                                                     QUANTITY
    , 'P'          : 0x8  // hex for binary 1000                                                    PRICE
    , 'TOTAL'      : 0x10 // hex for binary 10000                                                   TOTAL

};

CCC.TRADE.DISPLAY = CCC.TRADE.DISPLAY||{};
CCC.TRADE.DISPLAY.FIELDS = {
    'T'          : {"Show":false}
    , 'M'          : {"Show":true, 'Filter':'Market'}
    , 'FSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'TSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'F'          : {"Show":true, 'Filter':'TradeFlag'}
    , 'ID'         : {"Show":true, 'Filter':'Text'}
    , 'TS'         : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss'}
    , 'Q'          : {'Show':true, 'Filter':'Number', 'Symbol':'FSYM'}
    , 'P'          : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}
    , 'TOTAL'      : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}

};

CCC.TRADE.pack = function(tradeObject){
    var mask = 0;
    var packedTrade ='';
    for (var field in tradeObject) {
        packedTrade += '~'+tradeObject[field];
        mask|=this.FIELDS[field];
    }
    return packedTrade.substr(1)+'~'+mask.toString(16);
};

CCC.TRADE.unpack = function(tradeString){
    var valuesArray = tradeString.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedTrade = {};
    var currentField = 0;
    for(var property in this.FIELDS){
        if(this.FIELDS[property] === 0)
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
    }

    return unpackedTrade;
}

CCC.TRADE.getKey = function(tradeObject){
    return tradeObject['T']+'~'+tradeObject['M']+'~'+tradeObject['FSYM']+'~'+tradeObject['TSYM'];
};

CCC.CURRENT=CCC.CURRENT || {};
/*
 current fields mask values always in the last ~
 */

CCC.CURRENT.FLAGS = {
    'PRICEUP'        : 0x1    // hex for binary 1
    , 'PRICEDOWN'      : 0x2    // hex for binary 10
    , 'PRICEUNCHANGED' : 0x4    // hex for binary 100
    , 'BIDUP'          : 0x8    // hex for binary 1000
    , 'BIDDOWN'        : 0x10   // hex for binary 10000
    , 'BIDUNCHANGED'   : 0x20   // hex for binary 100000
    , 'OFFERUP'        : 0x40   // hex for binary 1000000
    , 'OFFERDOWN'      : 0x80   // hex for binary 10000000
    , 'OFFERUNCHANGED' : 0x100  // hex for binary 100000000
    , 'AVGUP'          : 0x200  // hex for binary 1000000000
    , 'AVGDOWN'        : 0x400  // hex for binary 10000000000
    , 'AVGUNCHANGED'   : 0x800  // hex for binary 100000000000
};


CCC.CURRENT.FIELDS={
    'TYPE'            : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'MARKET'          : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FROMSYMBOL'      : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'TOSYMBOL'        : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FLAGS'           : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'PRICE'           : 0x1       // hex for binary 1
    , 'BID'             : 0x2       // hex for binary 10
    , 'OFFER'           : 0x4       // hex for binary 100
    , 'LASTUPDATE'      : 0x8       // hex for binary 1000
    , 'AVG'             : 0x10      // hex for binary 10000
    , 'LASTVOLUME'      : 0x20      // hex for binary 100000
    , 'LASTVOLUMETO'    : 0x40      // hex for binary 1000000
    , 'LASTTRADEID'     : 0x80      // hex for binary 10000000
    , 'VOLUMEHOUR'      : 0x100     // hex for binary 100000000
    , 'VOLUMEHOURTO'    : 0x200     // hex for binary 1000000000
    , 'VOLUME24HOUR'    : 0x400     // hex for binary 10000000000
    , 'VOLUME24HOURTO'  : 0x800     // hex for binary 100000000000
    , 'OPENHOUR'        : 0x1000    // hex for binary 1000000000000
    , 'HIGHHOUR'        : 0x2000    // hex for binary 10000000000000
    , 'LOWHOUR'         : 0x4000    // hex for binary 100000000000000
    , 'OPEN24HOUR'      : 0x8000    // hex for binary 1000000000000000
    , 'HIGH24HOUR'      : 0x10000   // hex for binary 10000000000000000
    , 'LOW24HOUR'       : 0x20000   // hex for binary 100000000000000000
    , 'LASTMARKET'      : 0x40000   // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
};

CCC.CURRENT.DISPLAY = CCC.CURRENT.DISPLAY||{};
CCC.CURRENT.DISPLAY.FIELDS={
    'TYPE'            : {'Show':false}
    , 'MARKET'          : {'Show':true, 'Filter':'Market'}
    , 'FROMSYMBOL'      : {'Show':false}
    , 'TOSYMBOL'        : {'Show':false}
    , 'FLAGS'           : {'Show':false}
    , 'PRICE'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'BID'             : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OFFER'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTUPDATE'      : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss'}
    , 'AVG'             : {'Show':true,' Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTVOLUME'      : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'LASTVOLUMETO'    : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTTRADEID'     : {'Show':true, 'Filter':'String'}
    , 'VOLUMEHOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'VOLUMEHOURTO'    : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'VOLUME24HOUR'    : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'VOLUME24HOURTO'  : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OPENHOUR'        : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'HIGHHOUR'        : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LOWHOUR'         : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OPEN24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'HIGH24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LOW24HOUR'       : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTMARKET'      : {'Show':true, 'Filter':'String'}
};

CCC.CURRENT.pack = function(currentObject)
{
    var mask = 0;
    var packedCurrent ='';
    for(var property in this.FIELDS)
    {
        if(currentObject.hasOwnProperty(property)){
            packedCurrent += '~'+currentObject[property];
            mask|=this.FIELDS[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedCurrent.substr(1)+'~'+mask.toString(16);
};

CCC.CURRENT.unpack = function(value)
{
    var valuesArray = value.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedCurrent = {};
    var currentField = 0;
    for(var property in this.FIELDS)
    {
        if(this.FIELDS[property] === 0)
        {
            unpackedCurrent[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            //i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
            //subscribing to trades as well in order to show the last market
            if(property === 'LASTMARKET'){
                unpackedCurrent[property] = valuesArray[currentField];
            }else{
                unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            }
            currentField++;
        }
    }

    return unpackedCurrent;
};
CCC.CURRENT.getKey = function(currentObject){
    return currentObject['TYPE']+'~'+currentObject['MARKET']+'~'+currentObject['FROMSYMBOL']+'~'+currentObject['TOSYMBOL'];
};
CCC.CURRENT.getKeyFromStreamerData = function(streamerData){
    var valuesArray = streamerData.split("~");
    return valuesArray[0]+'~'+valuesArray[1]+'~'+valuesArray[2]+'~'+valuesArray[3];
};

CCC.noExponents = function(value){
    var data= String(value).split(/[eE]/);
    if(data.length== 1) return data[0];

    var  z= '', sign= value<0? '-':'',
        str= data[0].replace('.', ''),
        mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;
    while(mag--) z += '0';
    return str + z;
};

CCC.filterNumberFunctionPolyfill = function(value,decimals){
    var decimalsDenominator = Math.pow(10,decimals);
    var numberWithCorrectDecimals = Math.round(value*decimalsDenominator)/decimalsDenominator;
    var parts = numberWithCorrectDecimals.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

CCC.convertValueToDisplay =  function(symbol,value,type,fullNumbers){
    var prefix = '';
    var valueSign=1;
    value = parseFloat(value);
    var valueAbs=Math.abs(value);
    var decimalsOnBigNumbers = 2;
    var decimalsOnNormalNumbers = 2;
    var decimalsOnSmallNumbers = 4;
    if(fullNumbers===true){
        decimalsOnBigNumbers =2;
        decimalsOnNormalNumbers = 0;
        decimalsOnSmallNumbers= 4;
    }
    if(symbol!=''){
        prefix = symbol+' ';
    }
    if(value<0){
        valueSign = -1;
    }

    if(value==0){
        return prefix+'0';
    }

    if(value<0.00001000 && value>=0.00000100 && decimalsOnSmallNumbers>3){
        decimalsOnSmallNumbers=3;
    }
    if(value<0.00000100 && value>=0.00000010 && decimalsOnSmallNumbers>2){
        decimalsOnSmallNumbers=2;
    }
    if(value<0.00000010 && value>=0.00000001 && decimalsOnSmallNumbers>1){
        decimalsOnSmallNumbers=1;
    }

    if(type=="short"){
        if(valueAbs>10000000000){
            valueAbs=valueAbs/1000000000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' B';
        }
        if(valueAbs>10000000){
            valueAbs=valueAbs/1000000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' M';
        }
        if(valueAbs>10000){
            valueAbs=valueAbs/1000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' K';
        }
        if(valueAbs>=1){
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnNormalNumbers);
        }
        return prefix+(valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers);
    }else{
        if(valueAbs>=1){
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnNormalNumbers);
        }

        return prefix+CCC.noExponents((valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers));
    }
};


