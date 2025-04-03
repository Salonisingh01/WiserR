import { motion } from "framer-motion";

const courses = [
  {
    category: "Technology",
    courses: [
      { name: "B.Tech in Computer Science", college: "Amity University, Gurugram", link: "https://www.amity.edu/gurugram/", image: "path_to_tech_image1.jpg" },
      { name: "BCA (Bachelor of Computer Applications)", college: "GD Goenka University", link: "https://www.gdgoenkauniversity.com/", image: "path_to_tech_image2.jpg" },
      { name: "M.Tech in Artificial Intelligence", college: "IILM University, Gurugram", link: "https://iilm.edu.in/", image: "path_to_tech_image3.jpg" },
    ],
  },
  {
    category: "Management",
    courses: [
      { name: "MBA in Marketing", college: "IBS Business School, Gurugram", link: "https://www.ibshyderabad.org/", image: "path_to_mgmt_image1.jpg" },
      { name: "BBA (Bachelor of Business Administration)", college: "NorthCap University", link: "https://www.ncuindia.edu/", image: "path_to_mgmt_image2.jpg" },
      { name: "Executive MBA", college: "K.R. Mangalam University", link: "https://www.krmangalam.edu.in/", image: "path_to_mgmt_image3.jpg" },
    ],
  },
  {
    category: "Medical",
    courses: [
      { name: "MBBS", college: "SGT Medical College, Gurugram", link: "https://sgtuniversity.ac.in/", image: "path_to_medical_image1.jpg" },
      { name: "BDS (Dental Surgery)", college: "PGIMS, Rohtak", link: "http://www.uhsr.ac.in/", image: "path_to_medical_image2.jpg" },
    ],
  },
  {
    category: "Diploma & Short-Term Courses",
    courses: [
      { name: "Diploma in Data Science", college: "Amity University", link: "https://www.amity.edu/gurugram/", image: "path_to_diploma_image1.jpg" },
      { name: "Certificate in Digital Marketing", college: "IILM University", link: "https://iilm.edu.in/", image: "path_to_diploma_image2.jpg" },
    ],
  },
  {
    category: "Placement & Interview Preparation",
    courses: [
      { name: "Full Stack Development Bootcamp", college: "Coding Ninjas, Gurugram", link: "https://www.codingninjas.com/", image: "path_to_placement_image1.jpg" },
      { name: "Aptitude & Interview Prep", college: "Unacademy", link: "https://unacademy.com/", image: "path_to_placement_image2.jpg" },
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