import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Navbar from './HomeComp/Navbar'
import { Link } from 'react-router-dom'
import Trending from './Trending'

const Coins = () => {
  const [coins,setcoins] = useState([]);
  const [currency,setCurrency] = useState("inr")
 
 
  
  const currencySymbol =currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changeCurrency = (e)=>{
 
setCurrency(e.target.value)
  }
  


  useEffect(()=>{

    const fetchCoins = async()=>{
    try{
    const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&per_page=50`)

    setcoins(data);
    
    }
  

    catch (error) {
    console.log("Error while fetching coins")
      
    }
  };
    
    fetchCoins();
    
    }, [currency])



  return (
    <div className='bg-black text-white'>
      <Navbar/>

<h1 className='text-2xl lg:text-5xl lg:mb-4 font-semibold lg:ml-28 ml-1 mt-4'>Today's cryptocurrency<br/>prices</h1>
<p className='text-md text-gray-300 lg:ml-28 my-2 ml-1'>View the latest trends in cryptocurrency prices.</p>
    <div className='flex w-20 mt-4 lg:ml-28 ml-2 '>
<select value={currency}  onChange={changeCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="inr">INR</option>
  <option value="eur">EUR</option>
  <option value="usd">USD</option>

</select></div>

      <div className='lg:mx-20 bg-gray-900  text-white'>
      
      <div className='rounded-div my-10 py-4'>
        
        <table className='w-full border-collapse text-center'>
            <thead >
                <tr className='border-b'>
                    
                    <th>no</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden md:table-cell'>Market cap</th>
                    
                </tr>
            </thead>
            <tbody>
             
      {
  coins.map( (i)=>(

<>


<tr key={i.id} className='h-[75px] border-b hover:bg-gray-800 overflow-hidden'>
  
      <td key={i.id} >{i.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 ml-2' src={i.image} alt={i.id} />
          <div className='w-[90px] hidden  sm:table-cell'><Link to={`/coin/${i.id}`} className='font-bold'>{i.name}</Link></div>
        </div>
      </td>
      <td>
        <div ><Link className='font-semibold text-lg' to={`/coin/${i.id}`}>{i.symbol.toUpperCase()}</Link></div>
      </td>
      <td><Link to={`/coin/${i.id}` } className="font-semibold text-md">{currencySymbol} {i.current_price.toLocaleString()}</Link> </td>
      <td className={i.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{i.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='w-[200px] hidden md:table-cell'>{currencySymbol} {i.total_volume.toLocaleString()}</td>
      <td className='w-[200px] hidden md:table-cell' >{currencySymbol} {i.market_cap.toLocaleString()}</td>
    </tr>




    </>
          



  ))
}
            </tbody>
        </table>

</div>
</div>
<Trending/>
    </div>
  )
}

export default Coins


