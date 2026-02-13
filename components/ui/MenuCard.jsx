import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-dark-200/50 border border-white/5 overflow-hidden rounded-sm hover:border-primary/30 transition-all duration-500"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                    <span className="text-primary font-display font-medium">{item.price}</span>
                </div>
            </div>

            <div className="p-6 relative">
                <h3 className="text-xl font-display text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {item.description || "A delicate combination of freshest ingredients prepared with passion."}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 uppercase tracking-widest">Signature Dish</span>
                    <div className="w-8 h-[1px] bg-primary/50 group-hover:w-16 transition-all duration-300"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuCard;
