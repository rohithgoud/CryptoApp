import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {


  return (
  <>
    <div className=" flex flex-col md:py-18 py-12 lg:flex-row text-center lg:px-28 px-0 md:flex-row items-center justify-center mt-14 " >
      <div className='lg:mt-3'>
        <p className='lg:text-6xl  md:text-5xl text-3xl font-semibold  mt-4 '>Invest in 200 different CryptoCurrencies in leading crypto exchanges. </p>
        <p className='lg:text-6xl  md:text-5xl text-3xl font-semibold md:mt-4 mt-1'></p>
        <div className='mt-10'>
            <button className=' px-7 py-3 rounded bg-emerald-500 text-white font-semibold lg:text-xl '
           ><Link to="/signup">Get Started</Link></button>
        </div>
      </div>
    
    </div>
  
  </>
  )
}

export default Hero


