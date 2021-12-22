import React, { Component } from "react";

class Input extends Component {
  state = { value: this.props.value };
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.onChange(name, value);
    this.setState({ value });
  };
  render() {
    return (
      <input
        name={this.props.name}
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}
export default Input;
