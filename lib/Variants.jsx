import React from 'react'
import { motion } from 'framer-motion'
const Fadein = (dir, delay) => ({
  hidden: {
    y: dir === 'up' ? 40 : dir === 'down' ? -40 : 0,
    opacity: 0,
    x: dir === 'left' ? 40 : dir === 'right' ? -40 : 0,
    transition: {
      type: 'tween',
      delay,
      duration: 1.4,
      ease: [0.25, .6, .3, .8],
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      delay,
      duration: 1.4,
      ease: [0.25, .6, .3, .8],
    },
  },
})

export default Fadein