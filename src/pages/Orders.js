import React, { useEffect } from 'react'
import { useSupabase } from '../context/SupabaseContext'
import { useAuth0 } from '@auth0/auth0-react';
import SingleOrder from '../components/SingleOrder';

function Orders() {
    const { fetchUserProducts,orderLoading,userProduct}=useSupabase();
    var temp=[]
 
 
      
  const {user}=useAuth0();
  console.log(user);
     useEffect(()=>{
        fetchUserProducts(user);
       
    

    },[user])
    if(orderLoading){
        return <h1>Loading... </h1>
    }

    console.log(userProduct);
    console.log(temp);
  return (
    <div className='order'>
       {userProduct.map((item)=>{
        return item.Orders.product.map((item1)=>{
            
            return <SingleOrder item1={item1}></SingleOrder>
        })
       })}
    </div>
  )
}

export default Orders