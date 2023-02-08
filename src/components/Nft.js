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
      
<div className='bg-black pt-10 text-white'>
<h1 className='text-3xl text-center font-semibold mb-4'>Trending Nft's</h1>
<div className='grid lg:grid-cols-4 gap-3 md:grid-cols-2 md:mx-4 mx-2
lg:mx-7'>
{
    nft.map((item)=>(

<div key={item.id} className=" hover:bg-gray-800  cursor-pointer rounded-md bg-gray-900">
      <div>
      <Link to={`/Nft/${item.id}`}>
       <div className="h-full flex  items-center  p-4" key={item.id}>
          <div className="flex-grow">
          <p className="  text-xl font-semibold rounded-md px-1 bg-gray-300 text-black" >Symbol: {item.symbol}</p>
            <h2 className=" title-font font-medium">Name: {item.name}</h2>
            <p >Asset platform: {item.asset_platform_id
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
