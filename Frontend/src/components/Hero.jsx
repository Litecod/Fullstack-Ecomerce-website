import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex md:grid md:grid-cols-[3fr_3fr] lg:grid-cols-[3fr_4fr_3fr] mt-[2rem] justify-between gap-6 rounded">
      {/**hero left side */}
      <div className="relative overflow-y-hidden xl:h-[39rem] pt-[6rem] bg-gray-200 hidden md:block">
        <img src={assets.hero_img_left} alt="" />
      </div>

      {/* hero middle */}

      <div className=" md:overflow-y-hidden xl:h-[39rem] w-full items-center justify-center">
        <img className=" bg-gray-200 rounded w-full" src={assets.hero_img_top} alt="" />
        <div className=" flex flex-col text-center">
          <p className="text-[3rem] md:text-[5rem]">ULTIMATE</p>
          <p className="text-[5rem] md:text-[8rem] mt-[-2rem] lg:mt-[-4rem] sale">SALE</p>
          <p className="md:mt-[-2rem]">NEW COLLECTION</p>
          <Link to={"/collection"} className="w-[8rem] px-3 py-2 bg-black text-white my-3 rounded mx-auto">Shop Now</Link>
        </div>
        <img className="w-full" src={assets.hero_img_buttom} alt="" />
      </div>
      
      {/**Hero right side  */}
      <div className="relative overflow-y-hidden xl:h-[39rem] pt-[6rem] bg-gray-200 px-[4rem] rounded hidden lg:block">
        <img src={assets.hero_img_right} alt="" />
      </div>
    </div>
  );
};

export default Hero;
