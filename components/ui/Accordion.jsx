import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left group transition-colors hover:text-primary"
            >
                <span className={`text-lg font-display ${isOpen ? 'text-primary' : 'text-white'}`}>
                    {title}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                >
                    <ChevronDown />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-white/70 leading-relaxed font-light">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
