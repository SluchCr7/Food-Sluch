'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-dark flex flex-col items-center justify-center text-center p-4">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-9xl font-serif text-primary mb-4"
            >
                404
            </motion.h1>
            <h2 className="text-3xl font-serif text-white mb-6">Page Not Found</h2>
            <p className="text-white/60 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button href="/" variant="primary">
                Back to Home
            </Button>
        </div>
    )
}
