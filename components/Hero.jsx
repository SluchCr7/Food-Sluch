'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const images = [
    '/assets/images/hero-slider-1.jpg',
    '/assets/images/hero-slider-2.jpg',
    '/assets/images/hero-slider-3.jpg'
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black' id='Home'>
      {/* Background Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentImage]}
            alt="Hero Background"
            fill
            className='object-cover opacity-60'
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className='relative z-10 w-full h-full flex flex-col'>
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary font-serif italic text-2xl md:text-3xl mb-4"
          >
            Experience the Extraordinary
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight"
          >
            Sluch <span className="text-primary">Restaurant</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 font-light tracking-wide"
          >
            A symphony of flavors, crafted with passion and served with elegance. <br className="hidden md:block" /> Welcome to the finest dining experience in town.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/menu" className="px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 rounded-sm">
              View A La Carte
            </Link>
            <Link href="/reservation" className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300 rounded-sm bg-black/20 backdrop-blur-sm">
              Book a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero