import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
