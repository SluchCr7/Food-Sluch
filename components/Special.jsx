import React from 'react'
import Intro from './Intro'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Special = () => {
  return (
    <div className='special w-full min-h-[90vh] py-[5rem] bg-accent-hover z-[999] relative'> 
        <div className='container mx-auto'> 
            <div className='intro flex flex-col items-center text-center w-full gap-3'>
                <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col w-[100%] items-center gap-7 xl:flex-row xl:gap-16'>
                    <div className='flex flex-col items-center w-[100%] lg:w-[50%] gap-5 xl:items-start'>
                        <span className='text-3xl text-[#fca311]'>Special Offer</span>
                        <h1 className='text-5xl lg:text-6xl font-bold w-[90%] text-primary text-center lg:text-left'>Taste the Salmon Sushi here </h1>
                        <p className='text-secondary/50 w-[70%] text-center xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='Price flex flex-row items-center gap-5'>
                            <span className='old text-white line-through text-2xl'>$100.00</span>
                            <span className='new text-primary text-2xl'>$80.00</span>
                        </div>
                        <button className='btn_menu bg-transparent text-primary border-[1px] border-primary p-3 w-[70%] lg:w-[40%] rounded-lg'>Buy Now</button>
                    </div>
                    <div className='relative Image w-[100%] lg:w-[50%] z-10'>
                        <Image src="/assets/images/recently-salmon-sushi.png" alt="special" width={500} height={500} className='relative w-[100%] rounded-lg' />
                    </div>
                </motion.div>
                <motion.div variants={Fadein("up" , 1)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-center gap-6 py-9'>
                    <div className='flex flex-col items-center gap-3'>
                        <span className='text-sm text-[#fff] uppercase tracking-[2px]'>Book a table</span>
                        <h1 className='text-4xl font-bold text-primary'>+ 20 155 0662 103</h1>
                    </div>
                    <button className='btn_menu bg-transparent text-primary border-[1px] border-primary p-3 w-[70%] lg:w-[40%] rounded-lg'>Read More</button>
                </motion.div>
            </div>
        </div>
        <div className='Image absolute top-0 right-0 z-[-1]'>
            <Image src="/assets/images/shape-6.png" alt="map" width={500} height={500} className='relative w-[100%] h-[100%]'/>
        </div>
    </div>
  )
}

export default Special