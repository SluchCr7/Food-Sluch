'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import { ShoppingBag, ChevronRight, Star, Minus, Plus } from 'lucide-react'

const menuData = {
    "Signature Mains": [
        { id: 1, title: "A5 Kagoshima Wagyu", price: 125, desc: "Charcoal-grilled, served with truffle-infused soy and root vegetables.", img: "/assets/images/hero_signature_dish_1774544880233.png" },
        { id: 2, title: "Chilean Seabass", price: 48, desc: "Pan-seared, citrus emulsion, wild asparagus, gold leaf.", img: "/assets/images/menu-seabass.png" },
    ],
    "Exquisite Appetizers": [
         { id: 3, title: "Truffle Burrata", price: 24, desc: "Aged balsamic, organic tomatoes, basil lace.", img: "/assets/images/menu-burrata.png" },
         { id: 4, title: "Caviar Selection", price: 180, desc: "30g Imperial Ossetra, blinis, classic accompaniments.", img: "/assets/images/hero-new-1.png" },
    ]
}

const OnlineOrderingPage = () => {
    const [cart, setCart] = useState([])
    const [activeTab, setActiveTab] = useState("Signature Mains")

    const addToCart = (item) => {
        const existing = cart.find(i => i.id === item.id)
        if (existing) {
            setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
        } else {
            setCart([...cart, { ...item, qty: 1 }])
        }
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0)

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            {/* Hero */}
            <section className="relative pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="text-primary font-serif italic text-xl tracking-widest uppercase mb-4 block">Gourmet Delivery</span>
                        <h1 className="text-6xl md:text-8xl font-display text-white mb-6">Experience <span className="text-primary italic">at Home</span></h1>
                        <p className="text-white/40 font-light text-lg">Bring the artistry of Sluch to your doorstep. Curated for impeccable presentation and temperature resilience.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6 relative">
                 <div className="flex flex-col lg:flex-row gap-16">
                     
                     {/* Menu Content */}
                     <div className="lg:w-2/3">
                         <div className="flex gap-12 border-b border-white/5 pb-6 mb-12 overflow-x-auto no-scrollbar">
                             {Object.keys(menuData).map((cat) => (
                                 <button 
                                     key={cat} 
                                     onClick={() => setActiveTab(cat)}
                                     className={`text-[10px] uppercase tracking-[0.4em] transition-all whitespace-nowrap ${activeTab === cat ? 'text-primary' : 'text-white/30 hover:text-white'}`}
                                 >
                                     {cat}
                                     {activeTab === cat && <motion.div layoutId="order-tab" className="h-[2px] bg-primary mt-4" />}
                                 </button>
                             ))}
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <AnimatePresence mode="wait">
                                 {menuData[activeTab].map((item) => (
                                     <motion.div 
                                         key={item.id}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         exit={{ opacity: 0, scale: 0.95 }}
                                         className="luxury-border glass-dark p-6 group"
                                     >
                                         <div className="aspect-[4/3] relative overflow-hidden mb-6">
                                             <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                             <div className="absolute inset-0 bg-dark/20" />
                                         </div>
                                         <h4 className="text-2xl font-display text-white mb-2">{item.title}</h4>
                                         <p className="text-white/40 font-light text-sm mb-6 h-10 line-clamp-2">{item.desc}</p>
                                         <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                             <span className="text-primary font-serif text-xl italic">${item.price}</span>
                                             <button 
                                                 onClick={() => addToCart(item)}
                                                 className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all"
                                             >
                                                 <Plus size={18} />
                                             </button>
                                         </div>
                                     </motion.div>
                                 ))}
                             </AnimatePresence>
                         </div>
                     </div>

                     {/* Cart Sidebar */}
                     <div className="lg:w-1/3">
                         <div className="sticky top-32 glass-dark luxury-border p-10">
                             <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                                 <ShoppingBag className="text-primary" />
                                 <h3 className="text-2xl font-display text-white">Your Order</h3>
                             </div>

                             {cart.length === 0 ? (
                                 <div className="py-20 text-center opacity-30 italic font-light">Your basket is empty.</div>
                             ) : (
                                 <div className="space-y-8 mb-10">
                                     {cart.map((item) => (
                                         <div key={item.id} className="flex justify-between items-start">
                                             <div className="space-y-1">
                                                 <h5 className="text-white font-medium">{item.title}</h5>
                                                 <p className="text-primary text-sm font-serif italic">${item.price} x {item.qty}</p>
                                             </div>
                                             <div className="flex items-center gap-3">
                                                  <button onClick={() => setCart(cart.map(i => i.id === item.id ? {...i, qty: Math.max(0, i.qty - 1)} : i).filter(i => i.qty > 0))} className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors hover:text-primary"><Minus size={12} /></button>
                                                  <span className="text-xs">{item.qty}</span>
                                                  <button onClick={() => addToCart(item)} className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors hover:text-primary"><Plus size={12} /></button>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                             )}

                             <div className="border-t border-white/10 pt-10 space-y-4">
                                 <div className="flex justify-between text-white/50 font-light">
                                     <span>Subtotal</span>
                                     <span>${total.toFixed(2)}</span>
                                 </div>
                                 <div className="flex justify-between text-white/50 font-light">
                                     <span>Experience Fee</span>
                                     <span>$12.00</span>
                                 </div>
                                 <div className="flex justify-between text-2xl font-display text-white pt-4">
                                     <span>Total</span>
                                     <span className="text-primary">${(total + (cart.length > 0 ? 12 : 0)).toFixed(2)}</span>
                                 </div>
                             </div>

                             <button className="w-full py-6 mt-12 bg-primary text-dark font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all disabled:opacity-30 disabled:pointer-events-none" disabled={cart.length === 0}>
                                 Finalize Order
                             </button>
                         </div>
                     </div>

                 </div>
            </section>

            <Footer />
        </div>
    )
}

export default OnlineOrderingPage
