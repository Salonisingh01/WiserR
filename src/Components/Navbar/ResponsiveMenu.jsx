import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'


const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
        {isOpen && (
           <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
           >
            <div className=' font-semibold uppercase bg-primary text-black py-10  rounded-3xl border border-black '>
              <ul className='flex flex-col justify-center items-center gap-10'>
                 <li>Home</li>
                 <li>Courses</li>
                 <li>Colleges</li>
                 <li>Tutors</li>
                 <li>Study Materials</li>
              </ul>
            </div>

           </motion.div>
        )}
    </AnimatePresence> 

)
}

export default ResponsiveMenu