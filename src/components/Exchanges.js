import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Navbar from './HomeComp/Navbar';
import Trending from './Trending';
import Footer from './HomeComp/Footer';





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
<div className='pt-10 mt-14 flex flex-col items-center'>
<div className='md:w-[95%] w-[100%]'>
<h1 className='lg:text-4xl md:text-2xl text-2xl font-semibold lg:ml-24 md:ml-14 ml-5 '>Top Cryptocurrency Exchanges</h1>
<p className=' text-lg text-gray-700 lg:ml-24 md:ml-14 ml-5 mt-2 mb-8'>Ranks and scores of exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.</p>
</div>
<div className='md:w-[80%] w-[100%]'>
<div>
      
      <div className='rounded-div pt-8 '>
        
        <table className='w-full border-collapse text-center'>
            <thead >
                <tr className='border-b'>
                    
                    <th className='text-lg font-semibold'>#</th>
                    <th className='text-left font-semibold text-lg'>Name</th>
                    <th className='text-lg font-semibold'>Trust Rank</th>
                    <th className='text-lg font-semibold'>Volume</th>
                    <th className='text-lg font-semibold hidden md:table-cell'>Country</th>
                   
                    
                </tr>
            </thead>
            <tbody>
{
  exchanges.map( (i)=>(

<>


<tr key={i.id} className='h-[75px] border-b hover:bg-gray-50  overflow-hidden'>

    <td key={i.id} className='text-gray-600 font-medium text-lg' >{i.trust_score_rank
}</td>
    <td>
   
        <a href={i.url} target="blank" className='flex items-center'><img className='w-6 ml-2' src={i.image} alt={i.id} />
        <div className='w-[90px]  text-lg  '> {i.name}</div></a>
      
    </td>
    <td key={i.id} className='text-gray-600 font-medium text-lg' >{i.trust_score_rank
}</td>
    <td>{Math.trunc(i.trade_volume_24h_btc)
}BTC</td>

    <td className='w-[200px] hidden md:table-cell text-lg' >{i.country}</td>
  </tr>




  </>

  ))
}

</tbody>
      </table>

</div>
</div>
</div>
</div>



<Trending/> 
 
    <Footer/>
    </>
  )
}

export default Exchanges
