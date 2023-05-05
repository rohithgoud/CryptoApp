import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Table = () => {
    const [coins,setcoins] = useState([]);



    useEffect(()=>{
  
      const fetchCoins = async()=>{
      try{
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=6`)
     
      setcoins(data);
     
      }
  
      catch (error) {
        console.log("Error while fetching coins")
          
        }
      }
      
      fetchCoins();
      
      }, [])
  
  return (
    <div className='md:border'>
      
    <div className='rounded-div pt-8 '>
      
      <table className='w-full border-collapse text-center'>
          <thead >
              <tr className='border-b'>
                  
                  <th className='text-lg font-semibold'>#</th>
                  <th className='text-left font-semibold text-lg'>Name</th>
               
                  <th className='text-lg font-semibold'>Price</th>
                  <th className='text-lg font-semibold'>Change</th>
                  <th className='hidden md:table-cell text-lg font-semibold'>Market cap</th>
                  
              </tr>
          </thead>
          <tbody>
           
    {
coins.map( (i)=>(

<>


<tr key={i.id} className='h-[75px] border-b hover:bg-gray-50  overflow-hidden'>

    <td key={i.id} className='text-gray-600 font-medium text-lg' >{i.market_cap_rank}</td>
    <td>
      <div className='flex items-center'>
        <img className='w-6 ml-2' src={i.image} alt={i.id} />
        <div className='w-[90px] hidden text-lg  sm:table-cell'><Link to={`/coin/${i.id}`} >{i.name}</Link></div>
        <div ><Link className='font-semibold text-gray-600 text-lg' to={`/coin/${i.id}`}>{i.symbol.toUpperCase()}</Link></div>
      </div>
    </td>

    <td><Link to={`/coin/${i.id}` } className=" text-lg">${i.current_price.toLocaleString()}</Link> </td>
    <td className={i.price_change_percentage_24h > 0 ? "text-green-500 text-lg" : "text-red-600 text-lg"}>{i.price_change_percentage_24h.toFixed(2)}%</td>

    <td className='w-[200px] hidden md:table-cell text-lg' > ${i.market_cap.toLocaleString()}</td>
  </tr>




  </>
        



))
}
          </tbody>
      </table>

</div>
</div>








  )
}

export default Table
