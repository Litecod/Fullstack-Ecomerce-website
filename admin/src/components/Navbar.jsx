import React from "react"
import {assets} from "../assets/assets"
import { Link } from "react-router-dom"

const Navbar = ({setToken}) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%] bg-[#fff] fixed w-full">
        <Link to="/">
        <h1 className="logo text-[1.5rem] md:text-[2rem]">LITE SHOPPY<span className="text-[#8b5100]">.</span></h1>
        </Link>
        <button onClick={() => setToken("")} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar