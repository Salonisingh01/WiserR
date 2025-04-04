import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Tutors from './Components/Tutors/Tutors'
import Courses from './Components/Courses/Courses'
import Colleges from './Components/Colleges/Colleges'
import { Routes, Route, BrowserRouter } from "react-router"
import StudyMaterials from './Components/StudyMaterials/StudyMaterials'
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/materials" element={<StudyMaterials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />


        </Routes>
       
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App