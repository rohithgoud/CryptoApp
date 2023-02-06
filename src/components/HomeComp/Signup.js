import React from 'react'
import Navbar from './Navbar'



const Signup = () => {
  return (
    <>
  <Navbar/>
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className="lg:text-5xl md:text-5xl font-bold md:mb-6 text-4xl  py-2">Create an account</h1>
  
     <div className="lg:w-[35%] md:w-1/2 bg-gray-100 rounded-lg px-8  py-10 flex flex-col  w-full lg:mt-6 mt-6 md:mt-0">

      <div className="mb-4">
        <label  className=" text-md text-gray-600">Email</label>
        <input type="email"  name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="mb-4">
        <label  className=" text-md text-gray-600">Password</label>
        <input type="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"/>
      </div>
      
      <div className='mb-3 flex'>
      <input id="link-checkbox" type="checkbox" value="" className=" mt-[1px]  w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded  "/>
        <p className='text-md text-gray-600 ml-2'>
I certify that I am 18 years of age or older, I agree to the User Agreement, and I have read the Privacy Policy.</p>
      </div>
      <button className="text-white bg-[#3e1bdb]  border-0 py-2 px-8 focus:outline-none rounded text-lg">Sign up</button>
      <p className='text-md text-center text-gray-500'>or</p>
      <button className="text-white bg-black  border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
    </div>
  </div>
    </>
  )
}

export default Signup
