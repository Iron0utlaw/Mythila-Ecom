import React from 'react'
import logo from '../assets/logom.png'
import styled from 'styled-components'
import './IntialLoader.css'


function InitialLoader() {
  return (
  <Wrapper className='loader-img'>
 <img src={logo} ></img>
      </Wrapper>
  )
}
const Wrapper=styled.div`
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;

`

export default InitialLoader

