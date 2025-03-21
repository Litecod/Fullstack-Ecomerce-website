import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
    const {currency} = useContext(ShopContext)
  return (
  <Link className="text-gray-700 cursor-pointer rounded p-[0.5rem] shadow-sm shadow-[#f3f3f336] bg-[#faf9f9] text-center" to={`/product/${id}`}>
    <div className="overflow-hidden rounded">
        <img className="hover:scale-110 transition ease-in-out w-full" src={image[0]} alt="" />
    </div>
    <p className="pt-3 pb-1 text-sm text-[#8b5100]">{name}</p>
    <p className="font-medium text-[1.2rem]">{currency} {price}.00</p>
  </Link>
);
};

export default ProductItem;
