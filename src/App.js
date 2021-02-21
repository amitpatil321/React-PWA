import React, { useEffect } from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import firebase from "./firebase";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import Details from "./components/Details/Details";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // useEffect(() => {
  //   const message = firebase.messaging();
  //   message
  //     .requestPermission()
  //     .then(() => {
  //       return message.getToken();
  //     })
  //     .then((data) => {
  //       console.log("Token:", data);
  //     })
  //     .catch((err) => {
  //       console.log(err, "Notification permission blocked!");
  //     });
  // });

  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">My PWA</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          {/* <Nav.Link><Link to="">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link> */}
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
