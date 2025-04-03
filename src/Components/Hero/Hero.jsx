import React from "react";
import HeroImg from "../../assets/11.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import NumberCounter from "../NumberCounter/NumberCounter";
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import Testimonals from "../Testimonals/Testimonals";



const BannerData ={
  image:banner1,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional Online Tutor on Your Schedule",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link:"#"
}

const BannerData2 ={
  image:banner2,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Talented and Qualified Tutors to Serve You for Help",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link:"#"
}

const Hero = () => {
  return (
    <>
      <div>

        <div className="container p-25 pl-25  rounded-2xl bg-primary/10  ">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px] ">
            {/* Text content section */}
            <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
              <motion.h1 id="hero-title"
               variants={slideUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-4xl xl:text-5xl font-bold "
              >
                " Discover, Learn, Succeed "{" "}
                <span id="hero-sub-title" className="text-gray-400 ">Unlock Your Learning Potential</span>
              </motion.h1>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                animate="animate"
              >
                Searching For Your Answers? Finding Your Direction? We Are Here To Guide You.{" "}
              </motion.p>
              <div>
                <motion.button
                  variants={slideUp(0.8)}
                  initial="initial"
                  animate="animate"
                  className="primary-btn p-3 md:p-4 rounded-lg bg-primary text-white duration-300 
             ml-8 md:ml-16 lg:ml-30 mt-10 md:mt-16 lg:mt-20 
             text-sm md:text-base lg:text-lg"
                >
                  Get Started
                </motion.button>


              </div>
            </div>
            {/* Hero Image section */}
            <div className="flex justify-center items-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={HeroImg}
                alt=""
                className="w-[90%] md:w-[550px] xl:w-[600px]"
              />
            </div>
          </div>
        </div>
        <NumberCounter />
        <Services />
        <Banner { ...BannerData}/>
        <Banner{ ...BannerData2} reverse={true}/>
        {/* <Cards /> */}
        {/* <Banner2 /> */}
        <Testimonals/>
      </div>
    </>
  );
};

export default Hero;
