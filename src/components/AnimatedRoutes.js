import React from 'react'
import {Home,Products,SingleProduct,Error,About,Cart,Checkout,PrivateRoute,AuthWrapper} from '../pages' 
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AuthWrapper>
    <AnimatePresence>
        <Switch location={location} key={location.pathname}>
        <Route exact path='/'> <Home/> </Route>
        <Route exact path='/about'> <About/> </Route>
        <Route exact path='/cart'> <Cart/> </Route>
        <PrivateRoute exact path='/checkout'> <Checkout/> </PrivateRoute>
        <Route exact path='/products'> <Products/> </Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}/> 
        <Route exact path='*'> <Error/> </Route>
      </Switch>
    </AnimatePresence>
    </AuthWrapper>
  )
}

export default AnimatedRoutes