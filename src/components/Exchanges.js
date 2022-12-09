import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Navbar from './HomeComp/Navbar';

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
    <div>
<Navbar/>
<h1 className='lg:text-4xl md:text-2xl text-2xl font-semibold lg:ml-24 md:ml-14 ml-5 mt-10'>Top Cryptocurrency Exchanges</h1>
<p className=' text-lg text-gray-500 lg:ml-24 md:ml-14 ml-5 mt-2 mb-8'>Ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.</p>

{
  exchanges.map( (i)=>(

<div  key={i.id} >
          

<div className="flex flex-wrap items-center justify-center lg:justify-start md:justify-start lg:ml-24 md:ml-14  cursor-pointer ">
      <div className=" lg:w-1/2 md:w-[70%] w-[90%] "  >
       <a href={i.url} target="blank">
       <div className="h-full flex  items-center border-gray-300  p-4  hover:scale-[1.05] transition-all ease-in delay-50" key={i.id}>
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={i.image}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{i.name}</h2>
            <p className="text-gray-600">Rank: {i.trust_score_rank
}</p>
<p className='text-black'>Trade Volume 24h: {Math.trunc(i.trade_volume_24h_btc)
} BTC</p>
<p className='text-black'>Country: {i.country
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
  )
}

export default Exchanges
