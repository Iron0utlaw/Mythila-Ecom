import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url, single_product_url } from '../utils/constants'
import cat from "../utils/cat";
import data from '../data-js/single-product-data';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { useSupabase } from './SupabaseContext';

const initialState = {
  isSidebarOpen:false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading:false,
  single_product_error:false,
  single_product:{},


}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState);
  const {tableData,loading}= useSupabase()
  const openSidebar=()=>{
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSidebar=()=>{
    dispatch({type: SIDEBAR_CLOSE})
  }
    useEffect(() => {
    if (loading) {
      dispatch({ type: GET_PRODUCTS_BEGIN });
    } else if (tableData.length > 0) {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: tableData });
    } else if (!loading && tableData.length === 0) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }, [loading, tableData]);

  const fetchProducts = () =>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    // try {
    //   // const response = await axios.get(url)
    //   // const products = response.data
    //   const products=tableData;
    //   // const products = cat;
    

     
    //   dispatch({type:GET_PRODUCTS_SUCCESS, payload: products})
    // } catch (error) {
    //   dispatch({type:GET_PRODUCTS_ERROR})
    // }
     dispatch({ type: GET_PRODUCTS_BEGIN });

  if (!tableData || tableData.length === 0) {
    // tableData not ready yet
    return;
  }

  dispatch({ type: GET_PRODUCTS_SUCCESS, payload: tableData });
  }
  
  // const fetchSingleProduct=async(url)=>{
  //   dispatch({type:GET_SINGLE_PRODUCT_BEGIN});
  //   try{ 
  //   const response=await axios.get(url);
  //   const singleProduct=response.data;
  //   dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct});
  //   }
  //   catch(e){
  //     dispatch({type:GET_SINGLE_PRODUCT_ERROR});
  //   }
  // }
   

  const fetchSingleProduct=(id)=>{
    dispatch({type:GET_SINGLE_PRODUCT_BEGIN});
    // try{
    //   const response=await axios.get(url);
    //   const singleProduct=response.data;
    //   dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct});

    //     }
    // catch(e){
    //   dispatch({type:GET_SINGLE_PRODUCT_ERROR});

    // }


  if (tableData.length === 0) {
    // tableData not ready, wait
    return;
  }

  const singleProduct = tableData.find(item => item.id === id);
  dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
   

  }

  useEffect(() =>{
    fetchProducts();
  },[])

  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,fetchSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
