import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Email from './Components/Email/Email'
import Tutors from './Components/Tutors/Tutors'
import Courses from './Components/Courses/Courses'
import Colleges from './Components/Colleges/Colleges'
import { Routes, Route, BrowserRouter } from "react-router"
import StudyMaterials from './Components/StudyMaterials/StudyMaterials'
import NavbarBanner from './Components/Navbar/NavbarBanner'

 

const App = () => {
  return (
    <>
     <Navbar/>
     <NavbarBanner/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/tutors" element={<Tutors/>}/>
        <Route path="/colleges" element={<Colleges/>}/>
        <Route path="/materials" element={<StudyMaterials/>}/>


      </Routes>
     </BrowserRouter>
     
     <Email/>

    </>
  )
}

export default App