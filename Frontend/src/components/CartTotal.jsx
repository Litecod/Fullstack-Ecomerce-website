import { ShopContext } from '../context/ShopContext'
import React, { useContext } from 'react'
import Title from './Title';

const CartTotal = () => {

  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  

  return (
    <div className='w-full'>
      <div className="text-2xl mb-3 ">
      <p className="text-[#8b5100]">SUMMARY</p>
      </div>
      <div className="flex flex-col gap-[1.2rem] mt-[5rem] text-[1rem] text-gray-500 ">
        <hr className='border-gray-200'/>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Taxes</p>
          <p>{currency} 0.00</p>
        </div>
        <hr className='border-gray-200'/>
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal;