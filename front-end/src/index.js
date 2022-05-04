import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={PrivateRoute}/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
