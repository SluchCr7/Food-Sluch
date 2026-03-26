import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white/[0.02] luxury-border overflow-hidden transition-all duration-700 hover:bg-white/[0.04]"
        >
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80" />
                
                {/* Price Tag - Floating Gold */}
                <div className="absolute top-6 right-6 glass-dark px-4 py-2 luxury-border">
                    <span className="text-primary font-serif italic text-lg">{item.price}</span>
                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-0 left-0 w-8 h-px bg-primary translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-px h-8 bg-primary translate-y--4 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>

            <div className="p-8 relative">
                <div className="flex items-center gap-4 mb-4">
                     <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Signature</span>
                     <div className="h-px flex-grow bg-white/5" />
                </div>

                <h3 className="text-2xl font-display text-white mb-3 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                </h3>
                
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 italic">
                    {item.description}
                </p>

                <div className="flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold group-hover/btn:text-white transition-colors duration-500">View Details</span>
                    <div className="w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-white transition-all duration-700" />
                </div>
            </div>
        </motion.div>
    );
};

export default MenuCard;
