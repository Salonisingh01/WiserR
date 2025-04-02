import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Courses",
    link: "/courses",
  },
  {
    id: 3,
    title: "Colleges",
    link: "/colleges",
  },
  {
    id: 4,
    title: "Tutors",
    link: "/tutors",
  },
  {
    id: 5,
    title: "Study Materials",
    link: "/materials",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="bg-primary/8 backdrop-blur-lg shadow-md fixed max-w-full z-50 py-8  px-40 container flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" className="w-[125px]" />

        </div>
        {/* Link section */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="  p-2 rounded-2xl uppercase text-sm xl:text-base  hover:bg-primary hover:text-white transform duration-500  "
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Button section */}
        <div>
          <button className="primary-btn p-2 rounded-lg  hover:bg-primary hover:text-white border">Get Started</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
