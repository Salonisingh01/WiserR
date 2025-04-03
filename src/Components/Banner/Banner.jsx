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
    <div className="bg-gray-50 pb-20 pl-20 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
         
          {/* Banner image section */}
          <div className={`flex justify-evenly items-center ${reverse && 'md:order-last md:justify-center'}`}>
            <motion.img 
             initial={{opacity:0, scale:0.5}}
             whileInView={{opacity:1,scale:1}}
             transition={{type:'spring',stiffness:100, delay:0.2}}
            //  viewport={{once:true}}
             
            src={image} alt="" className="w-[400px] h-[350px] object-cover" />
          </div>
          
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
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
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn p-3 md:p-4 rounded-lg bg-primary text-white duration-300 
             ml-8 md:ml-16 lg:ml-30 mt-10 md:mt-16 lg:mt-20 
             text-sm md:text-base lg:text-lg">Get started</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;