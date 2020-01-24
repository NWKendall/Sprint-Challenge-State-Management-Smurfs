import React, { Component } from "react";
import "./App.css";
import SmurfList from "../components/smurflist/SmurfList";
import NewSmurf from "../components/newsmurf/NewSmurf";
import Header from "./header/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
