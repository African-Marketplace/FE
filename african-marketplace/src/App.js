import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from './data'

import Login from "./components/login";
import SignUp from "./components/signup";
import PrivateRoute from "./components/PrivateRoute";
import CatRender from "./CatRender";
import CategoryPage from './CategoryPage'

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </div>
      <Switch>
        <Route path='/itemlist/:catName' render={() => {
          return <CategoryPage category={data} />
        }} />
        <PrivateRoute exact path="/itemlist" component={CatRender} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;