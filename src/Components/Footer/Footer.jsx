import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import FooterImg from "../../assets/5.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


const Footer = () => {
  return (
    <div style={bgStyle} className="pl-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="container text-center space-y-10 py-3"
          >
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl font-bold">WISER</p>
              <p>Get 20% off per order</p>
            </div>
            <div className=" space-y-5">
              <button className="primary-btn text-black">Subscribe</button>
              <div className="flex flex-row justify-center gap-3">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
            <p>
              All the copyrights are reserved @ Care_Tech 2024
            </p>
          </motion.div>
        </div>
  )
}

export default Footer