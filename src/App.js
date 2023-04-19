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
import { VscTriangleUp } from "react-icons/vsc";



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
  const [showbutton,setShowButton]=useState(false);
  const handleClick=()=>{
    window.scrollTo({top:0,behavior:'smooth'});

  }
  useEffect(()=>{
    const handleScrollButtonVisibility=()=>{
      window.pageYOffset>300?setShowButton(true):setShowButton(false);
    };
    window.addEventListener('scroll',handleScrollButtonVisibility);
    return ()=>{
      window.removeEventListener('scroll',handleScrollButtonVisibility);
    }

  },[])

  
  return (
 
 


  
     <div>
     <Router>
 
       <Navbar/>
       <Sidebar/>
       <AnimatedRoutes/>
       <FloatingWhatsApp phoneNumber='9811825574' accountName='Mythila'  darkMode="true" avatar={logom} statusMessage="We'll reply as soon as we can"/>
    {showbutton &&<VscTriangleUp className='up' onClick={handleClick} />}
       <Footer/>
     </Router>
   


 
  
  </div>
  )
}

export default App
