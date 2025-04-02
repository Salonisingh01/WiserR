import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner/Banner2'
import Cards from './Components/Cards/cards'
import Email from './Components/Email/Email'


const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Services/>
     <Banner/>
     <Cards/>
     <Banner2/>
     <Email/>

    </>
  )
}

export default App