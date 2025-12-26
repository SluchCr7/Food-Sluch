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
    <div className='About relative w-full min-h-[90vh] py-20 bg-dark overflow-hidden' id='about'>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <Image src="/assets/images/about-chef.png" alt="bg" fill className="object-cover" />
        </div>
        
        <div className='container mx-auto px-4 relative z-10'>
            {/* Chef Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                <motion.div 
                    variants={Fadein("right", 0.3)} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }}
                    className="flex-1 relative"
                >
                    <div className="relative w-full h-[500px] rounded-sm overflow-hidden border-2 border-white/10 shadow-2xl">
                        <Image src="/assets/images/about-chef.png" alt="Master Chef" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 border-4 border-primary/20 hidden lg:block rounded-full animate-spin-slow pointer-events-none dashed-circle" />
                </motion.div>
                
                <motion.div 
                    variants={Fadein("left", 0.3)} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }}
                    className="flex-1 text-center lg:text-left"
                >
                    <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-2 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Crafting Culinary <br/><span className="text-primary">Masterpieces</span></h2>
                    <p className="text-white/70 leading-relaxed mb-8 text-lg font-light">
                        Step into a world where gastronomy meets art. Our master chefs meticulously select the finest ingredients to create dishes that not only satiate your hunger but also ignite your soul.
                    </p>
                    <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-medium">
                        Read More
                    </button>
                </motion.div>
            </div>

            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: true }} className='intro mb-16'>
                <Intro title='Taste the best' text='Signature Experiences' subtext='From sunrise breakfasts to romantic dinners, explore our curated meal experiences.'/>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    info.map((item, index) => (
                        <motion.div 
                            variants={Fadein("up" , 0.2 * index )} 
                            initial="hidden" 
                            whileInView={"visible"} 
                            viewport={{once: true}}   
                            className={`group relative overflow-hidden rounded-md cursor-pointer ${item.id === 2 ? 'lg:-mt-12' : ''}`} 
                            key={index}
                        >
                            <div className="relative h-[400px] w-full overflow-hidden">
                                <Image 
                                    src={item.img} 
                                    alt={item.meal} 
                                    fill 
                                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h2 className="text-3xl font-serif text-white mb-2">{item.meal}</h2>
                                <div className="w-12 h-1 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                <button className='text-white/80 text-sm tracking-widest hover:text-primary transition-colors uppercase'>View Menu &rarr;</button>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
        <div className='absolute right-0 bottom-0 opacity-10 pointer-events-none'>
            <Image src="/assets/images/shape-1.png" alt="bkg" width={500} height={500} />
        </div>
        </div>
    )
}

export default About