import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class UserForm extends Component {
  constructor({ user: { id, name, username, email } }) {
    super();
    //let  {user } = this.props;

    // let {id, name, username, email} = user;

    this.state = {
      id,
      name,
      username,
      email,
    };
    //this.nameRef =  React.createRef();
  }

  static getDerivedStateFromProps (props, state){
     if(props.user.id !== state.id){
      let {id, name, username, email} = props.user;
      return {
        id,
        name,
        username,
        email,
      };
     }

     return null;
  }

  componentDidMount() {
    //console.log(this.props.user);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.nameRef.current.value);
    //console.log("HandleSubmit");
    //id = Math.random()*9999;

    let user =  {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email, 
      id: this.state.id
    }
    
    this.props.onSubmit(user);

    this.setState({
      name: "",
      username: "",
      email: "",
      id: ""     
    })

  };

  render() {
    console.log(this.state);

    return (
      <div>
        <h3>Agregar Usuario</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Smith"
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"

            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="john.smith" 
              value={this.state.username}
              onChange={this.handleInputChange} 
              name="username"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
