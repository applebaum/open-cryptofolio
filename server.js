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

/*Socket.io connects to external CoinCap socket API and fetches historical data on all available coins,
* it then emits the data to client as soon as it receives it*/

//connect to external socket
let socket = ioClient.connect('http://socket.coincap.io');

//when received data, emit it to client
socket.on('trades', function (tradeMsg) {
    io.emit('trades', tradeMsg);
    if (tradeMsg.message.coin === 'XMR') {
        io.emit('XMR', tradeMsg);
    }
});

module.exports = app;
