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
    link: "#",
  },
  {
    id: 3,
    title: "Colleges",
    link: "#",
  },
  {
    id: 4,
    title: "Tutors",
    link: "#",
  },
  {
    id: 5,
    title: "Study Materials",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="py-8  pl-40 container flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" className="w-[70px]" />
          <p className="font-bold text-2xl">HUSTLE</p>
        </div>
        {/* Link section */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="hover:text-primary uppercase text-sm xl:text-base"
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
          <button className="primary-btn border border-black rounded-lg  hover:bg-primary">Get Started</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
