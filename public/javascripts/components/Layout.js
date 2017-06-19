import React, {Component} from "react";
import cookie from "react-cookies";
import GraphContainer from './GraphContainer';
import Ticker from './TickerTable';
import PortfolioContainer from './PortfolioContainer';
import { Button, OverlayTrigger, Tooltip, Glyphicon, Grid, Col, Row,  Navbar } from 'react-bootstrap';

/**This is a layout component utilising bootstrap grid system*/
//TODO: cookies
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.showTicker = this.showTicker.bind(this);
        this.showChart = this.showChart.bind(this);
        this.state = {
            //Ticker visibility controlled by state
            showTicker: false,
            //size of columns controlled by state
            columnSize: 12,
            chosenCoinData: null,
            chosenCoinName: null,
            portfolio: null,
            date: null,
            showPortfolioChart: true
        }
    }

    //on clicking showTicker button, state is switched to the opposite, triggering hide/show Ticker logic,
    //and column width values are reassigned to resize
    showTicker() {
        this.setState({
            showTicker: !this.state.showTicker,
            columnSize: this.state.columnSize === 12 ? 9 : 12
        });
        // cookie.save("showTicker", this.state.showTicker, {path: "/", maxAge: 631138520});
        // cookie.save("columnSize", this.state.columnSize, {path: "/", maxAge: 631138520});
    }

    showChart(link, coin, showPortfolioChart) {
        this.setState({
            chosenCoinData: link,
            chosenCoinName: coin,
            showPortfolioChart: showPortfolioChart
        })
    }

    //receive from child (portfolio) pass to another (graph)
    passPortfolioToChart(data, date, showChart){
        this.setState({portfolio: data, date: date, showPortfolioChart: showChart})
    }

    // showPortfolioChart(boolean){
    //
    // }

    render() {
            return (
                <Grid fluid={true}>

                    <Row className="show-grid">
                        <Col md={12}>
                            <Navbar><h1>Coin till</h1></Navbar>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={this.state.columnSize}>

                            <OverlayTrigger placement="left"
                                            overlay={this.state.showTicker ?
                                                <Tooltip id="tooltip">Hide ticker</Tooltip> :
                                                <Tooltip id="tooltip">Show ticker for all available coins (consumes bandwidth)</Tooltip>}>
                                <Button  className="ticker-button" onClick={ () => this.showTicker() }>
                                    <Glyphicon glyph="list"/>
                                </Button>

                            </OverlayTrigger>

                            <GraphContainer
                                portfolio={this.state.portfolio}
                                date={this.state.date}
                                chosenCoinData={this.state.chosenCoinData}
                                chosenCoinName={this.state.chosenCoinName}
                                showTicker={this.state.showTicker}
                                showPortfolioChart={this.state.showPortfolioChart}
                                // shouldShowPortfolioChart={this.showPortfolioChart.bind(this)}

                            />

                            <PortfolioContainer
                                passPortfolioMetadata={this.passPortfolioToChart.bind(this)}
                                showPortfolioChart={this.state.showPortfolioChart}
                            />
                        </Col>
                        {/*if showTicker=true, then render column with Ticker, otherwise render null*/}
                        { this.state.showTicker ?
                            <Col md={3}>
                                <Ticker chosenCoin={this.showChart} />
                            </Col> : null }
                    </Row>

                </Grid>
            );

    }

}