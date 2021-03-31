import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddProduct from './Admin/AddProduct'
import Admin from './Admin/Admin'
import AuthProvider from './Authentication/AuthContext'
import Login from './Authentication/Login'
import Checkout from './Checkout/Checkout'
import Home from "./Home/Home"
import Orders from './Orders/Orders'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/addProduct" component={AddProduct} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/checkout/:id" component={Checkout} />
            <PrivateRoute path="/orders" component={Orders} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App
