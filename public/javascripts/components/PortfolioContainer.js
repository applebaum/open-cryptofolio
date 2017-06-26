import React, {Component} from "react";
import PortfolioPerformance from './PortfolioPerformance';
import MultiplePortfolios from './MultiplePortfolios';
import { Grid, Col, Row } from 'react-bootstrap';
import cookie from "react-cookies";


/** This is a container component for portfolio-related components, it handles user created portfolios as an array, which is passed to children,
 * who map through it and create portfolio tabs. When user updates portfolio data its immediately saved to portfolios array through child-to-parent callback.
 * */

export default class PortfolioContainer extends Component {

    constructor(props){
        super(props);
        this.passPortfolioMetadata = this.passPortfolioMetadata.bind(this);
        // load data from cookies or set initial empty state (array) if no cookies are provided
        this.state = {
            activePortfolio: [],
            date: null,
            showPortfolioChart: true,
            portfolios: cookie.load("portfolios") ||  [],
        }
    }

    //if no portfolios saved in cookies create empty one
    componentDidMount(){
        if (!this.state.portfolios[0]) {
            this.createEmptyPortfolio(); }
    }

    //when the last element from portfolios array removed, an empty portfolio is created
    componentDidUpdate(){
        if (this.state.portfolios.length === 0) {
            this.createEmptyPortfolio(); }
    }

    //function for creating first portfolio
    createEmptyPortfolio () {
        console.log('make an empty pls');
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

    //pass coin data to chart component
    showCoinChart(link, name, boolean){
        this.props.showCoinChart(link, name, boolean)
    }

    //function used to create initial empty portfolio
    createPortfolioMetadata(id, name, date, data){
        //create object from received props
        let portfolio = {id: id, name: name, date: date, data: data};
        //push it into state portfolios array
        let portfolios = this.state.portfolios.slice();
        portfolios.push(portfolio);
        //set it as state
        this.setState({portfolios: portfolios});
        console.log('ok, heres a new portfolio');
        //save to cookies
        cookie.save("portfolios", portfolios, {path: "/", maxAge: 631138520});
        console.log(portfolios);
    }

    removePortfolio(id){
        //filter portfolios, if only one left just reset portfolios array
        if (this.state.portfolios.length > 1) {
            const remainder = this.state.portfolios.filter((portfolio) => {
                if (portfolio.id !== id) return portfolio;
            });
            // update state with remainder
            console.log('removed ' + id);
            console.log(remainder);
            this.setState({portfolios: remainder});
            // update cookies
            cookie.save("portfolios", remainder, {path: "/", maxAge: 631138520});
        }
        else { this.setState({portfolios: []}) }
    }

    editName(edited){
        console.log(edited);
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
                                            editName={this.editName.bind(this)}
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

