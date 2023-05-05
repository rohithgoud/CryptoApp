import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    const handleClick = () => {
        setToggle(!toggle)
    }

  return (
    <nav className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <span className="self-center text-3xl font-bold text-emerald-500 whitespace-nowrap">CoinX</span>
    </Link>
    <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <FaBars size={20}/>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 hover:text-emerald-500 rounded  md:p-0">Home</Link>
        </li>
        <li>
          <Link to="/exchanges" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0 ">Exchanges</Link>
        </li>
        <li>
          <Link to="/coins" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0  ">Coins</Link>
        </li>
        <li>
          <Link to="/Nft" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0  md:dark:hover:text-emerald-500 t">NFT</Link>
        </li>
        <li>
       < button className=' px-7 py-2  h-10 md:px-6 text-md hover:shadow-md rounded border bg-emerald-500 text-white transition-all duration-100 font-semibold   '><Link to="/signup">Get Started</Link></button>
        </li>
      </ul>
    </div>
  </div>





     <div  className={toggle ? `w-full bg-white transition-all duration-500 ease-in-out md:hidden py-4`: `hidden z-[1]`}>
<ul>
<li>
          <Link to="/" className="block py-2 pl-3 pr-4 font-semibold  hover:text-emerald-500" >Home</Link>
        </li>
        <li>
          <Link to="/exchanges" className="block py-2 pl-3 pr-4 text-gray-900  font-semibold rounded hover:text-emerald-500 ">Exchanges</Link>
        </li>
        <li>
          <Link to="/coins" className="block py-2 pl-3 pr-4 text-gray-900 rounded  font-semibold hover:text-emerald-500">Coins</Link>
        </li>
        <li>
          <Link to="/Nft" className="block py-2 pl-3 pr-4 text-gray-900 rounded font-semibold hover:text-emerald-500 ">NFT</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded font-semibold hover:text-emerald-500 ">Contact</Link>
        </li>
    
</ul>
<button className=' w-[90%] ml-5 mr-3 py-2 hover:shadow-md bg-emerald-500  text-white border   rounded-sm text-lg font-semibold mt-4'>Login</button>

            <button className=' w-[90%] ml-5 mr-3 py-2 mt-2 hover:shadow-md  border border-emerald-500 text-black  rounded-sm font-semibold text-lg   '><Link to="/signup">Sign up</Link></button>
     </div>





</nav>


  )
}

export default Navbar
