import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        name={this.props.name}
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
export default Input;
