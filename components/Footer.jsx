import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Footer = () => {
    const LinksFooter = [
        {
            id: 1,
            time: 0.5,
            title: 'Links',
            links: ['Home', 'About', 'Menu', 'Contact']
        }
        ,
        {
            id: 2,
            time: 1,
            title: 'Support',
            links: ['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Help']
        },
        {
            id: 3,
            time: 1.5,
            title: 'Services',
            links : ["Food" , "Drinks", "Salads", "Snaks","Sea Food" , "Cafe" , "Fast Food"]
        }
    ]
  return (
    <div className='footer w-full p-[3rem] bg-accent-hover'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-3'>
                <div className='flex w-full flex-col xl:flex-row items-start xl:items-start gap-6'>
                    <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='Logo flex flex-col items-start xl:items-start gap-5'>
                        <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className='' />
                        <span className='text-3xl font-bold text-primary'>Sluch Resturant</span>
                        <p className='text-secondary/50 w-[100%] xl:w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus perspiciatis soluta quasi obcaecati veniam provident eius dolores nostrum nam reprehenderit sed vel, sapiente dolorum iure eum ab deleniti debitis quis?</p>
                    </motion.div>
                    <div className='Links grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] xl:gap-[15rem]'>
                        {
                            LinksFooter.map((ele) => {
                                return(
                                <motion.div key={ele.id} variants={Fadein("up" , ele.time)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col w-full items-start gap-3'>
                                    <span className='text-3xl font-bold text-primary'>{ele.title}</span>
                                    <ul className='flex flex-col w-full gap-3 text-secondary/50'>
                                        {
                                                ele.links.map((link , index) => {
                                                return(
                                                    <li className='text-md w-[100px] text-secondary font-bold' key={index}> {link}</li>
                                                )
                                            })
                                        }
                                    </ul> 
                                </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
                <span className='text-secondary/50 text-center text-sm mt-5'>Copyright 2022. All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer