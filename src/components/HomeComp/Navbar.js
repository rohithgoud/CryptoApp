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
    <div className='lg:h-[60px] md:h-[60px] h-[58px] bg-gray-50  '>
       
    <div  className="  lg:w-full flex lg:justify-evenly md:justify-evenly justify-between px-8 md:px-2 lg:px-0 items-center py-3  ">
        <h1 className=' hover-underline-animation text-3xl font-semibold cursor-pointer'><Link to="/">Cryptoverse</Link></h1>
        <ul className='hidden md:flex md:space-x-6 lg:space-x-12 '>
            <li className='text-lg  font-semibold '>
            <Link to="/">Home</Link>
            </li>
            <li className='text-lg font-semibold '>
            <Link to="/exchanges">Exchanges</Link>
            </li>
            <li className='text-lg  font-semibold '>
            <Link to="/coins">Coins</Link>  
            </li>
            
            <li className='text-lg  font-semibold '>
            <Link to="/Nft">NFT</Link>
            </li>
           
        

        </ul>
        <div className='hidden lg:inline-flex md:inline-flex'>
            <button className=' px-7 py-2 h-10 md:px-6 text-md hover:shadow-md rounded bg-[#3e1bdb] font-semibold text-white  '><Link to="/signup">Sign up</Link></button>
        </div>

        <div onClick={handleClick}>
         {toggle ?<AiOutlineClose className='md:hidden' size={20} />:<FaBars className = 'md:hidden ' size={20}/>} 
        </div>

      <ul className={toggle ? `md:hidden w-full shadow-md  flex flex-col absolute top-[55px] bg-gray-50 right-0 z-[2] h-auto  pt-3 pb-6 space-y-6 transition-all duration-500 ease-in-out  `: `absolute top-[-100%]`}  >
            <li className='text-lg hover:text-[#3e1bdb]    pl-6 pb-2'>
               <Link to="/">Home</Link>
            </li>
            <li className='text-lg  hover:text-[#3e1bdb]  pl-6    pb-2'>
            <Link to="/exchanges">Exchanges</Link>
            </li>
            <li className='text-lg hover:text-[#3e1bdb]  pl-6    pb-2'>
            <Link to="/coins">Coins</Link>  
            </li>
            <li className='text-lg  hover:text-[#3e1bdb] pl-6    pb-2'>
            <Link to="/Nft">NFT</Link>
            </li>
         
            
            <button className=' w-[90%] ml-5 mr-3 py-2 hover:shadow-md  bg-[black] text-white  rounded-sm text-lg font-semibold   '>Login</button>

            <button className=' w-[90%] ml-5 mr-3 py-2 hover:shadow-md  bg-[#3e1bdb]  rounded-sm font-semibold text-lg text-white  '><Link to="/signup">Sign up</Link></button>
        </ul>
        
        </div>

    </div>
  )
}

export default Navbar
