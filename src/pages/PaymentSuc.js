import React from 'react'
import styled from 'styled-components'
function PaymentSuc() {
  return (
    <Wrapper className='page-100'>
    <h2>Payment done Successfully</h2>
  </Wrapper>
  )
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
export default PaymentSuc