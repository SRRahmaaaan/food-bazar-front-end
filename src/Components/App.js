import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddProduct from './Admin/AddProduct'
import Admin from './Admin/Admin'
import Home from "./Home/Home"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/addProduct" component={AddProduct} />
      </Switch>
    </Router>
  )
}

export default App
