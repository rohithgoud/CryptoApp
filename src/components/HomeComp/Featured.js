import React from 'react'
import Table from '../Table'
import { Link } from 'react-router-dom';

const Featured = () => {



  return (
    <div className='  flex flex-col items-center w-[100%]'>
      <div className='bg-black text-white w-[100%] py-6 md:px-0 px-2'>
       <div className='md:w-[75%] w-[100%] m-auto'>
       <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold '>Explore top Crypto's like Bitcoin, Ethereum, and Dogecoin.</h2>
        <p className='text-xl text-gray-100 mt-3'>Trade assets, manage your holdings, and set recurring buys
on the crypto platforms.</p>
        <button className='mt-3 px-7 py-3 rounded border bg-emerald-500  text-xl  text-black border-black'><Link to="/coins">See more coins </Link></button>
       </div>
      </div>

   <div className='md:w-[75%] w-[100%] md:my-28 my-6'>
   <Table/>
   </div>

    </div>
  )
}

export default Featured
