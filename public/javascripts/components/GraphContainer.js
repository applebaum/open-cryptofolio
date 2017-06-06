import React, {Component} from "react";
import { Col, Row,  Jumbotron, Well } from 'react-bootstrap';

/* This component is a container for Graph and Graph Placeholder (referenced by id from HighChart options)
   that renders to Layout*/

export default class GraphContainer extends Component {
    render() {
        return (
                <Row className="showGrid">
                <Col md={12} >
                    <Well style={{height: '400'}} id="graph"> </Well>
                </Col>
                </Row>
        );
    }
}
