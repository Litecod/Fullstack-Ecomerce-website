import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(false);
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const clickLog = () => {
    setEmail("admin@lite.com")
    setPassword("lite1234567890-")
  }
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-gray-50 shadow-md rounded-lg w-full max-w-[30rem]">
        <div className=" text-center bg-white py-6 rounded-tl-lg rounded-tr-lg">
          <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
          <p>Only Authorised Users</p>
        </div>
        <form onSubmit={onSubmitHandler} className="px-8 py-6">
          <div className="mb-3 ">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={ email}
              className="rounded-md w-full px-3 py-2 bg-gray-200 outline-[#8b5100]"
              type="email"
              placeholder="youremail@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 bg-gray-200 outline-[#8b5100]"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
          <button onClick={() => clickLog()} className="underline text-gray-500 mt-4">test login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
