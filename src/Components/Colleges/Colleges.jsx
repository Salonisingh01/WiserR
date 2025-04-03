// import { motion } from "framer-motion";
// import { useState } from "react";
// import a from '../../Images/amity.png'
// import b from '../../Images/gdgoenka.png'
// import c from '../../Images/DPG.png'
// import d from '../../Images/WCTM.png'


// const colleges = [
//   {
//     name: "Amity University, Gurugram",
//     image: a,
//     fees: "₹94 K - 15.84 L",
//     courses: ["Engineering", "Management", "Law", "Medical"],
//     placementRate: "High",
//     aicteRanking: "101 out of 300 in 2024",
//     link: "https://www.amity.edu/gurugram/",
//   },
//   {
//     name: "GD Goenka University",
//     image: b,
//     fees: "₹29 K - 22 L",
//     courses: ["Engineering", "Management", "Law", "Design"],
//     placementRate: "Moderate",
//     aicteRanking: "Not Ranked",
//     link: "https://www.gdgoenkauniversity.com/",
//   },
//   {
//     name: "Dronacharya College of Engineering",
//     image: c,
//     fees: "₹1.54 L - 6.07 L",
//     courses: ["Computer Science", "Mechanical", "Civil"],
//     placementRate: "Moderate",
//     aicteRanking: "281 out of 762 in India 2025",
//     link: "http://ggnindia.dronacharya.info/",
//   },
//   {
//     name: "World College of Technology and Management",
//     image: d,
//     fees: "₹1L per year",
//     courses: ["Engineering", "Management"],
//     placementRate: "High",
//     aicteRanking: "266 out of 762 in India 2025",
//     link: "https://www.wctmgurgaon.com/",
//   },
// ];

// function Card({ children, className }) {
//   return <div className={'bg-white rounded-lg shadow-lg p-6 ${className}'}>{children}</div>;
// }

// export default function Colleges() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Inquiry submitted successfully!");
//   };

//   return (
//     <div className="bg-[#E0F7FA] min-h-screen text-gray-900 py-12 px-4">
//       {/* Colleges Section */}
//       <div className="container mt-19 mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-8">Top Colleges in Gurugram, Haryana</h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {colleges.map((college, index) => (
//             <motion.Card key={index} className="p-6 bg-white text-gray-700 rounded-2xl shadow-lg"
//               initial={{scale:1}}
//               whileHover={{scale:1.1 
//               }}
              
//               >
//               <motion.img
//                 src={college.image}
//                 alt={college.name}
//                 className="rounded-xl w-full h-48 object-cover mb-4"
//                 initial={{ opacity: 0, scale: 0.9 }}
                
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               />
//               <h3 className="text-xl font-bold">{college.name}</h3>
//               <p className="text-sm">Fees: {college.fees}</p>
//               <p className="text-sm">Courses: {college.courses.join(", ")}</p>
//               <p className="text-sm">Placement Rate: {college.placementRate}</p>
//               <p className="text-sm">AICTE Ranking: {college.aicteRanking}</p>
//               <a href={college.link} target="_blank" rel="noopener noreferrer" className="text-blue-200 underline mt-2 inline-block">
//                 Visit Website
//               </a>
//             </motion.Card>
//           ))}
//         </motion.div>
//       </div>

//       {/* Why Choose Colleges in Gurugram? */}
//       <motion.section
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mt-16 bg-[#FFFFFF] p-8 shadow-lg rounded-lg max-w-4xl mx-auto"
//       >
//         <h3 className="text-2xl font-semibold text-center mb-4">Why Choose Colleges in Gurugram?</h3>
//         <p className="text-center text-lg">
//           Gurugram is an *education hub* with top-ranked colleges, *state-of-the-art facilities, and **high placement rates* in various domains.
//         </p>
//       </motion.section>

//       {/* Popular Streams & Career Opportunities */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mt-16 bg-[#2EB7A4] text-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto"
//       >
//         <h3 className="text-2xl font-semibold text-center mb-4">Popular Streams & Career Opportunities</h3>
//         <ul className="text-lg list-disc list-inside">
//           <li>Engineering: Software Development, AI & ML, Civil Engineering</li>
//           <li>Management: MBA, Finance, HR, Digital Marketing</li>
//           <li>Medical: Nursing, MBBS, Paramedical Courses</li>
//           <li>Design: UI/UX Design, Interior Design, Fashion Design</li>
//         </ul>
//       </motion.section>

//       {/* Top Recruiters & Placement Success */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mt-16 bg-[#FFFFFF] p-8 shadow-lg rounded-lg max-w-4xl mx-auto"
//       >
//         <h3 className="text-2xl font-semibold text-center mb-4">Top Recruiters & Placement Success</h3>
//         <p className="text-center text-lg">
//           *Leading companies* like Google, Microsoft, Infosys, and TCS hire *graduates from Gurugram colleges* with *excellent packages*.
//         </p>
//       </motion.section>

//       {/* Inquiry Form Section */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mt-16 bg-white p-8 shadow-xl rounded-lg max-w-lg mx-auto"
//       >
//         <h3 className="text-2xl font-semibold mb-4 text-center">Have Questions? Get in Touch!</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
//           <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
//           <textarea name="message" placeholder="Your Message" onChange={handleChange} required className="w-full p-3 border rounded-lg"></textarea>
//           <button type="submit" className="bg-[#40E0D0] text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-[#2EB7A4] transition">
//             Submit Inquiry
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const CollegeSearch = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/colleges")
      .then((response) => setColleges(response.data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-[100%]  mx-auto bg-primary/5 min-h-screen">
      <motion.h1 
        className="text-3xl font-bold text-center m-26 text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        College Search
      </motion.h1>
      <motion.input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <ul className="mt-6 space-y-4">
        {filteredColleges.map((college, index) => (
          <motion.li 
            key={college.id}
            className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={college.link} target="_blank" rel="noopener noreferrer" 
               className="text-xl font-semibold text-blue-600 hover:underline">
              {college.name}
            </a>
            <p className="text-gray-700">Ranking: {college.ranking} | AICTE Ranking: {college.aicte_ranking}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeSearch;
