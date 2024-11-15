import React from "react";
import { HERO_CONTENT } from "../constants";
import Heroimg from "../assets/first.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-medium tracking-tight text-gray-900 lg:mt-16 lg:text-7xl"
            >
              FACE SEARCH AI
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-600 via-gray-700 to-blue-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Your Digital Detective
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-xl py-1 font-light tracking-tighter  text-gray-700"
            >
              Welcome to Face Search AI, Upload a photo and let our AI trace
              person's Web presence.
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" max-w-xl py-1 font-light tracking-tighter  text-gray-700"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full pb-20 lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Heroimg}
              alt="landing img"
              className="h-100 w-80 object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;