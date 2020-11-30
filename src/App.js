import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Works  from "./pages/Works"
import Contact  from "./pages/Contact"
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/home" exact>
          <Homepage />
        </Route>

        <Route path="/About" exact>
          <About />
        </Route>
        
        <Route path="/Works" exact>
          <Works />
        </Route>
        
        <Route path="/Contact" exact>
          <Contact />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
