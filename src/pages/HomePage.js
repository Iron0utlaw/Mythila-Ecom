import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
import {motion} from  'framer-motion';
const HomePage = () => {
  return <motion.main
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}>
   <Hero></Hero>
   <FeaturedProducts></FeaturedProducts>
   <Services></Services>
   <Contact></Contact>
  </motion.main>
}

export default HomePage
