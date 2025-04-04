import { motion } from "framer-motion";
import img1 from '../../assets/icon/Science.jpg'
import img2 from '../../assets/icon/bca.jpg'
import img3 from '../../assets/icon/ai.jpg'
import img4 from '../../assets/icon/mba.jpg'
import img5 from '../../assets/icon/bba.jpg'
import img6 from '../../assets/icon/emba.jpg'
import img7 from '../../assets/icon/mbbs.jpg'
import img8 from '../../assets/icon/dbs.jpg'
import img9 from '../../assets/icon/ds.jpg'
import img10 from '../../assets/icon/marketing.jpg'
import img11 from '../../assets/icon/fullstack.png'
import img12 from '../../assets/icon/aptitude.png'
const courses = [
  {
    category: "Technology",
    courses: [
      { name: "B.Tech in Computer Science", college: "Amity University, Gurugram", link: "https://www.amity.edu/gurugram/", image: img1 },
      { name: "BCA (Bachelor of Computer Applications)", college: "GD Goenka University", link: "https://www.gdgoenkauniversity.com/", image: img2},
      { name: "M.Tech in Artificial Intelligence", college: "IILM University, Gurugram", link: "https://iilm.edu.in/", image:img3},
    ],
  },
  {
    category: "Management",
    courses: [
      { name: "MBA in Marketing", college: "IBS Business School, Gurugram", link: "https://www.ibshyderabad.org/", image: img4 },
      { name: "BBA (Bachelor of Business Administration)", college: "NorthCap University", link: "https://www.ncuindia.edu/", image:img5 },
      { name: "Executive MBA", college: "K.R. Mangalam University", link: "https://www.krmangalam.edu.in/", image: img6 },
    ],
  },
  {
    category: "Medical",
    courses: [
      { name: "MBBS", college: "SGT Medical College, Gurugram", link: "https://sgtuniversity.ac.in/", image: img7 },
      { name: "BDS (Dental Surgery)", college: "PGIMS, Rohtak", link: "http://www.uhsr.ac.in/", image: img8 },
    ],
  },
  {
    category: "Diploma & Short-Term Courses",
    courses: [
      { name: "Diploma in Data Science", college: "Amity University", link: "https://www.amity.edu/gurugram/", image: img9 },
      { name: "Certificate in Digital Marketing", college: "IILM University", link: "https://iilm.edu.in/", image: img10},
    ],
  },
  {
    category: "Placement & Interview Preparation",
    courses: [
      { name: "Full Stack Development Bootcamp", college: "Coding Ninjas, Gurugram", link: "https://www.codingninjas.com/", image: img11 },
      { name: "Aptitude & Interview Prep", college: "Unacademy", link: "https://unacademy.com/", image:img12 },
    ],
  },
];

function CoursesPage() {
  return (
    <div className="bg-[#E0F7FA] min-h-screen text-gray-900 py-12 px-4">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mt-19 text-center text-[#2EB7A4] mb-8"
      >
        Explore The Courses
      </motion.h1>

      {/* Courses Section */}
      <motion.div
        className="container mx-auto space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {courses.map((category, index) => (
          <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <motion.h2
              className="text-3xl font-semibold text-[#2EB7A4] mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {category.category}
            </motion.h2>

            {/* Course List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-3" />
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <p className="text-gray-600 text-center">{course.college}</p>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[#2EB7A4] underline hover:text-[#40E0D0] transition"
                  >
                    Visit College Website
                  </a>
                </motion.div>
              ))}
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
        <h3 className="text-2xl font-semibold mb-4">Need Help Choosing a Course?</h3>
        <p className="text-gray-700">Our experts can guide you in selecting the best course and college.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-[#2EB7A4] text-white py-2 px-6 rounded-lg hover:bg-[#40E0D0] transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}

export default CoursesPage;