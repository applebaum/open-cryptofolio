import React, {Component} from "react";
import CoinInputApp from './CoinInputApp';
import PortfolioPerformance from './PortfolioPerformance';
import { Grid, Col, Row } from 'react-bootstrap';

/* This is a container component for portfolio-related components */

export default class PortfolioContainer extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        this.setData = this.setData.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            data: []
        }
    }

    //receive portfolio metadata from one child (CoinInputApp),
    //set it as state, pass state to another child (PortfolioPerformance)
    setData(data){
        this.setState({data: data})
    }

    render() {

        console.log('me '+ this.state.data);

        return (
            <Grid fluid={true}>
                <Row className="showGrid">
                    <Col md={8} >
                        <CoinInputApp data={this.setData} />
                    </Col>
                    <Col md={4} >
                        <PortfolioPerformance data={this.state.data}/>
                    </Col>
                </Row>
            </Grid>


        );
    }
}

