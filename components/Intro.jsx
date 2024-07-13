import React from 'react'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Intro = (props) => {
  return (
    <div variants={Fadein("down" , 0.5)} initial="hidden" animate="visible" viewport={{once: false , amount: 0.5}} className='w-full flex flex-col items-center gap-2'>
        <span className='introtxt text-base text-primary text-center uppercase'>{props.title}</span>
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>{props.text}</h1>
        <p className='text-gray-500 text-lg w-[100%] lg:w-[50%] text-center'>{props.subtext}</p>
    </div>
  )
}

export default Intro