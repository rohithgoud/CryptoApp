import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {


  return (
  <>
    <div className=" flex flex-col py-20 lg:flex-row text-center md:flex-row items-center justify-center " >
      <div className='lg:mt-3'>
        <p className='lg:text-4xl md:text-2xl font-bold  text-xl  py-2'>Welcome to Crypotverse</p>
        <h1 className='lg:text-9xl    md:text-7xl text-5xl font-extrabold py-3 mt-1 mb-1  '>Buy & Sell</h1>
        <h1 className='lg:text-9xl  text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600 md:text-7xl text-5xl font-extrabold pt-2 pb-5  mb-4  '>Crypto 24/7</h1>
        <p className='lg:text-3xl  md:text-2xl text-lg font-semibold text-gray-700 mt-2 '>Invest in 200 different CryptoCurrencies </p>
        <p className='lg:text-3xl   md:text-2xl text-lg font-semibold text-gray-700'>in leading crypto exchanges.</p>
        <div className='mt-10'>
            
            <button className=' px-7 py-3  bg-[#3e1bdb]  lg:text-xl   text-white   '
           ><Link to="/signup">Get Started</Link></button>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Hero


