import React from 'react'
import Image from 'next/image'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import { motion , AnimatePresence} from 'framer-motion'
const Header = () => {
  const [header, setheader] = React.useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setheader(true)
    } else {
      setheader(false)
    }
  })
  return (
    <AnimatePresence mode="wait">
    <motion.div initial={{top: "-100%"}} animate={{top: "0"}} transition={{duration: 2 , delay : 0.5}} className={`flex items-center justify-between w-full p-6 z-[1000] ${header ? 'bg-accent fixed top-0' : 'bg-transparent'}`}>
          {/* Logo */}
        <div className='Logo'>
            <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100}  className='w-full'/>
        </div>
        {/* Navigation */}
        <div className='hidden xl:flex'>
            <Nav />
        </div>
          {/* Mobile Nav */}
        <div className='xl:hidden'>
            <MobileNav />
        </div>
        {/* Get Started Button */}
        <div className='hidden xl:flex items-center gap-4'>
          <button className='bg-accent-ColorT text-white w-fit flex items-center justify-center text-center rounded-[5px] py-3 px-6 text-xs'>
            Book a Table
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Header