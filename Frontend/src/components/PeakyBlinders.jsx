import { assets } from "../assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const PeakyBlinders = () => {
  return (
    <div className="pt-[5rem] flex bg-gray-100 rounded pr-[2rem] justify-between">
      <div className="relative w-full md:w-[50%]">
        <img src={assets.peaky} alt="" />
        <img
          className="absolute top-[1rem] left-[-1rem] h-[28.5rem] hidden xl:block"
          src={assets.points}
          alt=""
        />
      </div>
      <div className="w-[50%] hidden md:block max-w-[30rem] mt-[-3rem] lg:mt-0">
        <div className="flex flex-col md:gap-[0.5rem] lg:gap-[1rem]">
          <p className="text-gray-500">Women Collection</p>
          <h1 className="prata-regular text-[2rem] lg:text-[3rem]">Peaky Blinders</h1>
          <p className="underline">DESCRIPTION</p>
          <p className="text-gray-500 text-[0.8rem] lg:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>
          <p>₦100,000.00</p>
          <Link className="px-[1rem] py-[0.8rem] bg-[#000] text-[#fff] hover:bg-gray-800 duration-150 rounded max-w-[8rem] text-center" to={"/"}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeakyBlinders;
