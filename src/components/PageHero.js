import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title,product}) => {
  return <Wrapper className='ok'>
    <div className='section-center'>
      <h3>
        <Link to='/'>Home</Link>{product && <Link to='/products'>/Products</Link>}
        {product && <Link to="/products"></Link>}/{title}

      </h3>
    </div>

  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 15px !important ;
  color: var(--clr-primary-1);

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
 
`

export default PageHero
