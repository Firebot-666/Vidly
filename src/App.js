import "./App.css";
import Movies from "./components/movie";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
