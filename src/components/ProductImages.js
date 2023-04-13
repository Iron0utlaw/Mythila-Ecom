import React, { useState } from 'react'
import styled from 'styled-components'
import {cat} from '../utils/cat';
import { useEffect } from 'react';
const ProductImages = ({images=[{url:''}]}) => {
  

 
  const [temp,setTemp]=useState(images);
  console.log(temp);
  const[mainnn,setMain]=useState(images[0]);

  useEffect(()=>{
    if(images[0].url!==''){
      setMain(images[0]);
    }

  },[images[0].url]);
  

  
  
  
  


  
  
  return <Wrapper>
    <img src={mainnn.url} className='main' alt=''></img>
    <div className='gallery'>
    {images.map((image,index)=>{
      return <img src={image.url} alt={image.filename} key={index} className={`${image.url===mainnn.url?'active':null}`} onClick={()=>{
        setMain(images[index]);
        
      }}/>
    })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
