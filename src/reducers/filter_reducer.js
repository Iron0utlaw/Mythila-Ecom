import { act } from 'react-dom/test-utils';
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  
  if(action.type===LOAD_PRODUCTS){
    let maxPrice=action.payload.map((p)=>p.price);
    maxPrice=Math.max(...maxPrice,900);
    return {...state,all_products:[...action.payload],filtered_products:[...action.payload],filters:{...state.filters,max_price:maxPrice},};
  }
  if (action.type===SET_GRIDVIEW){
return {...state,grid_view:true}
  }
  if (action.type===SET_LISTVIEW){
    return {...state,grid_view:false}
      }
      if(action.type===UPDATE_SORT){
        return {...state,sort:action.payload};

      }
      if(action.type===SORT_PRODUCTS){
        const {sort,filtered_products}=state;
        let tempProducts=[...filtered_products];
        if(sort==='price-lowest'){
          console.log('price-lowest');

          tempProducts=tempProducts.sort((a,b)=>{
            if(a.price<b.price){
              return -1;
            }
            if(a.price>=b.price){
              return 1;
            }
          })
        }
        if(sort==='price-highest'){
          console.log('price-highest');
          tempProducts=tempProducts.sort((a,b)=>{
            if(a.price<b.price){
              return 1;
            }
            if(a.price>=b.price){
              return -1;
            }
          })

        }
        if(sort==='name-a'){
          console.log('name-a');
          tempProducts=tempProducts.sort((a,b)=>{
            return a.name.localeCompare(b.name);
          })

        }
        if(sort==='name-z'){
          console.log('name-z');
          tempProducts=tempProducts.sort((a,b)=>{
            return b.name.localeCompare(a.name);
          })


        }
        return {...state,filtered_products:tempProducts };
      }
      if(action.type===UPDATE_FILTERS){
        const {name,value}=action.payload;
      
        return {...state,filters:{...state.filters,[name]:value}};
      }
      if(action.type===FILTER_PRODUCTS){
        const {all_products} = state
        const {text,category,company,color,price,shipping}
        = state.filters

        let tempProducts = [...all_products];
        //filtering
        //text
        if(text){
          tempProducts = tempProducts.filter((product)=>{
            return product.name.startsWith(text) //toLowerCase ommitted
          })
        }
        //category
        if (category !== 'all'){
          tempProducts = tempProducts.filter(
            (product) => product.category === category
          )
        }
        //colors
        if(color !== 'all'){
          tempProducts = tempProducts.filter((product)=>{
            return product.colors.find((c)=> c === color)
          })
      }
      //price
      tempProducts = tempProducts.filter((product) => product.
      price <= price)
      //shipping
      if(shipping){
        tempProducts = tempProducts.filter((product) => product.
        shipping === true)
      }
        return {...state, filtered_products:tempProducts}
      }
      if(action.type === CLEAR_FILTERS){
        return {...state,
          filters:{
            ...state.filters,
            text:'',
            category:'all',
            company:'all',
            color:'all',
            price: state.filters.max_price,
            shipping:false,
        
          },
        }
      }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
