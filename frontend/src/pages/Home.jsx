import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/HomeBanner'
import HomeVehicle from '../components/HomeVehicle'
// import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeVehicle/>
      <Footer/>
    </div>
  )
}

export default Home
