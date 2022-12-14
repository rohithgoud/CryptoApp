import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Navbar from './HomeComp/Navbar'
import { Link } from 'react-router-dom'

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
    <div>
      <Navbar/>


    <div className='flex w-24 mt-4 ml-20'>
<select value={currency}  onChange={changeCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="inr">inr</option>
  <option value="eur">eur</option>
  <option value="usd">usd</option>

</select></div>

      <div className='lg:mx-20'>
      
      <div className='rounded-div my-10 py-4'>
        
        <table className='w-full border-collapse text-center'>
            <thead className='dark:text-white'>
                <tr className='border-b'>
                    
                    <th>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden md:table-cell'>Market cap</th>
                    
                </tr>
            </thead>
            <tbody className='dark:text-white'>
             
      {
  coins.map( (i)=>(

< >


<tr className='h-[75px] border-b overflow-hidden hover:bg-gray-100'>
  
      <td  key={i.id}>{i.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 ml-2' src={i.image} alt={i.id} />
          <div className='w-[90px] hidden sm:table-cell'><Link to={`/coin/${i.id}`}>{i.name}</Link></div>
        </div>
      </td>
      <td>
        <div><Link to={`/coin/${i.id}`}>{i.symbol.toUpperCase()}</Link></div>
      </td>
      <td>{currencySymbol} {i.current_price.toLocaleString()}</td>
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
    </div>
  )
}

export default Coins


