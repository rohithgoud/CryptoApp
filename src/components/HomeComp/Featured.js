import React from 'react'
// import {FiArrowDown, FiArrowUpRight} from 'react-icons/fi'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {

  
  const [coins,setcoins] = useState([]);



  useEffect(()=>{

    const fetchCoins = async()=>{
    
    const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=6`)
   
    setcoins(data);
    
    }
    
    fetchCoins();
    
    }, [])



  return (
    <div className='  flex flex-col items-center justify-center  text-black px-3 lg:flex-row lg:gap-3 py-10 '>
      <div className='space-y-3'>
        <h2 className='lg:text-4xl md:text-4xl text-3xl  font-semibold '>Explore top Crypto's like <br></br> Bitcoin, Ethereum, and Dogecoin.</h2>
        <p className='text-xl font-semibold'>Check all available coins </p>
        <button className=' px-7 py-3  bg-[#3593f0] rounded-md  text-white text-xl   '><Link to='/coins'>See more coins</Link></button>
      </div>

      <div className='mt-10 grid gap-3 lg:grid-cols-3 lg:gap-4 md:grid-cols-3 px-2 my-6 md:gap-4 grid-cols-2'>
        
      {
  coins.map( (i)=>(

<div className=' hover:scale-[1.05] transition-all ease-in delay-50 text-black w-36  h-36 px-4 py-4 rounded-lg shadow-lg cursor-pointer lg:w-54 md:w-44 '>
       <div className='flex'>
       <img className='w-6 mr-1' src={i.image} alt={i.id} />
          <h3 className='font-semibold text-xl'><Link to={`/coin/${i.id}`}>{i.name}</Link></h3>
       </div>
          <div className='ml-4'>
          <p className='text-xl '>${i.current_price.toLocaleString()}</p>
          <p className={i.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{i.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        </div>
          



  ))
}


        
      </div>




      

  

    </div>
  )
}

export default Featured
