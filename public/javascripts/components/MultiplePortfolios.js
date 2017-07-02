import React, {Component} from "react";
import CoinInputApp from './CoinInputApp';
import { Glyphicon, Tab, Col, Row, Nav, NavItem } from 'react-bootstrap';

/** Component maps through portfolios array received from parent (PortfolioContainer) and creates tabs, each one renders CoinInputApp*/

export default class MultiplePortfolios extends Component {

    constructor(props) {
        super(props);
        this.createNewPortfolio = this.createNewPortfolio.bind(this);
        this.state = {
            //controls focus on portfolio tabs
            chosen: 0
        }
    }

    //only pass active portfolio data to other components
    passPortfolioMetadata(data, date, showChart){
        if (data.id === this.state.chosen) {
        this.props.getPortfolioMetadata(data, date, showChart);
        }
    }

    //pass chosen coin details to chart component
    showCoinChart(link, name, boolean){
        this.props.showCoinChart(link, name, boolean)
    }

    createNewPortfolio(){
        //take last portfolios id, add one, to get new id
        let getId = this.props.portfolios[this.props.portfolios.length - 1].id + 1;
        console.log('child asking for portfolio pls ' + getId);
        //send parameters to portfolio creating function
        this.props.createNewPortfolio(getId, 'Portfolio', 'Select date', []);
        console.log('and now getId is ' + getId);
        //focus on new portfolio tab
        // this.setState({chosen: this.props.portfolios.length})
    }

    //send portfolio removing function id os chosen portfolio
    handleRemovePortfolio(id){

        this.props.removePortfolio(id);
        //focus on previous tab
        this.setState({chosen: id === 0 ? 0 : id-1})
    }

    editName(id, name){
        this.props.editName(id, name)
    }

    handleSelect() {
        //this is to prevent react-bootstrap console warning,
        //selection is actually handled by tab itself
    }

    //map through portfolios array, create tab headers
    render () {
        let portfolioTabNav = this.props.portfolios.map((portfolios) => {
            return (
                <NavItem eventKey={portfolios.id} key={portfolios.id} onSelect={() => this.setState({chosen: portfolios.id})}>
                    <div className={this.state.chosen === portfolios.id ? 'tab-chosen' : 'tab'}>
                    {portfolios.name}
                    </div>
                </NavItem>

            )
        });

        //map through portfolios array, create tab content
        let portfolioNode = this.props.portfolios.map((portfolios) => {
            return <CoinInputApp portfolio={portfolios}
                                 getPortfolioMetadata={this.passPortfolioMetadata.bind(this)}
                                 showPortfolioChart={this.props.showPortfolioChart}
                                 showCoinChart={this.showCoinChart.bind(this)}
                                 key={portfolios.id}
                                 handleRemovePortfolio={this.handleRemovePortfolio.bind(this)}
                                 editName={this.editName.bind(this)}
            />
        });

        return (
            <div className="portfolio-roster-app">
            <Tab.Container
                onSelect={this.handleSelect.bind(this)}
                activeKey={this.state.chosen}
                id="portfolio-tabs"
            >
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav className="tabs-nav" bsStyle="tabs">
                            {portfolioTabNav}
                            <NavItem className="add-port-btn" onClick={() => this.createNewPortfolio()}>
                                <Glyphicon className="add-port-gl" glyph="plus"/>
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
            </div>
        )
    }
}
