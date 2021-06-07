import "./styles/main.scss";
import React, { Component } from "react";
import Home from "./pages/Home/index";
import NavBar from "./components/NavBar/index";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="main-container">
        <NavBar />
        <Home />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
