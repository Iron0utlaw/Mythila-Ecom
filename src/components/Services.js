import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Services = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
},[]);

  return <Wrapper>
    <div className='section-center'>
      <article className='header'>
        <h3>custom paintings <br/>built only for you</h3>
        <p>Art is a mode of expression for human thought. In the Indian context, art emerged when humans painted on mud surfaces through twigs, fingers or bone points. These methods also define the origin of Madhubani.
        <br></br>MYTHILA IS IMMENSELY PROUD TO PRESENT MADHUBANI TO YOU!</p>
      </article>
      <div className='services-center' data-aos="flip-up">
        {services.map((service)=>{
           return <article key={service.id} className="service">
            <span className='icon'>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
           </article>

        })}
      </div>
    </div>
  </Wrapper>

}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
