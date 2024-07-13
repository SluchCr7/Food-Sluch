'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
const PageAnimation = ({ children }) => {
    const pathname = usePathname()
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={pathname}
                className='h-screen w-[100%] bg-primary z-40 absolute top-0 bottom-0'
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageAnimation