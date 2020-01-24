import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import NewSmurf from "./NewSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <NewSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
