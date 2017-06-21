import React, {Component} from "react";
import CoinInputApp from './CoinInputApp';
import PortfolioPerformance from './PortfolioPerformance';
import { Grid, Col, Row } from 'react-bootstrap';

/* This is a container component for portfolio-related components */

export default class PortfolioContainer extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        this.passPortfolioMetadata = this.passPortfolioMetadata.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            portfolio: [],
            date: null,
            showPortfolioChart: true
        }
    }

    //receive portfolio metadata from one child (CoinInputApp),
    //set it as state, pass state to another child (PortfolioPerformance)
    passPortfolioMetadata(data, date, showChart){
        this.props.passPortfolioMetadata(data, date, showChart);
        this.setState({portfolio: data, date: date, showPortfolioChart: showChart})
    }

    showCoinChart(link, name, boolean){
        this.props.showCoinChart(link, name, boolean)
    }

    render() {

        return (
            <Grid fluid={true}>
                <Row className="showGrid">
                    <Col md={8} >
                        <CoinInputApp getPortfolioMetadata={this.passPortfolioMetadata}
                                      showPortfolioChart={this.props.showPortfolioChart}
                                      showCoinChart={this.showCoinChart.bind(this)}
                        />
                    </Col>
                    <Col md={4} >
                        <PortfolioPerformance data={this.state.portfolio}/>
                    </Col>
                </Row>
            </Grid>


        );
    }
}

