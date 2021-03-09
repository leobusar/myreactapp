import React, { Component } from "react";
import { Table } from "react-bootstrap";
import UserForm from  '../components/UserForm';

export default class UserList extends Component {
  constructor(){
      super();
      this.state = {
        users: []
      }
  }

  componentDidMount() {
      let users = [
        {id: 1, name: "Paco Donald", username: "paco", email: "paco@disney.com"},
        {id: 2, name: "Hugo Donald", username: "hugo", email: "hugo@disney.com"},
        {id: 3, name: "Luis Donald", username: "luis", email: "luis@disney.com"},
        {id: 4, name: "Pato Donald", username: "pato", email: "pato@disney.com"},
        {id: 5, name: "Daisy Donald", username: "daisy", email: "daisy@disney.com"},
      ]; 
      this.setState({users});

  }

  renderUsers (){
      let userList = this.state.users.map ( user => (
        <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
      </tr>
      )); 

      return userList;
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers() }
          </tbody>
        </Table>
        <UserForm />
      </div>
    );
  }
}
