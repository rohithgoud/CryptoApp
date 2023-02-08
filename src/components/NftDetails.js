import React from 'react'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './HomeComp/Navbar'

const NftDetails = () => {
    const [nft,setNft] = useState([]);

    const params = useParams()

    useEffect(()=>{
  
      const fetchNft = async()=>{
      try{
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/nfts/${params.id}`)
     
      setNft(data);
  

  
      }

      catch (error) {
        console.log("Error while fetching coins")
          
        }

    }
      
      fetchNft();
      
      }, [])
  return (
    <>
      <Navbar/>


<section className="body-font  bg-black text-white pb-56">
  <div className="container flex py-24 md:flex-row flex-col justify-center items-center">
    <div className=" lg:w-[25%] lg:pl-20 md:pl-10 pl-10 md:w-1/2 w-5/6 mb-10 md:mb-0 ">
     {nft.image ? <img className=' h-56 w-56 object-cover object-center rounded' src={nft.image.small} alt='' /> : null}
    </div>
    <div className="lg:flex-grow md:w-[40%] pl-2 flex flex-col ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">{nft.name}</h1>
      {nft.floor_price?<p className='  leading-relaxed lg:text-xl text-lg font-semibold'>Price: {nft.floor_price.usd} USD</p>:null}
      <p className='lg:text-xl text-sm font-semibold'>Contract address: {nft.contract_address
}</p>
<p className=" leading-relaxed">Total supply: {nft.total_supply}</p>
      <p className=" leading-relaxed">{nft.description}</p>
    </div>
  </div>
</section>

    </>
  )
}

export default NftDetails
