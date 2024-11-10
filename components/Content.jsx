import React from 'react'
import Fadein from '@/lib/Variants'
import { motion } from 'framer-motion'
const Content = () => {
  return (
    <motion.div variants={Fadein("up", 0.5)} initial="hidden" animate={"visible"} viewport={{once: false , amount: 0.5}} className='w-full flex items-center justify-center flex-col gap-5 min-h-[70vh]'>
        <span className='heading text-3xl text-[#fca311]'>Delicious Food</span>
        <h1 className='text-3xl lg:text-8xl font-bold w-[70%] text-center text-primary'>Taste the Creativity and Experience</h1>
        <p className='text-secondary/50 w-[60%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='btn_menu bg-transparent text-primary border-[1px] border-primary p-3 rounded-lg'>Get Started</button>
    </motion.div>
  )
}

export default Content