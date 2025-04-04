import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const slideUp = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Banner = ({ image, tag, title, subtitle, link, reverse }) => {
  return (
    <div className="bg-gray-50 py-16 px-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Banner image section */}
        <div className={`flex justify-center items-center ${reverse ? 'md:order-last' : ''}`}>
          <motion.img
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:'spring', stiffness:100, delay:0.2}}
            src={image}
            alt=""
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
        
        {/* Banner text section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4">
          <motion.p
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-orange-600 font-semibold capitalize"
          >
            {tag}
          </motion.p>
          
          <motion.h2
            variants={slideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            {title}
          </motion.h2>
          
          <motion.p
            variants={slideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-slate-500"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            variants={slideUp(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start pt-4"
          >
            <button className="bg-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Get started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;