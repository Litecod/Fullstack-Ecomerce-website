import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₦"

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className=" min-h-screen bg-gray-100 px-[0.5rem] max-w-[1550px]">
      <ToastContainer />
      {token !== "" ? (
        <>
          <Navbar setToken={setToken} />
          <div className="flex w-full gap-[1rem] pt-[3.2rem] md:pt-[4rem]">
            <Sidebar />
            <div className="w-[80%] sm:w-[77%] md:w-[75%] lg:w-[85%] mx-auto my-3 sm:my-8 md:my-6 lg:my-10 text-gray-600 text-base bg-[#fff] ml-[17%] sm:ml-[19%] md:ml-[22%] lg:ml-[13%]">
              <Routes>
                <Route path="/" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
};

export default App;
