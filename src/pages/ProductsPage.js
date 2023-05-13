import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const ProductsPage = () => {
  
  return <motion.main
  initial={{ width: "0vw", x: "100vw" }}
      animate={{ width: "100vw", x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
  >
  <main>
    <PageHero title="Products"></PageHero>
    <Wrapper className='page'>
      <div className='section-center products'>
        <Filters/>
        <div>
          <Sort/>
          <ProductList/>
        </div>
      </div>
    </Wrapper>
  </main>
  </motion.main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
