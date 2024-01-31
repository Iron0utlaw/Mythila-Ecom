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
      "https://dxpplwalsoawnmamajxq.supabase.co",
      process.env.REACT_APP_SUPABASE_KEY
    );
    const Products="Products";


   

    const [loading,setLoading]=useState(true);
    const [tableData,setTableData]=useState([]);

    const [orderLoading,setOrderLoading]=useState(true);
    const [userProduct,setUserProduct]=useState({});

 
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
    useEffect(() => {
        const fetchTableData = async () => {
          try {
            setLoading(true);
            const { data, error } = await supabase
              .from(Products)
              .select("*")
              .order("id");
    
            if (error) {
              console.error("Error fetching data:", error.message);
            } else {
              setTableData(data || []);
              setLoading(false);
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
        };
    
        fetchTableData();
      }, []);
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