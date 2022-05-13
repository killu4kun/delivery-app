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
import Admin from "./pages/Admin";
import Seller from "./pages/Seller";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={PrivateRoute} />
        <Route path="/login">
          <Provider>
            <Login />
          </Provider>
        </Route>
        <Route path="/admin/manage" component={Admin} />
        <Route path="/register" component={Register} />
        <Route path="/seller/orders" component={Seller} />
        <ProductsProvider>
          <CheckoutProvider>
            <Route path="/customer/products" component={Products} />
          </CheckoutProvider>
        </ProductsProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
