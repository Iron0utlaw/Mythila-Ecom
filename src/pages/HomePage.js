import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { motion } from 'framer-motion'
const HomePage = () => {
  return <motion.main
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  >
   <h3>HomePage</h3>
  </motion.main>
}

export default HomePage
