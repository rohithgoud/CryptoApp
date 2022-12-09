import React from 'react'

const Footer = () => {
  return (
    <div className=' text-black '>
    <div className='   grid lg:grid-cols-5 md:grid-cols-4 pt-10 lg:gap-10 md:gap-10 lg:px-36 md:px-32 px-10 '>
      <div>
      <h1 className=' text-3xl font-semibold cursor-pointer'>D e F i</h1>
      <p>@defi</p>
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-3 lg:pt-0 md:pt-0'>Company</h3>
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 md:pt-0'>Support</h3>
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 md:pt-0'>Developers</h3>
    
        
      </div>
      <div>
        <h3 className='font-semibold text-xl pt-4 lg:pt-0 md:pt-0'>Learn</h3>
        
      </div>
    </div>
    </div>
  )
}

export default Footer
