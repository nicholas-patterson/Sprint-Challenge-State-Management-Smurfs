import React, { Component } from "react";
import SmurfsData from "./SmurfsData";
import AddSmurfToDB from "./AddSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsData />
        <AddSmurfToDB />
      </div>
    );
  }
}

export default App;
