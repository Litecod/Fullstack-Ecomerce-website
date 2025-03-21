import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-30">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <Link to="/">
            <h1 className="sale text-[2rem]">
              LITE SHOPPY<span className="text-[#8b5100]">.</span>
            </h1>
          </Link>
          <p className="w-full md:w-2/3 text-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam qui
            dolor doloremque. Facilis aut iusto est sit autem unde ratione
            reprehenderit ut mollitia sunt quae voluptatem, fugiat rem dolorem
            quasi?
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gsp-1 text-gray-600">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gsp-1 text-gray-600">
            <li className="">+234-212-444-5287</li>
            <li className="">test@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 flex gap-1 text-sm text-center items-center mx-auto w-full">
          {" "}
          Copyright 2025{" "}
          <span>
            <FaCopyright />
          </span>{" "}
          Litecod.com - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
