import React from 'react'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Intro = (props) => {
  return (
    <div className='w-full flex flex-col items-center gap-4 mb-12'>
      <span className='introtxt text-sm md:text-base text-primary tracking-[0.2em] uppercase font-semibold'>{props.title}</span>
      <h1 className='text-4xl md:text-6xl font-serif font-bold text-center text-white capitalize leading-tight'>{props.text}</h1>
      <div className="w-24 h-1 bg-primary rounded-full my-2"></div>
      <p className='text-white/70 text-base md:text-lg w-[90%] md:w-[60%] lg:w-[50%] text-center font-light leading-relaxed'>{props.subtext}</p>
    </div>
  )
}

export default Intro