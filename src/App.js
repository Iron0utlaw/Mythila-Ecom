import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Navbar, Sidebar, Footer, Loading } from './components'
import styled from 'styled-components'
import { useEffect,useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import AnimatedRoutes from './components/AnimatedRoutes'
import InitialLoader from './components/IntialLoader'
import { useUserContext } from './context/user_context'
import logom from './assets/logom.png'
import Avatar from './assets/Avatar.jpeg';



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
       <FloatingWhatsApp phoneNumber='9811825574' accountName='Mythila' avatar={logom} statusMessage="We'll reply as soon as we can"/>

       <Footer/>
     </Router>
   


 
  
  </div>
  )
}

export default App
