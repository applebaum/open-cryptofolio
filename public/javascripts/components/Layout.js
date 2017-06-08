import React, {Component} from "react";
import GraphContainer from './GraphContainer';
import Ticker from './Ticker';
import PortfolioContainer from './PortfolioContainer';
import { Grid, Col, Row,  Navbar } from 'react-bootstrap';

/**This is a layout component utilising bootstrap grid system*/

export default class Layout extends Component {
    render() {
    return (

        <Grid fluid={true}>

            <Row className="show-grid">
                <Col md={12}>
                    <Navbar><h1>Coin till</h1></Navbar>
                </Col>
            </Row>

            <Row className="show-grid">
                <Col md={9} >
                    <GraphContainer />
                    <PortfolioContainer />
                </Col>

                <Col md={3} >
                    <Ticker/>
                </Col>
            </Row>

        </Grid>
    );
    }
}