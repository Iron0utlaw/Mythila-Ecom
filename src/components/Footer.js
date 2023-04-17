import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>
      &copy; {new Date().getFullYear()}
      <span> Mythila</span>
    </h5>
    <h5>All rights reserved 
   

    </h5>
    &nbsp; &nbsp;
    <SocialIcon url='https://www.instagram.com/mythila2021/' target='__blank' fgColor='white'></SocialIcon>
      &nbsp; &nbsp;
      <SocialIcon url='https://www.facebook.com/mythila2021/' fgColor='white'></SocialIcon>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
