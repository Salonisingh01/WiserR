import React from "react";
import ServiceImg from "../../assets/22.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container py-12 pl-20">
        {/* header section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
          {" "}
            <span className="text-black "> Benefits of online tutoring services with us </span>
          </h1>
          
        </motion.div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={ServiceImg}
              alt=""
              className="w-[300px] mx-auto md:max-w-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl"> Top colleges For You</p>
            <p className="text-gray-500 pl-6 border-l-2">
              You will get all the options for choosing best college for you.
              Serach all the colleges near your, match your requirements compare it with other colleges 
              & choose the best one for You.              
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Get Best Tutors</p>
            <p className="text-gray-500 pl-6 border-l-2">
              Don't Know how to solve your query? still stuck at that one question?
              worry not get help from our top tutors by one-on-one online classes.
              Ask any question and get the solution.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Get all study Materials</p>
            <p className="text-gray-500 pl-6 border-l-2">
              Get All notes and study materials at one place whether it's about 
              any programming language, management or History.Get all notes made by our top tutors.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
