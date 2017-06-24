import React, {Component} from "react";
import PortfolioPerformance from './PortfolioPerformance';
import MultiplePortfolios from './MultiplePortfolios';
import { Grid, Col, Row } from 'react-bootstrap';
import cookie from "react-cookies";


/* This is a container component for portfolio-related components */

export default class PortfolioContainer extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        this.passPortfolioMetadata = this.passPortfolioMetadata.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            activePortfolio: [],
            date: null,
            showPortfolioChart: true,
            key: 1,
            portfolios: cookie.load("portfolios") ||  [],
        }
    }

    componentDidMount(){
        if (!this.state.portfolios[0])
        this.createPortfolioMetadata(0, 'Portfolio', 'Select date', []);

    }

    //receive activePortfolio metadata from one child (CoinInputApp),
    //set it as state, pass state to another child (PortfolioPerformance)
    passPortfolioMetadata(data, date, showChart){
        //pass active portfolio data to parent
        this.props.passPortfolioMetadata(data, date, showChart);
        this.setState({activePortfolio: data, date: date, showPortfolioChart: showChart});
        //update portfolios array if user has changed data and save that to cookies
        let portfolios = this.state.portfolios;
        for (let i = 0; i < portfolios.length; i++) {
            if (portfolios[i].id === data.id)
                portfolios[i] = data
        }
        this.setState({portfolios: portfolios});
        cookie.save("portfolios", portfolios, {path: "/", maxAge: 631138520});

    }

    showCoinChart(link, name, boolean){
        this.props.showCoinChart(link, name, boolean)
    }

    handleSelect(key) {
        this.setState({key});
    }

    //function used to create initial empty portfolio
    createPortfolioMetadata(id, name, date, data){
        let portfolio = {id: id, name: name, date: date, data: data};
        console.log('new portfolio!');
        this.state.portfolios.push(portfolio);
        this.setState({portfolios: this.state.portfolios});
        cookie.save("portfolios", this.state.portfolios, {path: "/", maxAge: 631138520});
    }

    removePortfolio(id){
        const remainder = this.state.portfolios.filter((portfolio) => {
            if(portfolio.id !== id) return portfolio;
        });
        // update state with filter
        this.setState({portfolios: remainder});
        // update cookies
        cookie.save("portfolios", remainder, {path: "/", maxAge: 631138520});
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="showGrid">
                    <Col md={8} >
                        <MultiplePortfolios portfolios={this.state.portfolios}
                                            getPortfolioMetadata={this.passPortfolioMetadata}
                                            showPortfolioChart={this.props.showPortfolioChart}
                                            showCoinChart={this.showCoinChart.bind(this)}
                                            createNewPortfolio={this.createPortfolioMetadata.bind(this)}
                                            removePortfolio={this.removePortfolio.bind(this)}
                        />

                    </Col>
                    <Col md={4} >
                        <PortfolioPerformance data={this.state.activePortfolio.data}/>
                    </Col>
                </Row>
            </Grid>


        );
    }
}

