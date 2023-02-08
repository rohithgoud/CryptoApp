import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Navbar from './HomeComp/Navbar';
import Trending from './Trending';





const Exchanges = () => {

const [exchanges,setExchanges] = useState([]);


useEffect(()=>{

const fetchExchanges = async()=>{

const {data} = await axios.get(`${server}/exchanges?per_page=50`)
setExchanges(data);
}

fetchExchanges();



}, [])

  return (
    <>
<Navbar/>
<div className='bg-black text-white pt-10'>
<h1 className='lg:text-4xl md:text-2xl text-2xl font-semibold lg:ml-24 md:ml-14 ml-5 '>Top Cryptocurrency Exchanges</h1>
<p className=' text-lg text-gray-300 lg:ml-24 md:ml-14 ml-5 mt-2 mb-8'>Ranks and scores of exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.</p>
<div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 md:mx-4 mx-2
lg:mx-7'>
{
  exchanges.map( (i)=>(

<div  key={i.id} >
          

<div className=" bg-gray-900  cursor-pointer  hover:bg-gray-800 duration-300  rounded-md ">
      <div  >
       <a href={i.url} target="blank">
       <div className="h-full flex  items-center border-gray-300  p-4" key={i.id}>
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={i.image}/>
          <div className="flex-grow">
            <h2 className=" title-font font-medium">{i.name}</h2>
            <p className="text-gray-300">Rank: {i.trust_score_rank
}</p>
<p >Trade Volume 24h: {Math.trunc(i.trade_volume_24h_btc)
} BTC</p>
<p>Country: {i.country
}</p>
          </div>
        </div>

       </a>
      </div>
      </div>


     

</div>

  ))
}

</div>
</div>



<Trending/> 
 
    
    </>
  )
}

export default Exchanges
