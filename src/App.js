import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'

import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return <div>
    <Router>
      <Navbar/>
      <Sidebar/>
      <AnimatedRoutes/>
      <Footer/>
    </Router>
  </div>
}

export default App
