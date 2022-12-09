import React from 'react'
import coolBackground from  './coolBackground.png';



const Hero = () => {


  return (
  <>
    <div className=" flex flex-col py-28 lg:flex-row text-center md:flex-row items-center justify-center "  style={{ backgroundImage: `url(${coolBackground})` }} >
      <div className='lg:mt-3'>
        <p className='lg:text-3xl md:text-xl text-gray-300 text-xl  py-4'>Welcome to Crypotverse</p>
        <h1 className='lg:text-8xl md:text-6xl text-4xl font-bold py-4 mt-2 mb-2 text-white '>Buy & Sell  Crypto 24/7</h1>
        
        <p className='lg:text-3xl  md:text-2xl text-lg text-white '>Invest in 200 different CryptoCurrencies in leading crypto exchanges.</p>
        <div className='mt-10'>
            
            <button className=' px-7 py-3  bg-[#3593f0]  lg:text-xl  rounded-md   text-white   '
           >Get Started</button>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Hero


