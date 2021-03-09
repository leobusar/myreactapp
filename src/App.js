import { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from "./components/Header";
import UserList from "./pages/UserList";

class App extends Component {
  render() {
    return (
      <div className="container">
        
        <UserList />
      </div>
    );
  }
}

export default App;
