import React from 'react'
import { motion } from 'framer-motion'


const NavbarBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        
            isOpen && (
            <motion.div className='bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative mt-28'>
                Are you a university or school student looking for an online tutoring partnership?
                <a href='#' className='text-shadow-indigo-600 ml-2'>
                    Talk to Us.
                </a>
                <div className='absolute top-1/2 right-10 cursor-pointer -translate-y-1/2' 
                onClick={()=> setIsOpen(false)}>
                    X
                </div>
            </motion.div>
            )

        
    )
}

export default NavbarBanner