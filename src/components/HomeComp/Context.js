import React from 'react'
import Trade from './trade.png'
const Context = () => {
  return (
    <div className='  flex flex-col items-center justify-center space-y-5 lg:flex-row md:flex-row lg:gap-0 md:gap-0 mx-38 '>
      <div >
     <img src={Trade} alt="trade" className='lg:h-[538px] lg:w-[322px] md:h-[456px] md:w-[256px] h-[468px] w-[256px]'/>
      </div>
      <div className='lg:mr-20 px-4 lg:h-[280px] lg:w-[686px] md:h-[280px] md:w-[486px] md:py-5  lg:py-10 rounded-md py-2 '>
        <h2 className='lg:text-4xl md:text-3xl text-2xl font-semibold'>Trade like a PRO</h2>
        <p className='text-lg  lg:text-xl md:text-lg font-semibold mt-3'>Trade assets, manage your holdings, and set recurring buys <br></br>on the crypto platforms.</p>
      </div>
    </div>
  )
}

export default Context
