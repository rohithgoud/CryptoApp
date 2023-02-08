import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {


  return (
  <>
    <div className=" flex flex-col md:py-18 py-12 lg:flex-row text-center md:flex-row items-center justify-center " >
      <div className='lg:mt-3'>
        <p className='lg:text-8xl md:text-7xl font-bold  text-5xl  py-2'>Cryptoverse</p>
       
        <p className='lg:text-3xl  md:text-2xl text-lg font-semibold text-gray-300 mt-4 '>Invest in 200 different CryptoCurrencies </p>
        <p className='lg:text-3xl text-gray-300  md:text-2xl text-lg font-semibold '>in leading crypto exchanges.</p>
        <div className='mt-10'>
            
            <button className=' px-7 py-3 rounded bg-white text-black font-semibold lg:text-xl '
           ><Link to="/signup">Get Started</Link></button>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Hero


