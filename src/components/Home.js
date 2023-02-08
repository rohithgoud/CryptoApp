import React from 'react'
import Context from './HomeComp/Context'
import Featured from './HomeComp/Featured'
import Hero from './HomeComp/Hero'
import Navbar from './HomeComp/Navbar'
import Footer from './HomeComp/Footer'

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Context/>
      <Footer/>
    </div>
  )
}

export default Home
