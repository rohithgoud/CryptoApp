import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import "./Animation.css"
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    const handleClick = () => {
        setToggle(!toggle)
    }

  return (
    <div className='lg:h-[60px] md:h-[60px] h-[58px] bg-black text-white'>
       
    <div  className="  lg:w-[100%]   flex lg:justify-evenly md:justify-evenly justify-between px-8 md:px-2 lg:px-0 items-center py-3  ">
        <h1 className=' hover-underline-animation text-3xl font-semibold  cursor-pointer'>D e F i</h1>
        <ul className='hidden md:flex md:space-x-6 lg:space-x-12 '>
            <li className='text-md  hover-underline-animation  '>
            <Link to="/">Home</Link>
            </li>
            <li className='text-md  hover-underline-animation '>
            <Link to="/exchanges">Exchanges</Link>
            </li>
            <li className='text-md  hover-underline-animation '>
            <Link to="/coins">Coins</Link>  
            </li>
            
            <li className='text-md   hover-underline-animation'>
            <Link to="/coin/:id">Coindetails</Link>
            </li>
           
        

        </ul>
        <div className='hidden lg:inline-flex md:inline-flex'>
            <button className=' px-7 py-2 h-10 md:px-6 text-sm hover:shadow-md  bg-[#3593f0]  rounded-sm font-semibold   '>Sign up</button>
        </div>

        <div onClick={handleClick}>
         {toggle ?<AiOutlineClose className='md:hidden' size={20} />:<FaBars className = 'md:hidden ' size={20}/>} 
        </div>

      <ul className={toggle ? `md:hidden w-full shadow-md  flex flex-col absolute top-[55px] bg-black right-0 z-[2] h-auto  pt-3 pb-6 space-y-6 transition-all duration-1000 ease-in-out  `: `absolute top-[-100%]`}  >
            <li className='text-lg hover:text-[#3593f0]    pl-6 pb-2'>
               <Link to="/">Home</Link>
            </li>
            <li className='text-lg  hover:text-[#3593f0]  pl-6    pb-2'>
            <Link to="/exchanges">Exchanges</Link>
            </li>
            <li className='text-lg hover:text-[#3593f0]  pl-6    pb-2'>
            <Link to="/coins">Coins</Link>  
            </li>
            <li className='text-lg  hover:text-[#3593f0] pl-6    pb-2'>
            <Link to="/coin/:id">Coindetails</Link>
            </li>
         
            
            <button className=' w-[90%] ml-5 mr-3 py-2 hover:shadow-md  bg-[white] text-black  rounded-sm text-lg font-semibold   '>Login</button>

            <button className=' w-[90%] ml-5 mr-3 py-2 hover:shadow-md  bg-[#3593f0]  rounded-sm font-semibold text-lg   '>Sign up</button>
        </ul>
        
        </div>

    </div>
  )
}

export default Navbar
