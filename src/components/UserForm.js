import React, { Component } from "react";
import  {Form, Button} from "react-bootstrap";

export default class UserForm extends Component {
 constructor(){
     super();
     this.state = {};
 }

 handleSubmit(e){
     e.preventDefault();
     console.log(this.refs.name.value);
     //console.log("HandleSubmit");
 }
  
  render() {
    return (
      <div>
        <h3>Agregar Usuario</h3>
        <Form onSubmit= { this.handleSubmit.bind(this) }>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Smith" ref="name"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref="email"/>
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="john.smith" ref="username"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
