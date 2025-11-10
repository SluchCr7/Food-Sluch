'use client'
import { motion, AnimatePresence } from "framer-motion";

const LoadingStart = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#1b1b1b] flex flex-col items-center justify-center"
      >
        {/* Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <div className="chef-hat w-[85px] h-[85px] relative"></div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white text-2xl tracking-wide font-semibold">
            Preparing Your Experience...
          </p>
        </motion.div>

        {/* Animated Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          exit={{ width: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="h-[4px] bg-[#e8c07d] rounded-full mt-5 overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="h-full w-full bg-[#ffffff44]"
          ></motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingStart;
