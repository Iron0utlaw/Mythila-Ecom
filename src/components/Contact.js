import React from 'react'
import styled from 'styled-components'
import Typewriter from "typewriter-effect/dist/core";
import { useEffect,useRef } from 'react';

const Contact = () => {
  const partRef = useRef(null);
  const codeRef = useRef(null);
  useEffect(() => {
    var typewriter = new Typewriter(partRef.current, {
        strings: "2000+ ",
        cursor: "",
        autoStart: true,
        loop: true,
        delay: 250,
    });
    typewriter.pauseFor(300).start();
    var typewriter2 = new Typewriter(codeRef.current, {
        strings: "50+",
        cursor: "",
        autoStart: true,
        loop: true,
        delay: 250,
    });
    typewriter2.pauseFor(300).start();
}, []);

  return <Wrapper>
    <div className='section-center'>
      <div className='typewrap'>
    <div className='type'>
      <h1>Products Sold</h1>
      <div className='underline'></div>
      <span id="type-2" ref={codeRef}></span>
      
    </div>
    <div className='type'>
      <h1>Total Customers</h1>
      <div className='underline'></div>
      <span id="type-1" ref={partRef}></span>
    </div>
    </div>
      {/* <div className='content'>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
    
      </div> */}
    </div>
  </Wrapper>
}
const Wrapper = styled.section`

  padding: 5rem 0;
  h3 {
    text-transform: none;
    
  }
  .typewrap{
    display:flex;
   
    margin:0 auto;
    justify-content:space-around;
  }
 
 
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
