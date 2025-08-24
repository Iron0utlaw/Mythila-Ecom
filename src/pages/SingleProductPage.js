import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import { BsArrowLeft } from 'react-icons/bs';

const SingleProductPage = () => {
  const {id}=useParams();

  const history=useHistory();
  const {single_product_loading:loading,single_product_error:error,single_product:product,fetchSingleProduct}=useProductsContext();
 useEffect(()=>{
  fetchSingleProduct(id);

 },[id]);
 useEffect(()=>{
  if(error){
    setTimeout(()=>{
      history.push('/')
    },3000);
  }
 },[error])
 if(loading){
  return <Loading/>
 }
 if(error){
  return <Error/>
 }
 const {name,price,description,stock,stars,reviews,id:sku,company,images}=product;
 console.log(product)

 console.log(images);
 
  return (
  
  
  <Wrapper>
    <PageHero title={name} product></PageHero>
    <div className="section section-center">
      <Link to="/products" className='btn'><BsArrowLeft/> back to products</Link>
      <div className='product-center'>
        <ProductImages images={images}/>
        <section className='content'>
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews}/>
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          <p className='info'>
            <span>Available :</span>
            {stock>0?'In stock':'out of stock'}

          </p>
          <p className='info'>
            <span>SKU:</span>
            {sku}
          </p>
          <p className='info'>
            <span>Brand: </span>
            {company}
          </p>
          <hr></hr>
          {stock>0 && <AddToCart product={product}/>}
          
        </section>
      </div>
    </div>
  </Wrapper>
  )
}
const Wrapper = styled.main`
  .product-center {
    display: grid !important;
    gap: 4rem !important;
    margin-top: 2rem !important;
  }
  .price {
    color: var(--clr-primary-5) !important;
  }
  .desc {
    line-height: 2 !important;
    max-width: 45em !important;
  }
  .info {
    text-transform: capitalize !important;
    width: 300px !important;
    display: grid !important;
    grid-template-columns: 125px 1fr !important;
    span {
      font-weight: 700 !important;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr !important;
      align-items: center !important;
    }
    .price {
      font-size: 1.25rem !important;
    }
  }
`

export default SingleProductPage;