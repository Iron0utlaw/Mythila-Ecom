import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import { motion } from 'framer-motion'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  
  // console.log(process.env.REACT_APP_SUPABASE_KEY);
  const cart=useCartContext();
  console.log(cart);
  return <motion.main>
    <PageHero title='checkout'></PageHero>
    <Wrapper className='page'>
      <h1>Checkout here</h1>
    </Wrapper>
  </motion.main>
}
const Wrapper = styled.div``
export default CheckoutPage
