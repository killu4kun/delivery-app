import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { ProductsProvider } from "./context/ProductsContext.js";
import { Provider } from "./context/Provider";
import { CheckoutProvider } from "./context/CheckoutContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Provider>
            <Login />
          </Provider>
        </Route>
        <Route exact path="/" component={ PrivateRoute }/>
        <ProductsProvider>
          <CheckoutProvider>
            <Route path='/customer/products' component={ Products } />
          </CheckoutProvider>
        </ProductsProvider>
        <Route path="/register" component={ Register }/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
