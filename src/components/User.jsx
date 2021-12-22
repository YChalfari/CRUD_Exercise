import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import "./user.css";
import { v4 } from "uuid";
import axios from "axios";
export class User extends Component {
  state = {
    user: this.props.user,
    updatedUser: this.props.user,
  };
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({
      updatedUser: { ...prevState.updatedUser, [name]: value },
    }));
  };
  handleUpdate = (e) => {
    axios.put(
      `https://61c2fc0b9cfb8f0017a3e838.mockapi.io/users/${this.state.updatedUser.id}`,
      { ...this.state.updatedUser }
    );
  };
  renderUser() {
    const user = this.state.updatedUser;
    const userArr = Object.entries(user);

    return userArr.map((userProp) => {
      return (
        <div key={v4()}>
          <label>{userProp[0]}</label>
          <Input
            name={userProp[0]}
            value={userProp[1]}
            onChange={this.handleChange}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="user" key={this.props.user.id}>
        <div className="inputs-wrap">
          {this.renderUser()}
          <Button value="Save Changes" onClick={this.handleUpdate} />
          <Button value="Delete User" />
        </div>
        <img src={this.props.user.imageURL} alt={this.props.user.firstname} />
      </div>
    );
  }
}

export default User;
