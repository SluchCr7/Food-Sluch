import React from 'react'
import Intro from './Intro'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fadein from '@/lib/Variants'

const Menu = () => {
    const menu = [
        {
            id: 1,
            title: "Truffle & Gold Steak",
            price: "$120",
            text: "Premium Wagyu beef, gold leaf foam, shaved black truffles.",
            new: true
        },
        {
            id: 2,
            title: "Royal Caviar Pasta",
            price: "$85",
            text: "Handmade tagliatelle, oscietra caviar, lemon butter sauce.",
            new: true
        },
        {
            id: 3,
            title: "Lobster Thermidor",
            price: "$95",
            text: "Whole maine lobster, cognac cream sauce, gruyère cheese crust.",
            new: false
        },
        {
            id: 4,
            title: "Saffron Risotto",
            price: "$45",
            text: "Acquerello rice, iranian saffron, 24-month parmigiano reggiano.",
            new: false
        }
    ]

    return (
        <div className='menu w-full min-h-screen py-24 relative bg-dark z-10' id='menu'>
            <div className='container mx-auto px-4'>
                <motion.div variants={Fadein("up", 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: true }} className='intro mb-16'>
                    <Intro title='Culinary Excellence' text='Chef’s Specials' subtext='A selection of our most exquisite creations, crafted for the discerning palate.' />
                </motion.div>

                <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'>
                    {/* Featured Dish Image */}
                    <motion.div
                        variants={Fadein("right", 0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                            <Image
                                src="/assets/images/special-dish-new.png"
                                alt="Signature Dish"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-widest mb-2 inline-block">Signature Dish</span>
                                <h3 className="text-3xl font-serif text-white">Wagyu Gold Reserve</h3>
                                <p className="text-white/70 mt-2 max-w-md">Experience the pinnacle of flavor with our signature A5 Wagyu, garnished with edible gold and rare truffles.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Specials List */}
                    <motion.div
                        variants={Fadein("left", 0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        {menu.map((item, index) => (
                            <div key={index} className="group p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                        {item.new && <span className="text-[10px] text-black bg-primary px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">New</span>}
                                    </div>
                                    <span className="text-xl font-mono text-primary">{item.price}</span>
                                </div>
                                <p className="text-white/60 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <a href="/menu" className="px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm rounded-sm">
                                View Full Menu
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none' />
        </div>
    )
}

export default Menu