import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CartTotalOrder from "../components/CartTotalOrder";


const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []

      for(const items in cartItems) {
        for(const item in cartItems[items]) {
          if(cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {

        // Api calls for COD
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData,{headers: {token}})
          if(response.data.success) {
            setCartItems({})
            navigate("/orders")
          }else {
            toast.error(response.data.message)
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(backendUrl + "/api/order/stripe", orderData,{headers: {token}})
          
          if(responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          }else {
            console.log(responseStripe)
            toast.error(responseStripe.data.message)
          }
          break;

        case "paystack":
          const responsePaystack = await axios.post(backendUrl + "/api/order/stripe", orderData,{headers: {token}})
          if(responsePaystack.data.success) {
            window.location.href = responsePaystack.data.authorization_url
          }else {
            console.log(responsePaystack)
            toast.error(responsePaystack.data.message)
          }
        break;
      
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  

  return (
    
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* left side */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div className="text-2xl mb-3 float-left">
            <p className="text-[#8b5100]">DELIVERY ADDRESS</p>
          </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            required
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={onChangeHandler}
            required
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          onChange={onChangeHandler}
          required
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Adress"
        />
        <input
          onChange={onChangeHandler}
          required
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            required
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            required
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            required
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zip Code"
          />
          <input
            onChange={onChangeHandler}
            required
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          onChange={onChangeHandler}
          required
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* Right Sidde */}
      <div className="">
        <div className=" min-w-80">
          <CartTotalOrder />
        </div>
        <div className="mt-12">
        <div className="text-2xl mb-3 ">
            <p className="text-[#8b5100]">SELECT PAYMENT METHOD</p>
          </div>

          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row mt-[3rem]">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("paystack")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "paystack" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.paystack_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
            type="submit"
              className="bg-black text-white py-3 px-16 text-sm"
            >
              PLEASE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
