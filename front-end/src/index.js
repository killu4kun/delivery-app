import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { ProductsProvider } from "./context/ProductsContext.js";
import { Provider } from "./context/Provider";
import { CheckoutProvider } from "./context/CheckoutContext";
import Admin from "./pages/Admin";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <Route exact path="/" component={ PrivateRoute }/> */}
        <Redirect exact from="/" to="/login" />
        <Route path="/login">
          <Provider>
            <Login />
          </Provider>
        </Route>
        <Route path='/admin/manage' component={Admin} />
        <Route path="/register" component={ Register } />
        <Route path='/customer/orders/:id' component={ OrderDetails } />
        <Route path="/customer/orders" component={ Orders } />
        <ProductsProvider>
          <CheckoutProvider>
            <Route path='/customer/products' component={ Products } />
            <Route path='/customer/checkout' component={ Checkout } />
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
