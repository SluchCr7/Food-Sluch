'use client'
import React from 'react'
import TopHead from './TopHead'
import Header from './Header'
import Content from './Content'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
import { Carousel } from 'react-responsive-carousel'
const Hero = () => {
  const ImageSlider = [
    {
      id: 1,
      img: '/assets/images/hero-slider-1.jpg'
    },
    {
      id: 2,
      img: '/assets/images/hero-slider-2.jpg'
    },
    {
      id: 3,
      img: '/assets/images/hero-slider-3.jpg'
    },
  ]
  return (
    <div className='hero w-full h-[100vh]' id='Home'>
        <Image src="/assets/images/hero-slider-1.jpg" alt="hero" width={700} height={700} quality={100} className='img_slider w-[100%] h-[102vh] object-cover z-[-1] absolute top-0 left-0 right-0' />
        
      <div className='w-full h-full flex flex-col items-center absolute top-0'>
          <TopHead />
          <Header />
          <Content/>
        </div>
    </div>
  )
}

export default Hero