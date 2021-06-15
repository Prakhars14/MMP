import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register"
import Content from "./Content"


function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route path="/Home">
        <Home />
        <Content />
        </Route>
        <Route path="/">
        <Register  />
        
        </Route>
      </Switch>
    </div>
    </Router>
    )
    
}

export default App;
