## Coin Till
Open-source cryptocurrency portfolio manager written in React.JS capable
of handling multiple portfolios, showing chart data on portfolio performance
and live value in BTC and major fiats, exporting/importing portfolio data,
as well as displaying all major cryptocurrencies live trading
data and historical performance chart.

The project is currently under development.

## Build Instructions
The project is based on Node.JS Express server with React.JS front-end.

## Download Dependencies
To build this project you will need

* `npm v3.10.10`+
* `Node.JS v6.10.3`+

which you can download from [Node.JS website](https://nodejs.org/en/) (npm is included in Node.JS).

## Download Project Files
To get project files you will need to either clone this repository (run `git clone https://github.com/applebaum/coin-till.git` in terminal),
which will create a new `coin-till folder`, or [download ZIP](https://github.com/applebaum/coin-till/archive/master.zip)
and extract it using archive manager of your choice.

## Install Dependencies
After downloading project repository navigate to `coin-till` directory and in terminal
run `npm install` which will automatically install all of the project dependencies.

## Building scripts
To run the app you will need to execute following scripts:

In project directory run

* `npm build` - to build static version of client
* `npm build:watch` - to build development version of client which watches for changes and automatically updates DOM
* `npm start` - to serve app

For development purposes you should simultaneously run `npm build:watch` and `npm start` (for example, in two terminal windows).
After each code edit you will need to restart server (`npm run start`), but not client (no need to rerun `npm build:watch`).
Note, that entry point of the app is `bin/www` and not `server.js`.

## Run the App

After successfully starting the server, navigate to [`http://localhost:3000/`](http://localhost:3000/).