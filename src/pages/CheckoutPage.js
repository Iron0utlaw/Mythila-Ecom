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
import logo from '../assets/logom.png'


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
    firstName: "",
    lastName:"",
    email:"",
    contact:"", 
    address:"",
     city: '',
    state: '',
    zip: '',
    country: '',

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
    if (!formData.email || !formData.address || !formData.contact || !formData.city || !formData.zip || !formData.state || !formData.country || !formData.firstName || !formData.lastName) {
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
    const response=await fetch("/api/order",{
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
           customerName: formData.firstName+" "+formData.lastName,
  email: formData.email,
  address: formData.address,
  contact: formData.contact,
  items: cart.cart.map((item) => ({
    name: item.name,
    qty: item.amount,
  })),
  amount: cart.total_amount
        }
       const validateRes= await fetch("/api/order/validate",{
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
  <div className="checkout-container">
    <div className="form-wrapper">
      {!flag ? (
                  <form className="form-wrapper" onSubmit={handleSubmit}>

    {/* Name and Email side by side */}
    <div className="form-row">
      <div className="form-control">
        <label>Enter Your First Name</label>
     < input
            type='text'
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder='Your First Name'
          />
      </div>
            <div className="form-control">
        <label>Enter Your Last Name</label>
     < input
            type='text'
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='Your Last Name'
          />
      </div>

 
    </div>

    {/* Contact Number full width */}
    <div className='form-row'>
    <div className="form-control">
      <label>Contact Number</label>
              <input
            type='number'
            id="contact"
            name='contact'
            value={formData.contact}
            onChange={handleInputChange}
            placeholder='Your Contact Number'
          />
    </div>
     <div className="form-control">
        <label>Enter Your Email</label>
         <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Your Email'
          />
      </div>
    </div>

    {/* Address full width */}
    <div className="form-control">
      <label>Address</label>
               <textarea
            id="address"
            placeholder='Describe the item'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
          />
    </div>

    {/* City and State side by side */}
    <div className="form-row">
      <div className="form-control">
        <label>City</label>
        <input type="text" placeholder="City" id="city" name="city" value={formData.city} onChange={handleInputChange} />
      </div>
      <div className="form-control">
        <label>State</label>
        <input type="text" placeholder="State"  id="state" name="state" value={formData.state} onChange={handleInputChange}/>
      </div>
    </div>

    {/* Zip Code and Country side by side */}
    <div className="form-row">
      <div className="form-control">
        <label>Zip Code</label>
        <input type="text" placeholder="Zip Code" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} />
      </div>
      <div className="form-control">
        <label>Country</label>
        <input type="text" placeholder="Country" id="country" name="country" value={formData.country} onChange={handleInputChange} />
      </div>
    </div>

    {/* Submit button full width */}
    <button type="submit" className="submit">Submit</button>
  </form>
  
      ) : (
        <div className='paybut'>
          <button className='buttonpay' onClick={paymentHandler}>Pay {cart.total_amount}</button>
        </div>
      )}
    </div>

  </div>
</Wrapper>
  </motion.main>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  .checkoutheading {
    font-size: 2rem;
    font-weight: 700;
    color: #1e2a3a;
    margin-bottom: 1rem;
    text-align: center;
  }

  .checkout-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    height: calc(100vh - 150px); /* Fits on screen minus heading */
   

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
  }

  .form-wrapper {
    flex: 0 1 60%;
    background: #fff;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    width: 100%;
  }

  .form-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.8rem;

    .form-control {
      flex: 1;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .form-control {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }

    input,
    textarea {
      font-size: 0.9rem;
      padding: 0.6rem 0.8rem;
      border-radius: 6px;
      border: 1px solid #ccc;

      &:focus {
        border-color: #7b3f00;
        outline: none;
        box-shadow: 0 0 0 1px #7b3f00;
      }
    }

    textarea {
      resize: vertical;
      min-height: 70px;
    }
  }

  .submit {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.7rem 1rem;
    background-color: #7b3f00;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: #5c2d00;
    }
  }

  .image-wrapper {
    flex: 0 1 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;

    img {
      width: 100%;
      max-width: 220px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 992px) {
      margin-top: 1.5rem;
    }
  }
`;



export default CheckoutPage
