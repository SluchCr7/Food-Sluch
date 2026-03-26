'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

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
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Sluch"
                                fill
                                className='object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity'
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-2xl md:text-3xl font-display text-white tracking-widest uppercase'>Sluch</span>
                            <span className="text-[8px] tracking-[0.6em] text-primary uppercase ml-1">Culinary Art</span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className='hidden xl:flex items-center gap-16'>
                        <Nav />
                        <Link href="/reservation" className="group relative overflow-hidden px-8 py-3 border border-primary/40 text-primary font-bold uppercase tracking-[0.3em] text-[9px] transition-all duration-500 hover:bg-primary hover:text-dark">
                            <span className="relative z-10">Reserve</span>
                        </Link>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className='xl:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </motion.header>
        </AnimatePresence>
    )
}

export default Header