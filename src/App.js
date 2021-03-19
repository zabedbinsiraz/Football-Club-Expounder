import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetail from "./components/TeamDetail/TeamDetail";

const App = () => {
  return (
    <Router>
      <div>
       <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
         </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;