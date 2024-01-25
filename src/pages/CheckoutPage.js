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
  const amount=cart.total_amount*100;
  const currency="INR";
  const receiptId="qwsaq1";

  const paymentHandler=async(e)=>{
    const Names=cart.cart.map((item)=>{return item.name});
    const response=await fetch("http://localhost:5000/order",{
      method:"POST", 
      body:JSON.stringify({
        amount,
        currency,
        receipt:receiptId
      }),
      
      headers:{
        "Content-Type":"application/json",
      }
    })

    const order=await response.json();
    console.log(order);
    var options = {
      "key": "rzp_test_QPqYhmmslud9gl", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "MYTHILA",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "RZF",
          "Products":JSON.stringify(Names),
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  rzp1.open();
    e.preventDefault();
  }
    
  return <motion.main>
    <PageHero title='checkout'></PageHero>
    <Wrapper className='page'>
      <h1>Checkout here</h1>
      <button onClick={paymentHandler}>Pay</button>
    </Wrapper>
  </motion.main>
}
const Wrapper = styled.div``
export default CheckoutPage
