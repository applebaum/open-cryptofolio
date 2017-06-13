var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var http = require('http');
var fs = require('fs');
var url = require('url');

// setup node-rest-client dependeices
var Client = require('node-rest-client').Client;
var client = new Client();

// setup socket.io dependencies
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


//setup routes for historical coin data
var routes = require('./routes/index');
var AMP = require('./routes/hist/amp');
var ARDR = require('./routes/hist/ardr');
var BCN = require('./routes/hist/bcn');
var BCY = require('./routes/hist/bcy');
var BELA = require('./routes/hist/bela');
var BLK = require('./routes/hist/blk');
var BTC = require('./routes/hist/btc');
var BTS = require('./routes/hist/bts');
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

app.use('/', routes);
app.use('/hist/amp', AMP);
app.use('/hist/ardr', ARDR);
app.use('/hist/bcn', BCN);
app.use('/hist/bcy', BCY);
app.use('/hist/bela', BELA);
app.use('/hist/blk', BLK);
app.use('/hist/btc', BTC);
app.use('/hist/bts', BTS);
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

/**Socket.io connects to external CoinCap socket API and fetches historical data on all available coins,
 * splits stream by coins and stores data on each individual coin in server-side storage,
 * then emits the data from storage to client */

//create storage for caching received trade messages
let Storage = require('node-storage');
let store = new Storage('./store');

//connect to external socket
let socket = ioClient.connect('http://socket.coincap.io');

