import React, {Component} from "react";
import { Col, Well } from 'react-bootstrap';
import Graph from './Graph';

/* This component is a container for Graph and Graph Placeholder (referenced by id from HighChart options)
   that renders to Layout*/

export default class GraphContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <Col md={12}>
                        <Well>
                            <Graph chosenCoinData={this.props.chosenCoinData}
                                   chosenCoinName={this.props.chosenCoinName}
                                   key={Math.random()}
                            />
                        </Well>
                </Col>

            );
        }
}
