import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";



import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

