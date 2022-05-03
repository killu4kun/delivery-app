import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./context/Provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Route path="/">
          <Login />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
