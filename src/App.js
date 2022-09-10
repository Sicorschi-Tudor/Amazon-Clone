import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Functions/StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

useEffect(() => {

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if(authUser) {
      dispatch({
        type: 'SET_USER',
        user:authUser
      })
      
    }else{
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
