import React from "react"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Launches } from './Components/Launches';
import { Launch } from "./Components/Launch";

function App() {
  return (
    <div className="container">
      <h1 style={{ width: 500, display: "block", margin: "auto" }} >SpaceX Launches</h1>
      <Router>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />

      </Router>
    </div>
  );
}

export default App;
