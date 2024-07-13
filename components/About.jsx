import React from 'react'
import Intro from './Intro'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const About = () => {
    const info = [
        {
            id: 1,
            meal: "Breakfast",
            img: "/assets/images/service-1.jpg",
        },
        {
            id: 2,
            meal: "Lunch",
            img: "/assets/images/service-2.jpg",
        },
        {   
            id: 3,
            meal: "Dinner",
            img: "/assets/images/service-3.jpg",
        },
    ]
  return (
    <div className='About relative w-full min-h-[90vh] py-[5rem] bg-accent' id='about'>
        <div className='container mx-auto'>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='intro flex flex-col items-center text-center xl:text-left gap-3'>
                <Intro title='Taste the best' text='Top Dishes of the day' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Fugiat quia, nisi nemo ipsam vel consequatur maxime'/>
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-5 mt-10'>
                {
                    info.map((item, index) => (
                        <motion.div variants={Fadein("up" , item.id / 10 )} initial="hidden" whileInView={"visible"} viewport={{once: false , amount: 0.5}}   className={`card flex flex-col items-center gap-7 ${item.id === 2 ? 'relative lg:top-[50px]' : ''}`} key={index}>
                            <Image src={item.img} alt="meal" width={500} height={500} className='img_serv relative w-[300px] rounded-lg'/>
                            <div className="card-body flex flex-col items-center gap-3">
                                <h2 className="card-title text-3xl tracking-[7px]">{item.meal} Meal</h2> 
                                <button className='border-none text-primary text-xs font-bold tracking-[4px]'>View Menu</button>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
        <div className='image absolute left-0 bottom-0'>
            <Image src="/assets/images/shape-1.png" alt="about" width={300} height={300} className=''/>
        </div>
        
    </div>
  )
}

export default About