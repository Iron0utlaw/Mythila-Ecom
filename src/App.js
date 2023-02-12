import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'

import {Home,Products,SingleProduct,Error,About,Cart,Checkout,PrivateRoute} from './pages'

function App() {
  return <div>
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route exact path='/about'> <About/> </Route>
        <Route exact path='/cart'> <Cart/> </Route>
        <Route exact path='/checkout'> <Checkout/> </Route>
        <Route exact path='/products'> <Products/> </Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}/> 
        <Route exact path='*'> <Error/> </Route>
      </Switch>
      <Footer/>
    </Router>
  </div>
}

export default App
