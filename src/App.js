import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Navbar, Sidebar, Footer, Loading } from './components'
import styled from 'styled-components'
import { useEffect,useState } from 'react'

import AnimatedRoutes from './components/AnimatedRoutes'
import InitialLoader from './components/IntialLoader'
import { useUserContext } from './context/user_context'


function App() {
  
  const [flag,setFlag]=useState(false);
  const {myUser}=useUserContext();
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[])

  
  return (
 
 


  
     <div>
     <Router>
 
       <Navbar/>
       <Sidebar/>
       <AnimatedRoutes/>
       <Footer/>
     </Router>
   


 
  
  </div>
  )
}

export default App
