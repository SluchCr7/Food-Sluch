import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Intro from './Intro';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Fadein from '@/lib/Variants';
const Info = () => {
  return (
    <div className='info w-full min-h-[90vh] py-[5rem] bg-accent-hover' id='menu'>
        <div className='container mx-auto'>
          <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-center gap-3 xl:flex-row xl:gap-16'>
            <div className='intro flex flex-col items-center text-center xl:text-left gap-3'>
              <Intro title='Our Story' text='Every Dish tells Our story' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Fugiat quia, nisi nemo ipsam vel consequatur maxime'/>
            </div>  
            <div className='relative Image w-full'>
              <Image src="/assets/images/about-banner.jpg" alt="about" width={500} height={500} className='relative w-[100%] rounded-lg'/>
              <div className='absolute top-[-50px] right-0'>
                <Image src="/assets/images/badge-2.png" alt="map" width={500} height={500} className='relative w-[100%] rounded-lg'/>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Info