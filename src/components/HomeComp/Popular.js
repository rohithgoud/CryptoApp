import React from 'react'

const Popular = () => {
  return (
    <div className='text-black flex flex-col items-center justify-center'>
        <div className='flex text-lg space-x-56'>
            <h3>Name</h3>
            <p>Price</p>
            <p>24h change</p>
        </div>
   <div className='flex space-x-56'>
   <h3 className='font-semibold text-2xl'>Bitcoin</h3>
          <p className='text-lg pr-4'>$15,000</p>
          <p className='font-semibold text-red-600'>2.47%</p>
   </div>
   <div>
   <h3 className='font-semibold text-2xl'>Ethereum</h3>
          <p className='text-xl'>$1050</p>
          <p className='font-semibold text-green-600'>2.47%</p>
   </div>
   <div>
   <h3 className='font-semibold text-2xl'>BNB Coin</h3>
          <p className='text-xl'>$245</p>
          <p className='font-semibold text-red-600'>2.47%</p>
   </div>
   <div>
   <h3 className='font-semibold text-2xl'>Matic</h3>
          <p className='text-xl'>$0.745</p>
          <p className='font-semibold text-red-600'>2.47%</p>
   </div>
   <div>
   <h3 className='font-semibold text-2xl'>USDT</h3>
          <p className='text-xl'>$1.05</p>
          <p className='font-semibold text-green-600'>2.47%</p>
   </div>
   
    </div>
  )
}

export default Popular
