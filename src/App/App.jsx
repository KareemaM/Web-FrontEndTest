import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router";
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Product from '../views/Product'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path = "/login" component = { Login }></Route>
          <Route path = "/signup" component = { SignUp }></Route>
          <Route path = "/products" component = { Product }></Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }  
}

export default App;
