import React from 'react'
import Intro from './Intro'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'
const Menu = () => {
    const menu = [
        {
            id: 1,
            img: "/assets/images/menu-1.jpg",
            title: "Greek Salad",
            price: "$12.50",
            text: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with dried oregano",
            new : true
        },
        {
            id: 2,
            img: "/assets/images/menu-5.jpg",
            title: "Lasagna",
            price: "$5.99",
            text: "With butter lettuce, tomato and sauce bechamel",
        },
        {
            id: 3,
            img: "/assets/images/menu-3.jpg",
            title: "Butternut Pumpkin",
            price: "$30.99",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
            
        },
        {       
            id: 4,
            img: "/assets/images/menu-4.jpg",
            title: "Tokusen Wagyu",
            price: "$35.99",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
            new : true
        },
        {
            id: 5,
            img: "/assets/images/menu-5.jpg",
            title: "Olivas Rellenas",
            price: "$35.99",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
            new : true
        },
        {
            id: 6,
            img: "/assets/images/menu-6.jpg",
            title: "Oph Fish",
            price: "$40.99",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        },  
    ]
  return (
    <div className='menu w-full min-h-[90vh] py-[5rem] relative bg-accent z-[999]'>
        <div className='container mx-auto'>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='intro'>
                <Intro title='Special Dishes' text='Our Menu' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Fugiat quia, nisi nemo ipsam vel consequatur maxime' />
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-28 mt-10'>
                {
                    menu.map((item, index) => (
                        <motion.div variants={Fadein("up" , item.id / 10 )} initial="hidden" whileInView={"visible"} viewport={{once: false , amount: 0.5}} className='card flex flex-col lg:flex-row items-center gap-7 w-full z-10' key={index}>
                            <Image src={item.img} alt="meal" width={500} height={500} className= 'relative w-[100%] lg:w-[200px] rounded-lg'/>
                            <div className="card-body flex flex-col items-center gap-3">
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <div className="card-title flex flex-row items-center gap-3">
                                        <h2 className="card-title text-primary">{item.title}</h2>
                                        {item.new ? <span className='new bg-primary text-accent py-[2px] px-6 rounded-lg uppercase text-xs'>New</span> : ""}
                                    </div>
                                    <p className='price'>{item.price}</p>   
                                </div>
                                <p className='text-center md:text-left'>{item.text}</p>  
                            </div>
                        </motion.div>
                    ))
                }
            </div>            
        </div>
        <div className='bg-image absolute top-0 left-0 z-[-1]'>
            <Image src="/assets/images/shape-5.png" alt="hero" width={500} height={500} className= 'h-full w-full'/>
        </div>
    </div>
  )
}

export default Menu