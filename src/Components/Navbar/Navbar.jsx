import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'



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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full z-100">
        <motion.div
          variants={slideBottom(0.2)}
          initial="initial"
          animate="animate"
          className=" bg-primary/8 backdrop-blur-lg shadow-md fixed w-full z-50 py-8 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-between items-center"
        >

          {/* Logo section */}
          <div className="flex items-center gap-1">
            <img src={Logo} alt="" className="w-[125px]" />
          </div>

          {/* Link section */}
          <div className="hidden lg:block ">
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

          {/* Authenticate Buttons section */}
          <SignedOut>
            <div className="hidden lg:block">
              <Link to='/login'>
                <button className="secondary-btn p-2 rounded-lg  text-[#1B4D3E] hover:bg-primary hover:text-white border">SignIn</button>
              </Link>
            </div>
          </SignedOut>

          <SignedOut>
            <div className="hidden lg:block">
              <Link to='/signup'>
                <button className="primary-btn p-2 rounded-lg mr-5 text-[#1B4D3E] hover:bg-primary hover:text-white border">SignUp</button>
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
             <div>
               <UserButton/>
             </div>
          </SignedIn>

          {/* mobile Menu  */}
          <div className="lg:hidden" onClick={() => { setIsOpen(!isOpen) }}>
            <MdMenu className="text-4xl " />
          </div>

        </motion.div>
      </nav>
      {/* mobile side view  */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
