var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var AMP = require('./routes/hist/amp');
var ARDR = require('./routes/hist/ardr');
var BCN = require('./routes/hist/bcn');
var BCY = require('./routes/hist/bcy');
var BELA = require('./routes/hist/bela');
var BLK = require('./routes/hist/blk');
var BTC = require('./routes/hist/btc');
var BTCD = require('./routes/hist/btcd');
var BTM = require('./routes/hist/btm');
var BURST = require('./routes/hist/burst');
var CLAM = require('./routes/hist/clam');
var DASH = require('./routes/hist/dash');
var DCR = require('./routes/hist/dcr');
var DGB = require('./routes/hist/dgb');
var DOGE = require('./routes/hist/doge');
var EMC2 = require('./routes/hist/emc2');
var ETC = require('./routes/hist/etc');
var ETH = require('./routes/hist/eth');
var EXP = require('./routes/hist/exp');
var FCT = require('./routes/hist/fct');
var FLDC = require('./routes/hist/fldc');
var FLO = require('./routes/hist/flo');
var GAME = require('./routes/hist/game');
var GNO = require('./routes/hist/gno');
var GNT = require('./routes/hist/gnt');
var GRC = require('./routes/hist/grc');
var HUC = require('./routes/hist/huc');
var LBC = require('./routes/hist/lbc');
var LSK = require('./routes/hist/lsk');
var LTC = require('./routes/hist/ltc');
var MAID = require('./routes/hist/maid');
var NAUT = require('./routes/hist/naut');
var NAV = require('./routes/hist/nav');
var NEOS = require('./routes/hist/neos');
var NMC = require('./routes/hist/nmc');
var NOTE = require('./routes/hist/note');
var NXC = require('./routes/hist/nxc');
var NXT = require('./routes/hist/nxt');
var OMNI = require('./routes/hist/omni');
var PASC = require('./routes/hist/pasc');
var PINK = require('./routes/hist/pink');
var POT = require('./routes/hist/pot');
var PPC = require('./routes/hist/ppc');
var RADS = require('./routes/hist/rads');
var REP = require('./routes/hist/rep');
var RIC = require('./routes/hist/ric');
var SBD = require('./routes/hist/sbd');
var SC = require('./routes/hist/sc');
var SJCX = require('./routes/hist/sjcx');
var STEEM = require('./routes/hist/steem');
var STRAT = require('./routes/hist/strat');
var SYS = require('./routes/hist/sys');
var VIA = require('./routes/hist/via');
var VRC = require('./routes/hist/vrc');
var VTC = require('./routes/hist/vtc');
var XBC = require('./routes/hist/xbc');
var XCP = require('./routes/hist/xcp');
var XEM = require('./routes/hist/xem');
var XLM = require('./routes/hist/xlm');
var XMR = require('./routes/hist/xmr');
var XPM = require('./routes/hist/xpm');
var XRP = require('./routes/hist/xrp');
var XVC = require('./routes/hist/xvc');
var ZEC = require('./routes/hist/zec');

var app = express();
var http = require('http');
var fs = require('fs');
var url = require('url');

// setup node-rest-client
var Client = require('node-rest-client').Client;
var client = new Client();

// setup socket.io
var io = require('./io');
import ioClient from 'socket.io-client';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//setup routes for historical data
app.use('/', routes);
app.use('/hist/amp', AMP);
app.use('/hist/ardr', ARDR);
app.use('/hist/bcn', BCN);
app.use('/hist/bcy', BCY);
app.use('/hist/bela', BELA);
app.use('/hist/blk', BLK);
app.use('/hist/btc', BTC);
app.use('/hist/btcd', BTCD);
app.use('/hist/btm', BTM);
app.use('/hist/burst', BURST);
app.use('/hist/clam', CLAM);
app.use('/hist/dash', DASH);
app.use('/hist/dcr', DCR);
app.use('/hist/dgb', DGB);
app.use('/hist/doge', DOGE);
app.use('/hist/emc2', EMC2);
app.use('/hist/etc', ETC);
app.use('/hist/eth', ETH);
app.use('/hist/exp', EXP);
app.use('/hist/fct', FCT);
app.use('/hist/fldc', FLDC);
app.use('/hist/flo', FLO);
app.use('/hist/game', GAME);
app.use('/hist/gno', GNO);
app.use('/hist/gnt', GNT);
app.use('/hist/grc', GRC);
app.use('/hist/huc', HUC);
app.use('/hist/lbc', LBC);
app.use('/hist/lsk', LSK);
app.use('/hist/ltc', LTC);
app.use('/hist/maid', MAID);
app.use('/hist/naut', NAUT);
app.use('/hist/nav', NAV);
app.use('/hist/neos', NEOS);
app.use('/hist/nmc', NMC);
app.use('/hist/note', NOTE);
app.use('/hist/nxc', NXC);
app.use('/hist/nxt', NXT);
app.use('/hist/omni', OMNI);
app.use('/hist/pasc', PASC);
app.use('/hist/pink', PINK);
app.use('/hist/pot', POT);
app.use('/hist/ppc', PPC);
app.use('/hist/rads', RADS);
app.use('/hist/rep', REP);
app.use('/hist/ric', RIC);
app.use('/hist/sbd', SBD);
app.use('/hist/sc', SC);
app.use('/hist/sjcx', SJCX);
app.use('/hist/steem', STEEM);
app.use('/hist/strat', STRAT);
app.use('/hist/sys', SYS);
app.use('/hist/via', VIA);
app.use('/hist/vrc', VRC);
app.use('/hist/vtc', VTC);
app.use('/hist/xbc', XBC);
app.use('/hist/xcp', XCP);
app.use('/hist/xem', XEM);
app.use('/hist/xlm', XLM);
app.use('/hist/xmr', XMR);
app.use('/hist/xpm', XPM);
app.use('/hist/xrp', XRP);
app.use('/hist/xvc', XVC);
app.use('/hist/zec', ZEC);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//////////// Socket.io - FETCH DATA FROM EXTERNAL SOCKET \\\\\\\\\\\\\\\\\\\
// var quote = {};
//
// // subscribe to external socket
// var socket = ioClient.connect('https://streamer.cryptocompare.com');
//

    let subscription = [
        '5~CCCAGG~XMR~BTC',
        '5~CCCAGG~BCN~BTC',
        '5~CCCAGG~AMP~BTC',
        '5~CCCAGG~ARDR~BTC',
        '5~CCCAGG~BCY~BTC',
        '5~CCCAGG~BELA~BTC',
        '5~CCCAGG~BLK~BTC',
        '5~CCCAGG~BTM~BTC',
        '5~CCCAGG~BTS~BTC',
        '5~CCCAGG~BURST~BTC',
        '5~CCCAGG~CLAM~BTC',
        '5~CCCAGG~DASH~BTC',
        '5~CCCAGG~DCR~BTC',
        '5~CCCAGG~DGB~BTC',
        '5~CCCAGG~DOGE~BTC',
        '5~CCCAGG~EMC2~BTC',
        '5~CCCAGG~ETC~BTC',
        '5~CCCAGG~ETH~BTC',
        '5~CCCAGG~EXP~BTC',
        '5~CCCAGG~FCT~BTC',
        '5~CCCAGG~FLDC~BTC',
        '5~CCCAGG~FLO~BTC',
        '5~CCCAGG~GAME~BTC',
        '5~CCCAGG~GNO~BTC',
        '5~CCCAGG~GNT~BTC',
        '5~CCCAGG~GRC~BTC',
        '5~CCCAGG~HUC~BTC',
        '5~CCCAGG~LBC~BTC',
        '5~CCCAGG~LSK~BTC',
        '5~CCCAGG~LTC~BTC',
        '5~CCCAGG~MAID~BTC',
        '5~CCCAGG~NAUT~BTC',
        '5~CCCAGG~NAV~BTC',
        '5~CCCAGG~NEOS~BTC',
        '5~CCCAGG~NMC~BTC',
        '5~CCCAGG~NOTE~BTC',
        '5~CCCAGG~NXC~BTC',
        '5~CCCAGG~NXT~BTC',
        '5~CCCAGG~OMNI~BTC',
        '5~CCCAGG~PASC~BTC',
        '5~CCCAGG~PINK~BTC',
        '5~CCCAGG~POT~BTC',
        '5~CCCAGG~PPC~BTC',
        '5~CCCAGG~RADS~BTC',
        '5~CCCAGG~REP~BTC',
        '5~CCCAGG~RIC~BTC',
        '5~CCCAGG~SBD~BTC',
        '5~CCCAGG~SC~BTC',
        '5~CCCAGG~SJCX~BTC',
        '5~CCCAGG~STEEM~BTC',
        '5~CCCAGG~XLM~BTC',
        '5~CCCAGG~STRAT~BTC',
        '5~CCCAGG~SYS~BTC',
        '5~CCCAGG~VIA~BTC',
        '5~CCCAGG~VRC~BTC',
        '5~CCCAGG~VTC~BTC',
        '5~CCCAGG~XBC~BTC',
        '5~CCCAGG~XCP~BTC',
        '5~CCCAGG~XEM~BTC',
        '5~CCCAGG~XPM~BTC',
        '5~CCCAGG~XRP~BTC',
        '5~CCCAGG~XVC~BTC',
        '5~CCCAGG~ZEC~BTC'];

    // let fetchData = () => {
    //
    //     socket.emit('SubAdd', {subs: subscription});
    // };


//receive data

// CRYPTOCOMPARE
//         socket.on("m", function (message) {
//             let messageType = message.substring(0, message.indexOf("~"));
//             let res = {};
//             if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
//                 res = CCC.CURRENT.unpack(message);
//                 console.log(res);
//                 updateQuote(res);
//             }
//         });
//
//         // assign keys, send to client
//         let updateQuote = (result) => {
//
//             let keys = Object.keys(result);
//
//             for (let i = 0; i < keys.length; ++i) {
//                 quote[keys[i]] = result[keys[i]];
//             }
//             io.emit('m', quote);
//             // console.log(quote);
//         };
//
// setTimeout(fetchData, 100);
//
// setInterval(fetchData, 180000);

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG
//For aggregate quote updates use CCCAGG as market

// COINCAP

var socket = ioClient.connect('http://socket.coincap.io');

socket.on('trades', function (tradeMsg) {
    io.emit('trades', tradeMsg);

    // console.log(tradeMsg.message);
});

// socket.on('global', function (globalMsg) {
//     console.log(globalMsg);
// });

module.exports = app;
