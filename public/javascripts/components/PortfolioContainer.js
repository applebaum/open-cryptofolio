import React, {Component} from "react";
import PortfolioInputForm from './PortfolioInputForm';
import PortfolioPerformance from './PortfolioPerformance';
import { Grid, Col, Row } from 'react-bootstrap';

/* This is a container component for portfolio-related components */

export default class PortfolioContainer extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row className="showGrid">
                    <Col md={8}>
                        <PortfolioInputForm/>
                    </Col>
                    <Col md={4} >
                        <PortfolioPerformance/>
                    </Col>
                </Row>
            </Grid>


        );
    }
}

