## Open Cryptofolio

![alt text](https://raw.githubusercontent.com/applebaum/open-cryptofolio/master/public/logo-bg.png "Open Cryptofolio - open-soruce cryptocurrency portfolio manager")

Open-source cryptocurrency portfolio manager written using React.js. Capable
of handling multiple portfolios, showing chart data on portfolio performance
and live value in BTC and major fiats, exporting/importing portfolio data,
as well as displaying all major cryptocurrencies live trading
data and historical performance chart.

All of the data is handled client-side, nothing is sent to server. If you choose to wipe cookies at the end of browsing session you can save your portfolio locally and later easily import it. 

The project is currently under development, stay tuned for updates.

## Build Instructions
The project is based on Node.js Express server with React.js front-end.

**If you wish to contribute:**

## Download Dependencies
To build this project you will need

* `npm v3.10.10`+
* `Node.js v6.10.3`+

which you can download from [Node.js website](https://nodejs.org/en/) (npm is included in Node.JS).

## Download Project Files
To get project files you will need to either clone this repository (run `git clone https://github.com/applebaum/open-cryptofolio.git` in terminal),
which will create a new `open-cryptofolio` folder, or [download ZIP](https://github.com/applebaum/open-cryptofolio/archive/master.zip)
and extract it using archive manager of your choice.

## Install Dependencies
After downloading project repository navigate to `open-cryptofolio` directory and in terminal
run `npm install` which will automatically install all of the project dependencies (including `react` and `react-dom`).

## Building scripts
To run the app you will need to execute following scripts:

In project directory you may run:

* `npm run build` - to build app for production into `bundle.js`
* `npm run build:watch` - to build development version of client which watches for changes and automatically updates DOM
* `npm run start` - to serve app in the development mode

For development purposes you should simultaneously run `npm run build:watch` and `npm run start` (for example, in two terminal windows).
After each change you will need to restart server (`npm run start`) and refresh browser window, but not rebuild client (no need to rerun `npm run build:watch`).
Note, that entry point of the app is `bin/www` and not `server.js`.

## Run the App

After successfully starting the server, navigate to [`http://localhost:3000/`](http://localhost:3000/).

## Donate

If you wish to, you can buy me a cup of coffee :)

* **BTC**: `1GXQMBvqz6UovTRb87i89whBhJEtsADN2Z` 
* **XMR**: `472xmiPYuSPYP4Aj4ESJh5UYpE86FwEuULd3vY9qFBSFfkkScKSdBnz29QBEuZtym1WAhMpFZBx54cBYESxcAUnZJKvbTFM`
* **DOGE**: `D8aaCCZB6rMzE7JKQQ4nad9pwfCucLnMTE`