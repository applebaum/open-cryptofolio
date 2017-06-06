import React, {Component} from "react";
import { Jumbotron } from 'react-bootstrap';

/*This will be a component for displaying overall value of user's portfolio*/

export default class Ticker extends Component {
    render() {
        return (
            <Jumbotron style={{height: '425'}}><h1>1337$</h1></Jumbotron>
        );
    }
}

