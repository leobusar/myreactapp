import React, { Component } from "react";
import { Table } from "react-bootstrap";
import UserForm from  '../components/UserForm';
import {Button } from "react-bootstrap";
//import firebase from "../config/firebase";
import axios from "../config/axios";

export default class UserList extends Component {
  constructor(){
      super();
      this.state = {
        users: [],
        user: {id: "", name: "", username: "", email: ""},
        //db: firebase.firestore(),
      }

  }

  componentDidMount = () => {
     this.getUsers();
   }

   getUsers = () => {
    let users = []; 

    // this.state.db.collection("user").get().then( querySnapshot => {
    //     querySnapshot.forEach( doc =>  {
    //       users.push(doc.data());
    //     })
    //     this.setState({users})
    //   }
    // )
    axios.get("users").then( res => 
      {
        console.log(res);
        users = res.data;
        this.setState({users})
      })
   }

  onEdit = (user) => {
    console.log(user)
    this.setState({user});
  }

  onDelete = (userDel) => {
    //console.log(userDel);
    // let userList =  this.state.users;

    // let index = userList.findIndex ( (user)=>  user.id === userDel.id)
    // //console.log("index: ", index);
    // userList.splice(index, 1);
    // this.setState({users: userList})
    ////this.state.db.collection("user").doc(userDel.id+"").delete();
    axios.delete("users/"+userDel.id)
    .then (
      res =>  {
        console.log(res); 
      this.getUsers();
      }
    ).catch (error => 
        {
          console.log("error", error);
        }
      );     
  }  

  renderUsers =() => {
      let userList = this.state.users.map ( user => (
        <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>
          <Button variant="primary" color="default" onClick={() => this.onEdit(user)}>
            Editar
          </Button> 

        <Button className="mr-auto" variant="primary" color="default" onClick={() => this.onDelete(user)}>
            Eliminar
        </Button>         
        </td>
      </tr>
      )); 

      return userList;
  }


  getId = () => {
    let users = this.state.users;
    if ( users.length > 0 )
      return users.reduce((p,v) => ( p<v.id?v.id:p ), this.state.users[0].id);
    else 
      return 0;
  }

  handleOnSubmit = (userAdd) =>{
    // let userList =  this.state.users;
    // if(userAdd.id === ""){
    //   let id = this.getId() + 1;
    //   userAdd.id = id;
    //   userList.push(userAdd);
    // }else {
    //   let index = userList.findIndex ( (user)=>  user.id === userAdd.id)
    //   userList[index] =  userAdd;
    // }
    if(userAdd.id === ""){
      let id = parseInt(this.getId()) + 1;
      userAdd.id = id+"";
      axios.post("users", userAdd)
        .then (
          res =>  {console.log(res); 
          this.getUsers();
          }
        );
    }else {
      axios.put("users/"+userAdd.id, userAdd)
        .then (
          res =>  {console.log(res); 
          this.getUsers();
          }
        ).catch (error => 
            {
              console.log("error", error);
            }
          );      
    }
    //this.state.db.collection("user").doc(userAdd.id).set(userAdd); 
    
    this.getUsers();
    let user= {id: "", name: "", username: "", email: ""};
    this.setState({user})

  } 

  render() {
    console.log("render ", this.state.users);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsers() }
          </tbody>
        </Table>
        <UserForm user={this.state.user} onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
