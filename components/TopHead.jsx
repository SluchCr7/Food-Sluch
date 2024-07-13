import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import Fadein from '@/lib/Variants';
const TopHead = () => {
    const leftSide = [
        {
            id:1,
            icon: <CiLocationOn />,
            text: "sluch reasturant, Cairo Egypt"
        },
        {
            id:2,
            icon: <CiTimer />,
            text: "Daily : 10:00 - 22:00"
        },
    ]
    const rightSide = [
        {
            id:1,
            icon: <CiPhone />,
            text: "+20 1550662103"
        },
        {
            id:2,
            icon: <MdEmail />,
            text: "Sluch@Resturant.com"
        },
    ]   
  return (
    <div className='hidden md:flex w-full p-3 items-center justify-between border-b-[1px] border-[#fca311]'>
        <motion.div variants={Fadein('up' , 0.5)} initial="hidden" animate="visible" viewport={{once: false , amount: 0.5}} className='hidden xl:flex items-center gap-5'>
            {
                leftSide.map((ele) => {
                    return (
                        <div className='flex items-center gap-2' key={ele.id}>
                            <span className='text-2xl text-[#fca311]'>{ele.icon}</span>
                            <p className='text-white text-xs'>{ele.text}</p>
                        </div>
                    )
                })
            }
        </motion.div>
        <motion.div variants={Fadein('up' , 1)} initial="hidden" animate="visible" viewport={{once: false , amount: 0.5}} className='hidden md:flex items-center md:justify-center xl:justify-end md:w-full xl:w-[50%] gap-5'>
            {
                rightSide.map((ele) => {
                    return (
                        <div className='flex items-center gap-2' key={ele.id}>
                            <span className='text-2xl text-[#fca311]'>{ele.icon}</span>
                            <p className='text-white text-xs'>{ele.text}</p>
                        </div>
                    )
                })
            }
        </motion.div>
    </div>
  )
}

export default TopHead