//when received data, split it by coin name and store separately
socket.on('trades', function (tradeMsg) {
    store.put('trades', tradeMsg);

    switch (tradeMsg.message.coin) {
        case 'BTC': store.put('BTC', tradeMsg); break;
        case 'XMR': store.put('XMR', tradeMsg); break;
        case 'XRP': store.put('XRP', tradeMsg); break;
        case 'AMP': store.put('AMP', tradeMsg); break;
        case 'ARDR': store.put('ARDR', tradeMsg); break;
        case 'BCN': store.put('BCN', tradeMsg); break;
        case 'BCY': store.put('BCY', tradeMsg); break;
        case 'BELA': store.put('BELA', tradeMsg); break;
        case 'BLK': store.put('BLK', tradeMsg); break;
        case 'BTCD': store.put('BTCD', tradeMsg); break;
        case 'BTM': store.put('BTM', tradeMsg); break;
        case 'BTS': store.put('BTS', tradeMsg); break;
        case 'BURST': store.put('BURST', tradeMsg); break;
        case 'CLAM': store.put('CLAM', tradeMsg); break;
        case 'DASH': store.put('DASH', tradeMsg); break;
        case 'DCR': store.put('DCR', tradeMsg); break;
        case 'DGB': store.put('DGB', tradeMsg); break;
        case 'DOGE': store.put('DOGE', tradeMsg); break;
        case 'EMC2': store.put('EMC2', tradeMsg); break;
        case 'ETC': store.put('ETC', tradeMsg); break;
        case 'ETH': store.put('ETH', tradeMsg); break;
        case 'EXP': store.put('EXP', tradeMsg); break;
        case 'FCT': store.put('FCT', tradeMsg); break;
        case 'FLDC': store.put('FLDC', tradeMsg); break;
        case 'FLO': store.put('FLO', tradeMsg); break;
        case 'GAME': store.put('GAME', tradeMsg); break;
        case 'GNO': store.put('GNO', tradeMsg); break;
        case 'GNT': store.put('GNT', tradeMsg); break;
        case 'GRC': store.put('GRC', tradeMsg); break;
        case 'HUC': store.put('HUC', tradeMsg); break;
        case 'LBC': store.put('LBC', tradeMsg); break;
        case 'LSK': store.put('LSK', tradeMsg); break;
        case 'LTC': store.put('LTC', tradeMsg); break;
        case 'MAID': store.put('MAID', tradeMsg); break;
        case 'NAUT': store.put('NAUT', tradeMsg); break;
        case 'NAV': store.put('NAV', tradeMsg); break;
        case 'NEOS': store.put('NEOS', tradeMsg); break;
        case 'NMC': store.put('NMC', tradeMsg); break;
        case 'NOTE': store.put('NOTE', tradeMsg); break;
        case 'NXC': store.put('NXC', tradeMsg); break;
        case 'NXT': store.put('NXT', tradeMsg); break;
        case 'OMNI': store.put('OMNI', tradeMsg); break;
        case 'PASC': store.put('PASC', tradeMsg); break;
        case 'PINK': store.put('PINK', tradeMsg); break;
        case 'POT': store.put('POT', tradeMsg); break;
        case 'PPC': store.put('PPC', tradeMsg); break;
        case 'RADS': store.put('RADS', tradeMsg); break;
        case 'REP': store.put('REP', tradeMsg); break;
        case 'RIC': store.put('RIC', tradeMsg); break;
        case 'SBD': store.put('SBD', tradeMsg); break;
        case 'SC': store.put('SC', tradeMsg); break;
        case 'SJCX': store.put('SJCX', tradeMsg); break;
        case 'STEEM': store.put('STEEM', tradeMsg); break;
        case 'STR': store.put('STR', tradeMsg); break;
        case 'STRAT': store.put('STRAT', tradeMsg); break;
        case 'SYS': store.put('SYS', tradeMsg); break;
        case 'VIA': store.put('VIA', tradeMsg); break;
        case 'VRC': store.put('VRC', tradeMsg); break;
        case 'VTC': store.put('VTC', tradeMsg); break;
        case 'XBC': store.put('XBC', tradeMsg); break;
        case 'XCP': store.put('XCP', tradeMsg); break;
        case 'XEM': store.put('XEM', tradeMsg); break;
        case 'XPM': store.put('XPM', tradeMsg); break;
        case 'XVC': store.put('XVC', tradeMsg); break;
        case 'ZEC': store.put('ZEC', tradeMsg); break;
    }


    // emit data to client on each individual coin from store
    io.emit('BTC', store.get('BTC'));
    io.emit('XMR', store.get('XMR'));
    io.emit('XRP', store.get('XRP'));
    io.emit('AMP', store.get('AMP'));
    io.emit('ARDR', store.get('ARDR'));
    io.emit('BCN', store.get('BCN'));
    io.emit('BCY', store.get('BCY'));
    io.emit('BELA', store.get('BELA'));
    io.emit('BLK', store.get('BLK'));
    io.emit('BTCD', store.get('BTCD'));
    io.emit('BTM', store.get('BTM'));
    io.emit('BTS', store.get('BTS'));
    io.emit('BURST', store.get('BURST'));
    io.emit('CLAM', store.get('CLAM'));
    io.emit('DASH', store.get('DASH'));
    io.emit('DCR', store.get('DCR'));
    io.emit('DGB', store.get('DGB'));
    io.emit('DOGE', store.get('DOGE'));
    io.emit('EMC2', store.get('EMC2'));
    io.emit('ETC', store.get('ETC'));
    io.emit('ETH', store.get('ETH'));
    io.emit('EXP', store.get('EXP'));
    io.emit('FCT', store.get('FCT'));
    io.emit('FLDC', store.get('FLDC'));
    io.emit('FLO', store.get('FLO'));
    io.emit('GAME', store.get('GAME'));
    io.emit('GNO', store.get('GNO'));
    io.emit('GNT', store.get('GNT'));
    io.emit('GRC', store.get('GRC'));
    io.emit('HUC', store.get('HUC'));
    io.emit('LBC', store.get('LBC'));
    io.emit('LSK', store.get('LSK'));
    io.emit('LTC', store.get('LTC'));
    io.emit('MAID', store.get('MAID'));
    io.emit('NAUT', store.get('NAUT'));
    io.emit('NAV', store.get('NAV'));
    io.emit('NEOS', store.get('NEOS'));
    io.emit('NMC', store.get('NMC'));
    io.emit('NOTE', store.get('NOTE'));
    io.emit('NXC', store.get('NXC'));
    io.emit('NXT', store.get('NXT'));
    io.emit('OMNI', store.get('OMNI'));
    io.emit('PASC', store.get('PASC'));
    io.emit('PINK', store.get('PINK'));
    io.emit('POT', store.get('POT'));
    io.emit('PPC', store.get('PPC'));
    io.emit('RADS', store.get('RADS'));
    io.emit('REP', store.get('REP'));
    io.emit('RIC', store.get('RIC'));
    io.emit('SBD', store.get('SBD'));
    io.emit('SC', store.get('SC'));
    io.emit('SJCX', store.get('SJCX'));
    io.emit('STEEM', store.get('STEEM'));
    io.emit('STR', store.get('STR'));
    io.emit('STRAT', store.get('STRAT'));
    io.emit('SYS', store.get('SYS'));
    io.emit('VIA', store.get('VIA'));
    io.emit('VRC', store.get('VRC'));
    io.emit('VTC', store.get('VTC'));
    io.emit('XBC', store.get('XBC'));
    io.emit('XCP', store.get('XCP'));
    io.emit('XEM', store.get('XEM'));
    io.emit('XPM', store.get('XPM'));
    io.emit('XVC', store.get('XVC'));
    io.emit('ZEC', store.get('ZEC'));
});

module.exports = app;
