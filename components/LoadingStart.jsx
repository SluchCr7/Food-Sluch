'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { preLoaderAnim } from './index'
import { useEffect } from 'react'
const LoadingStart = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className={`preloader bg-primary flex flex-col items-center justify-center gap-4 fixed top-0 left-0 right-0 bottom-0 z-10`}>
        <motion.div initial={{x : -100}} animate={{x : 0}} transition={{duration : 0.5}} exit={{x : -100}} className='texts-container flex flex-col items-center justify-center'>
          <div className='circle'></div>
          <div className="loading_text text-secondary font-bold tracking-[19px] text-3xl">Loading...</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingStart