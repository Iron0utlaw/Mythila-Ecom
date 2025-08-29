import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useUserContext } from "./user_context";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "./cart_context";
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid'

const SupabaseContext = createContext();
export const useSupabase = () => useContext(SupabaseContext);





export const SupabaseProvider = ({ children }) => {
    const supabase = createClient(
      "https://oxcjhpacnlqmkdmabxxr.supabase.co",
      process.env.REACT_APP_SUPABASE_KEY
    );
    const Products="Products";


   

    const [loading,setLoading]=useState(true);
    const [tableData,setTableData]=useState([]);

    const [orderLoading,setOrderLoading]=useState(true);
    const [userProduct,setUserProduct]=useState({});
    const [instruments, setInstruments] = useState([]);

 
    const updateUserProduct=async(user,cart)=>{
      
      try {
        const { data, error } = await supabase.from("User").insert([
          {
           id:uuid(),
           Email:user.email,
           Orders:{"product":cart.cart},
          

        
          },
        ]);
  
        if (error) {
          console.error("Error inserting data:", error);
        } else {
          console.log("Data inserted successfully:", data);
       
        }
      } catch (error) {
        console.error("Error processing form submission:", error.message);
      }

      // try {
      //   const { data, error } = await supabase.from("User").insert([
      //     {
      //     id: 1,
      //       created_at: new Date().toISOString(),
      //   Email:user.email,
      //   Orders:"orders",
      //     },
      //   ]);
  
      //   if (error) {
      //     console.error("Error inserting data:", error.message);
      //   } else {
      //     console.log("Data inserted successfully:", data);
      //   }
      // } catch (error) {
      //   console.error("Error processing form submission:", error.message);
      // }
    }
    const fetchUserProducts=async(user)=>{
      setOrderLoading(true);
      try {
        const { data, error } = await supabase
          .from("User")
          .select("*")
          .filter("Email", "eq", user.email);
  
        if (error) {
          console.error("Error fetching visits:", error.message);
        } else {
          setUserProduct(data);
          setOrderLoading(false);
        }
      } catch (error) {
        console.error("Error fetching visits:", error.message);
      }


    }
      async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }
    useEffect(() => {
   const fetchTableData = async () => {
  try {
    setLoading(true);
    const { data, error } = await supabase
      .from('products') // ✅ table name as string
      .select(`
        *,
        product_details (
          stock,
          reviews,
          stars,
          colors,
          images
        )
      `)
      .order('id', { ascending: true });
      

    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      setTableData(data || []);
    }
  } catch (error) {
    console.error('Unexpected error:', error.message);
  } finally {
    setLoading(false);
  }
};

    
        fetchTableData();
        // getInstruments();
      }, []);
      console.log("supabbse se instru", tableData);
    return (
        <SupabaseContext.Provider
          value={{
          loading,
          setLoading,
          tableData,
          updateUserProduct,
          fetchUserProducts,
          userProduct,
          orderLoading,
          }}
        >
          {children}
        </SupabaseContext.Provider>
      );
    };  