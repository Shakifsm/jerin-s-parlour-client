import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createContext } from 'react';
import Home from "./components/Home/Home/Home";
import AddService from "./components/Dashboard/AddService/AddService";
import AddTestimonial from "./components/Dashboard/AddTestimonial/AddTestimonial";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Switch>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  
                  <Route path="/addservice">
                      <AddService></AddService>
                  </Route>
                  <Route path="/addTestimonial">
                      <AddTestimonial></AddTestimonial>
                  </Route>
                  <Route path="/sidebar">
                      <Sidebar></Sidebar>
                  </Route>
              </Switch>
          </Router>
    </UserContext.Provider>
  );
}

export default App;
