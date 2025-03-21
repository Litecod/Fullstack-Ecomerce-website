import React, { useState } from "react";
import { assets } from "../assets/assets";

const NewsLetterBox = () => {
  //const [email, setEmail] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center relative md:h-[50vh]">
      <div className="absolute w-full md:flex justify-between -z-10 hidden">
        <img src={assets.newsOne} alt="" />
        <img src={assets.newsTwo} alt="" />
      </div>
      <div className=" md:pt-[10rem]">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe To Our Newsletter
        </p>
        <p className="text-gray-400 mt-3">
          Lorem Ipus is simple dummy text of thr printing and typesetting
          industry
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded"
        >
          <input
            className="w-full sm:flex-1 outline-none rounded"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-sm px-10 py-4 rounded"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;
