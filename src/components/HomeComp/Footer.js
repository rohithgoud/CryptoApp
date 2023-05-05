import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] pb-10 md:px-0 px-2 pt-2'>
    <div className=' md:w-[90%] w-[100%] flex justify-between md:flex-row flex-col  mx-auto'>
      <div>
      <h1 className=' text-3xl font-semibold cursor-pointer'>CoinX</h1>
      <p>@defi</p>
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-3 lg:pt-0 cursor-pointer md:pt-0'>Company</h3>
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 cursor-pointer md:pt-0'>Support</h3>
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 cursor-pointer md:pt-0'>Developers</h3>
    
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 cursor-pointer md:pt-0'>Learn</h3>
        
      </div>
    </div>
    </div>
  )
}

export default Footer
