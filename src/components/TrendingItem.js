import React from 'react'
import { FaBitcoin } from "react-icons/fa"
import { Link } from "react-router-dom"


function TrendingItem({coin}) {
  return (
      <div className='bg-white'>
        <div className='rounded-div  rounded-md p-3  border'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='rounded-full' src={coin.item.small} alt={coin.item.id} />
                    <div>
                        <Link to={`/coin/${coin.item?.id}`}>
                            <h2 className='font-normal text-xl'>{coin.item.name}</h2>
                        </Link>
                        <h5 className='text-lg font-semibold text-gray-500'>{coin.item.symbol}</h5>
                    </div>
                </div>
                <div className='flex'>
                    <FaBitcoin color='orange' size={15} className="relative top-[6px] right-1"/>
                    <p className='text-lg'>{coin.item.price_btc?.toFixed(9)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingItem