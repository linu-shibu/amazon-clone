import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SecHeader from "./SecHeader.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Jqa9DSEA7QNnifDO1UBREUfbfpmAA2D1CW0RBfuzwj7vgQfCC8hhsGaecBz4EUMEHNCgZZU1T0sNeQNvH9GvKkY00YXcHWx1v"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS>>> ", authUser);
      if (authUser) {
        // Usewr logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        // User not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <SecHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
