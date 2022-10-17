import React from "react";

import Header from "./Components/Header";
import Game from "./Components/Game"
import Rules from "./Components/Rules";


//CSS
import './App.css';
import "./CSS/style.css"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <Header />
      </div>
      <br />
       {/* How to Play */}
       <div><Rules /></div>
       <br />

      {/* Game */}
      <div className="appBody" ><Game /></div>
    </div>
  );
}

export default App;
