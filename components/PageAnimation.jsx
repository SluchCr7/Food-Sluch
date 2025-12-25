'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageAnimation = ({ children }) => {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={pathname}
                className='w-full'
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageAnimation