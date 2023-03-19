import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/Artboard.png'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return <motion.main
  initial={{ width: "0vw", x: "100vw" }}
      animate={{ width: "100vw", x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
  >
    <PageHero  className="ok" title=" about"></PageHero>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk"></img>
      <article className='title'>
        <h2>our story</h2>
        <div className='underline'></div>
        <p>Bringing you closer to the culture of Madhubani, Mythila Art is brought to you by 1000+ skilled artisans. Our goal is to diversify the art form into a variety of thought-provoking issues without losing its true essence. By giving an opportunity to artisans who have lesser reach, we are driven to produce genuine masterpieces and committed to supporting all artists who contribute to bringing this art form around the world. Mythila themes differ depending on the function or the event that they are painted for. However, the central theme remains love and fertility. All deities of the hindu pantheon and the rural local traditions can be found in the art. The art of Mithila is unique, for here we can see a unique blend of comprehension, knowledge of Sanskrit and culture, vocabulary and iconography.</p>
      </article>
    </Wrapper>
  </motion.main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
    

  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

`
export default AboutPage
