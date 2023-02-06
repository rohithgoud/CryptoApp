import React from 'react'
import Navbar from './HomeComp/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nft = () => {



    const [nft,setNft] = useState([]);



    useEffect(()=>{
  
      const fetchNft = async()=>{
      try{
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/nfts/list?per_page=30`)
     
      setNft(data);
     
      }

      catch (error) {
        console.log("Error while fetching coins")
          
        }

    }
      
      fetchNft();
      
      }, [])

  return (
    


    


    <div>
      <Navbar/>
      
<div className='bg-gray-100 pt-10'>
<h1 className='text-3xl text-center font-semibold mb-4'>Trending Nft's</h1>
<div className='grid lg:grid-cols-4 gap-3 md:grid-cols-2 md:mx-4 mx-2
lg:mx-7'>
{
    nft.map((item)=>(

<div key={item.id} className="  cursor-pointer rounded-md bg-white">
      <div>
      <Link to={`/Nft/${item.id}`}>
       <div className="h-full flex  items-center border-gray-300  p-4" key={item.id}>
          <div className="flex-grow">
          <p className=" bg-gray-100 text-xl font-semibold" >Symbol: {item.symbol}</p>
            <h2 className="text-gray-900 title-font font-medium">Name: {item.name}</h2>
            <p className="text-gray-900">Asset platform: {item.asset_platform_id
}</p>


          </div>
        </div>

        </Link>
      </div>
      </div>



    ))
}
</div>
</div>

    </div>
  )
}

export default Nft
