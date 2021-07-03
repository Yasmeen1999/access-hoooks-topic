import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1 style={{ margin: "10px", color: "red" }}>{this.state.count}</h1>
        <button
          style={{ margin: "10px", color: "black" }}
          onClick={this.increment}
        >
          Increment
        </button>
        <button onClick={this.decrement}>decrement</button>
        <h2>The current count is {this.state.count}</h2>
      </div>
    );
  }
}
export default Counter;
