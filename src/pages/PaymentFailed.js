import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PaymentFailed = () => {
  return <Wrapper className='page-100'>
    <section>
      <h1>404</h1>
      <h3>Sorry, the payment could not be completed</h3>
      <Link to="/" className='btn'>Back Home</Link>
          </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:15px;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default PaymentFailed;
