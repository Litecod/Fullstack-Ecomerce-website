import { assets } from '../assets/assets'
import React from 'react'

const Company = () => {
  return (
    <div className='w-full flex mt-[3rem] justify-between gap-2'>
        <img className='w-[15%]' src={assets.channel} alt="" />
        <img className='w-[15%]' src={assets.louis} alt="" />
        <img className='w-[15%]' src={assets.prada} alt="" />
        <img className='w-[15%]' src={assets.calvin} alt="" />
        <img className='w-[15%]' src={assets.denim} alt="" />
    </div>
  )
}

export default Company