import React, {Component} from "react";
import cookie from "react-cookies";
import GraphContainer from './GraphContainer';
import Ticker from './Ticker';
import PortfolioContainer from './PortfolioContainer';
import { Button, OverlayTrigger, Tooltip, Glyphicon, Grid, Col, Row,  Navbar } from 'react-bootstrap';

/**This is a layout component utilising bootstrap grid system*/
//TODO: cookies
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.showTicker = this.showTicker.bind(this);
        this.state = {
            //Ticker visibility controlled by state
            showTicker: false,
            //size of columns controlled by state
            columnSize: 12
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

    render() {
        console.log(this.state);
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
                                    <Glyphicon glyph="stats"/>
                                </Button>
                            </OverlayTrigger>

                            <GraphContainer />
                            <PortfolioContainer />
                        </Col>
                        {/*if showTicker=true, then render column with Ticker, otherwise render null*/}
                        { this.state.showTicker ?
                            <Col md={3}>
                                <Ticker />
                            </Col> : null }
                    </Row>

                </Grid>
            );

    }

}