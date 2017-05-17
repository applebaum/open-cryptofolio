import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      price: 0
    };
  }

  render() {
    return (
        <div>
          BTC price is {this.state.price} USD
        </div>
    )
  }
}
