const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const colleges = [
  { id: 1, name: "Amity University, Gurugram", link: "https://www.amity.edu/gurugram/", aicte_ranking: 85 },
  { id: 2, name: "The NorthCap University", link: "https://www.ncuindia.edu/", aicte_ranking: 78 },
  { id: 3, name: "Management Development Institute (MDI)", link: "https://www.mdi.ac.in/", aicte_ranking: 90 },
  { id: 4, name: "K.R. Mangalam University", link: "https://www.krmangalam.edu.in/", aicte_ranking: 72 },
  { id: 5, name: "IILM University, Gurugram", link: "https://www.iilm.edu.in/", aicte_ranking: 70 },
  { id: 6, name: "BML Munjal University", link: "https://www.bmu.edu.in/", aicte_ranking: 82 },
  { id: 7, name: "SGT University", link: "https://sgtuniversity.ac.in/", aicte_ranking: 75 },
  { id: 8, name: "GD Goenka University", link: "https://www.gdgoenkauniversity.com/", aicte_ranking: 80 },
  { id: 9, name: "Apeejay Stya University", link: "https://university.apeejay.edu/", aicte_ranking: 73 },
  { id: 10, name: "World College of Technology and Management", link: "https://www.wctmgurgaon.com/", aicte_ranking: 68 },
  { id: 11, name: "DPG Institute of Technology and Management", link: "https://www.dpgitm.com/", aicte_ranking: 67 },
  { id: 12, name: "KIIT College of Engineering", link: "http://www.kiit.in/", aicte_ranking: 65 },
  { id: 13, name: "St. Andrews Institute of Technology and Management", link: "https://saitm.ac.in/", aicte_ranking: 66 },
  { id: 14, name: "Gurugram University", link: "https://www.gurugramuniversity.ac.in/", aicte_ranking: 69 },
  { id: 15, name: "IILM Institute for Business & Management", link: "https://www.iilminstitute.ac.in/", aicte_ranking: 74 },
  { id: 16, name: "Global Institute of Technology and Management", link: "https://gitmgurgaon.com/", aicte_ranking: 64 },
  { id: 17, name: "Starex University", link: "https://www.starexuniversity.com/", aicte_ranking: 63 },
  { id: 18, name: "IBMR Business School", link: "https://www.ibmrbschool.com/", aicte_ranking: 71 },
  { id: 19, name: "Dronacharya College of Engineering", link: "https://ggnindia.dronacharya.info/", aicte_ranking: 77 },
  { id: 20, name: "Ansal University", link: "https://sushantuniversity.edu.in/", aicte_ranking: 79 },
  { id: 21, name: "Infinity Business School", link: "https://www.infinitybschool.com/", aicte_ranking: 62 },
  { id: 22, name: "ITM University (now The NorthCap University)", link: "https://www.ncuindia.edu/", aicte_ranking: 78 },
  { id: 23, name: "SOIL Institute of Management", link: "https://www.soilindia.net/", aicte_ranking: 76 },
  { id: 24, name: "Sushant School of Art and Architecture", link: "https://sushantuniversity.edu.in/school-of-art-and-architecture/", aicte_ranking: 74 },
  { id: 25, name: "Brij Mohan Institute of Management and Technology (BIMT)", link: "https://bimt.edu.in/", aicte_ranking: 70 },
  { id: 26, name: "SGT Dental College Hospital & Research Institute", link: "https://sgtuniversity.ac.in/dental-sciences/", aicte_ranking: 67 },
  { id: 27, name: "International School of Business Studies (ISBS)", link: "https://www.isbs.ac.in/", aicte_ranking: 65 },
  { id: 28, name: "Apparel Training and Design Centre (ATDC)", link: "https://atdcindia.co.in/", aicte_ranking: 60 },
  { id: 29, name: "Vedatya Institute", link: "https://www.vedatya.ac.in/", aicte_ranking: 66 },
  { id: 30, name: "Luxury Connect Business School (LCBS)", link: "https://www.lcbs.edu.in/", aicte_ranking: 61 },
  { id: 31, name: "Primordial Center of Excellence", link: "https://www.primordialcenter.com/", aicte_ranking: 59 },
  { id: 32, name: "Great Learning Institute", link: "https://www.mygreatlearning.com/", aicte_ranking: 80 },
  { id: 33, name: "Sha-Shib Aerospace Engineering (SAE)", link: "https://shashibgroup.org/", aicte_ranking: 57 },
  { id: 34, name: "Academy of Pastry and Culinary Arts (APCA)", link: "https://www.apcaindia.com/", aicte_ranking: 55 },
  { id: 35, name: "Seamedu School of Pro-Expressionism", link: "https://www.seamedu.com/", aicte_ranking: 56 },
  { id: 36, name: "Aircamp Aviation Academy", link: "https://www.aircamp.in/", aicte_ranking: 58}
  
   
];
// Enhanced CORS configuration to allow your Vercel frontend
app.use(cors({
  origin: ['https://wiser-r.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.get("/api/colleges", (req, res) => {
  res.json(colleges);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
