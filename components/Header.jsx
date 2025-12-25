'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className='relative w-16 h-16'>
            <Image
              src="/assets/images/logo.svg"
              alt="Sluch Logo"
              fill
              className='object-contain'
            />
          </Link>

          {/* Navigation */}
          <div className='hidden xl:flex'>
            <Nav />
          </div>

          {/* Mobile Nav */}
          <div className='xl:hidden'>
            <MobileNav />
          </div>

          {/* CTA Button */}
          <div className='hidden xl:flex items-center gap-4'>
            <Link
              href="/reservation"
              className={`
                        text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-sm transition-all duration-300 border
                        ${scrolled
                  ? 'bg-primary text-black border-primary hover:bg-white'
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                }
                    `}
            >
              Book a Table
            </Link>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}

export default Header