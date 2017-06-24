import React, {Component} from "react";
import CoinInputApp from './CoinInputApp';
import { Clearfix, Button , NavDropdown, MenuItem, SplitButton, Glyphicon, Tabs, Tab, TabContainer, TabContent, TabPane, Grid, Col, Row, Jumbotron, Nav, NavItem } from 'react-bootstrap';


export default class MultiplePortfolios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosen: 0
        }
    }

    passPortfolioMetadata(data, date, showChart){
        //only pass active portfolio data to other components
        if (data.id === this.state.chosen) {
        this.props.getPortfolioMetadata(data, date, showChart);
        }
    }

    showCoinChart(link, name, boolean){
        this.props.showCoinChart(link, name, boolean)
    }

    createNewPortfolio(){
        let getId = this.props.portfolios[this.props.portfolios.length - 1].id + 1;
        console.log(getId);
        this.props.createNewPortfolio(getId, 'Portfolio', 'Select date', [])
    }

    handleRemovePortfolio(id){
        this.props.removePortfolio(id)
    }

    //map through portfolios array, create tab headers
    render () {
        let portfolioTabNav = this.props.portfolios.map((portfolios, i) => {
            return (
                <NavItem eventKey={portfolios.id} key={portfolios.id} onSelect={() => this.setState({chosen: portfolios.id})}>
                    {portfolios.name}
                </NavItem>

            )
        });

        //map through portfolios array, create tab content
        let portfolioNode = this.props.portfolios.map((portfolios, i) => {
            return <CoinInputApp portfolio={portfolios}
                                 getPortfolioMetadata={this.passPortfolioMetadata.bind(this)}
                                 showPortfolioChart={this.props.showPortfolioChart}
                                 showCoinChart={this.showCoinChart.bind(this)}
                                 key={portfolios.id}
                                 handleRemovePortfolio={this.handleRemovePortfolio.bind(this)}
            />
        });

        // let getId = this.props.portfolios[this.props.portfolios.length - 1].id + 1;

        return (
            <Tab.Container defaultActiveKey={0} id="portfolio-tabs" >
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            {portfolioTabNav}
                            <NavItem   onClick={() => this.createNewPortfolio()}>
                                <Glyphicon glyph="plus"/>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation={false}>
                            {portfolioNode}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
