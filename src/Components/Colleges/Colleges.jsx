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
        className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <ul className="mt-6 space-y-4">
        {filteredColleges.map((college, index) => (
          <motion.li 
            key={college.id}
            className="p-4 bg-white shadow-md rounded-lg border-l-4 border-primary"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={college.link} target="_blank" rel="noopener noreferrer" 
               className="text-xl font-semibold text-primary hover:underline">
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
