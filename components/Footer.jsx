import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Footer = () => {
  return (
    <div className='footer w-full p-[3rem] bg-accent-hover'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-3'>
                <div className='flex flex-col xl:flex-row items-start xl:items-center gap-3'>
                    <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='Logo flex flex-col items-start xl:items-start gap-5'>
                        <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className='' />
                        <span className='text-3xl font-bold text-primary'>Sluch Resturant</span>
                        <p className='text-secondary/50 w-[100%] xl:w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus perspiciatis soluta quasi obcaecati veniam provident eius dolores nostrum nam reprehenderit sed vel, sapiente dolorum iure eum ab deleniti debitis quis?</p>
                    </motion.div>
                    <div className='Links grid grid-cols-2 xl:grid-cols-4 gap-[5rem] xl:gap-[15rem]'>
                        <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-start gap-3'>
                            <span className='text-3xl font-bold text-primary'>Links</span>
                            <ul className='flex flex-col gap-3 text-secondary/50'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Menu</li>
                                <li>Contact</li>
                            </ul> 
                        </motion.div>
                        <motion.div variants={Fadein("up" , 0.8)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-start gap-3'>
                            <span className='text-3xl font-bold text-primary'>Contact</span>
                            <ul className='flex flex-col gap-3 text-secondary/50'>
                                <li>+ 20 155 0662 103</li>
                                <li>9VqzZ@example.com</li>    
                            </ul>
                        </motion.div>
                        <motion.div variants={Fadein("up" , 1)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-start gap-3'>
                            <span className='text-3xl font-bold text-primary'>Support</span>
                            <ul className='flex flex-col gap-3 text-secondary/50'>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Help Center</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={Fadein("up" , 1.2)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-start gap-3'>
                            <span className='text-3xl font-bold text-primary'>Services</span>
                            <ul className='flex flex-col gap-3 text-secondary/50'>
                                <li>Food</li>
                                <li>Drinks</li>
                                <li>Fast Food</li>
                                <li>Buffet</li>
                                <li>Sea Food</li>
                                <li>Salads</li>
                                <li>Snacks</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <span className='text-secondary/50 text-center text-sm mt-5'>Copyright 2022. All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer