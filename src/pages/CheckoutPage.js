import React, { useState } from 'react'
import styled from 'styled-components'
import { Loading, PageHero, StripeCheckout } from '../components'
import { motion } from 'framer-motion'
// extra imports
import { useToast } from '@chakra-ui/react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import '../index.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react'
import { useSupabase } from '../context/SupabaseContext'

const CheckoutPage = () => {
  
  const {user}=useAuth0();
  console.log(user);
  const [loading, setLoading]= useState(false);
  // console.log(process.env.REACT_APP_SUPABASE_KEY);

  const cart=useCartContext();
  const history=useHistory();
  const {clearCart}=useCartContext();
  const {updateUserProduct,tableData}=useSupabase();

  console.log(cart);
  const amount=cart.total_amount*100;
  const currency="INR";
  const receiptId="qwsaq1";
  const [formData, setFormData] = useState({
    Name: "",
    email:"",
    contact:"", 
    address:"",

  });
  const [details,setDetails]=useState({});
  const [flag,setFlag]=useState(false);
  const [payment,setPayment]=useState(false);
  const [heading,setHeading]=useState("Enter Your Details");
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!formData.Name || !formData.email || !formData.address || !formData.contact) {
      toast.error("Please Fill All The Fields",{
        position: "bottom-right"
      });
      return 
    }
    if(!isValidEmail(formData.email)){
      toast.error("Please type a valid email",{
        position: "bottom-right"
      });
      return
    }
setDetails(formData);
setHeading("PAYMENT")
setFlag(true);
  }
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
    console.log(response);
   setLoading(true);
    const order=await response.json();
    console.log(order);
    var options = {
      "key": "rzp_test_muBRdgYxraKcNB", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "MYTHILA",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response){
        const body={
          ...response ,
           customerName: formData.Name,
  email: formData.email,
  address: formData.address,
  contact: formData.contact,
  items: cart.cart.map((item) => ({
    name: item.name,
    qty: item.amount,
  })),
  amount: cart.total_amount
        }
       const validateRes= await fetch("http://localhost:5000/order/validate",{
          method:"POST",
          body:JSON.stringify(body),
          headers:{
            "Content-Type":"application/json",
          }

        })
      
        const jsonRes=await validateRes.json();
        console.log(jsonRes);
        if(jsonRes.msg==='success'){
          setLoading(false);
          updateUserProduct(user,cart);
          clearCart();
        history.push('/paymentsuc');
         
        }
        
      },//
      "prefill": {
          "name": `${formData.Name}`,
          "email": `${formData.email}`,
          "contact": `${formData.contact}`,
      },
      "notes": {
          "address": `${formData.address}`,
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
  const handle=async()=>{
    await  updateUserProduct(user,cart);

  }
    console.log(tableData);
    if(loading){
      return <Loading/>
    }
  return <motion.main>
    <PageHero title='checkout'></PageHero>
    <Wrapper className='page w-[100%]'>
      <h1 className='checkoutheading'>{heading}</h1>
      {
        !flag?  <div className="flex" style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} className="form" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="form-control">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type='text'
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder='Your Name'
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Your Email'
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder='Describe the item'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control ">
          <label htmlFor="contact">Contact</label>
          <input
            type='number'
            id="contact"
            name='contact'
            value={formData.contact}
            onChange={handleInputChange}
            placeholder='Price of Item'
          />
        </div>
        <button type='submit' className='submit' onClick={handleSubmit}>Submit</button>
        <ToastContainer/>
      </form>
    </div>:
<div className='paybut'>
      <button className='buttonpay' onClick={paymentHandler} >Pay {cart.total_amount}</button>
      
      </div>
}
    </Wrapper>
  </motion.main>
}
const Wrapper = styled.div``
export default CheckoutPage
