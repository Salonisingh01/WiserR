import { motion } from "framer-motion";
import a from '../../Images/StudyImg/coding.png'
import b from '../../Images/StudyImg/Management1.png'
import c from '../../Images/StudyImg/Softskills.png'
import d from '../../Images/StudyImg/Coresub.png'




const studyMaterial = [
  {
    category: "Coding Skills",
    description: "Improve your programming knowledge with these resources.",
    websites: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "W3Schools", url: "https://www.w3schools.com/" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
    ],
    image: a,
  },
  {
    category: "Management Skills",
    description: "Learn business management, leadership, and strategy.",
    websites: [
      { name: "Coursera", url: "https://www.coursera.org/" },
      { name: "Harvard Business Review", url: "https://hbr.org/" },
      { name: "edX", url: "https://www.edx.org/" },
    ],
    image: b,
  },
  {
    category: "Soft Skills",
    description: "Enhance your communication, teamwork, and leadership skills.",
    websites: [
      { name: "MindTools", url: "https://www.mindtools.com/" },
      { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
      { name: "TED Talks", url: "https://www.ted.com/talks" },
    ],
    image: c,
  },
  {
    category: "Core Subjects",
    description: "Study key subjects like Math, Science, and Economics.",
    websites: [
      { name: "Khan Academy", url: "https://www.khanacademy.org/" },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/index.htm" },
      { name: "Academic Earth", url: "https://academicearth.org/" },
    ],
    image: d,
  },
];

function StudyMaterialPage() {
  return (
    <div className="bg-[#E0F7FA] min-h-screen text-gray-900 py-12 px-4">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mt-19 text-[#2EB7A4] mb-8"
      >
        Free Study Materials
      </motion.h1>

      {/* Study Material Section */}
      <motion.div
        className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {studyMaterial.map((material, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={material.image} alt={material.category} className="w-32 h-32 object-cover rounded-full md:mr-6" />
            <div>
              <h2 className="text-2xl font-bold text-[#2EB7A4]">{material.category}</h2>
              <p className="text-gray-700">{material.description}</p>
              <ul className="mt-2">
                {material.websites.map((site, idx) => (
                  <li key={idx}>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {site.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Want More Resources?</h3>
        <p className="text-gray-700">Explore additional study materials and online courses to boost your skills.</p>
        <a
          href="https://www.edx.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#2EB7A4] text-white py-2 px-6 rounded-lg hover:bg-[#40E0D0] transition"
        >
          Explore More
        </a>
      </motion.div>
    </div>
  );
}

export default StudyMaterialPage;