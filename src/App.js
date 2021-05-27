import { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from "./components/Header";
//import UserList from "./pages/UserList";
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './config/routes';
import NavBar from  './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
