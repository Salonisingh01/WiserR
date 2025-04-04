import { motion } from "framer-motion";
import { useState } from "react";
import Tutor1 from "../../Images/Tutor1.jpeg";
import Tutor2 from "../../Images/Tutor2.jpeg";
import Tutor3 from "../../Images/Tutor2.jpg";
import Tutor4 from "../../Images/Tutor4.jpeg";
import Tutor5 from '../../Images/Tutor5.jpeg';
import Tutor6 from '../../Images/Tutor6.jpg';
import Tutor7 from '../../Images/Tutor7.jpg';
import Tutor8 from '../../Images/Tutor8.webp';



const tutors = [
  { name: "Sarah Johnson", subject: "Mathematics", image: Tutor1 },
  { name: "Michael Lee", subject: "Physics", image: Tutor2 },
  { name: "Emma Watson", subject: "Computer Science", image: Tutor3 },
  { name: "James Brown", subject: "Business Studies", image: Tutor4 },
  { name: "Ellie Clark", subject: "Artificial Intelligence", image: Tutor6 },
  { name: "Lilly Snyder", subject: "Core Java", image: Tutor7 },
  { name: "James Brown", subject: "Aptitude", image: Tutor5 },
  { name: "James Brown", subject: "Full Stack Developer", image: Tutor8 },
];

function Card({ children, className }) {
  return <div className={'bg-white rounded-lg shadow-lg p-6 ${className}'}>{children}</div>;
}

export default function Tutors() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
  };

  return (
    <div className="bg-[#E0F7FA] min-h-screen text-gray-900 py-12 px-4">
      {/* Tutors Section */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mt-20 mb-8">Meet Our Tutors</h2>
        <p className="text-center text-lg mt-4 mb-8 max-w-2xl mx-auto">
          Wiser connects you with top tutors who are passionate about teaching and mentoring students.
        </p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tutors.map((tutor, index) => (
            <Card key={index} className="p-6 bg-[#2EB7A4] text-white rounded-2xl shadow-lg">
              <motion.img 
                src={tutor.image} 
                alt={tutor.name} 
                className="rounded-xl w-full h-48 object-cover mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              <h3 className="text-xl font-bold">{tutor.name}</h3>
              <p className="text-sm">{tutor.subject}</p>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Inquiry Form Section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 bg-white p-8 shadow-xl rounded-lg max-w-lg mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">Have Questions? Get in Touch!</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required className="w-full p-3 border rounded-lg"></textarea>
          <button type="submit" className="bg-[#40E0D0] text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-[#2EB7A4] transition">Submit Inquiry</button>
        </form>
      </motion.div>
    </div>
  );
}
