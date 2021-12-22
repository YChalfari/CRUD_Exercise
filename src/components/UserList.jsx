import React, { Component } from "react";
import User from "./User";
import axios from "axios";

export class UserList extends Component {
  state = { users: [] };
  async componentDidMount() {
    const users = await axios.get(
      "https://61c2fc0b9cfb8f0017a3e838.mockapi.io/users"
    );
    this.setState({ users: users.data });
  }
  renderUsers = () => {
    return this.state.users.map((user) => <User key={user.id} user={user} />);
  };
  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

export default UserList;
