import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Products from "./pages/Products";
import Register from "./pages/Register";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={PrivateRoute}/>
          <Route path='/customer/products' component={Products}/>
          <Route path="/register" component={ Register }/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
