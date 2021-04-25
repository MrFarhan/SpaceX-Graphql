import React from "react"
import './App.css';
import { Launches } from './Components/Launches';

function App() {
  return (
    <div className="App">
      <h1 style={{ width: 500, display: "block", margin: "auto" }} >SpaceX Launches</h1>
      <Launches />
    </div>
  );
}

export default App;
