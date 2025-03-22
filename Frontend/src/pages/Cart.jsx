import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import React, { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);
  return (
    <div className="pt-14">
      <div className="flex flex-col md:flex-row gap-[4rem] justify-between">
        <div className="w-full md:w-[65%]">
          <div className="text-2xl mb-3 sm:float-left">
            <p className="text-[#8b5100]">CART</p>
          </div>
          <div className="hidden sm:grid sm:grid-cols-[0.7fr_0.2fr_2fr_1fr_1fr_0.5fr_0.5fr] mt-[5rem]">
                  <p>Item</p>
                  <p></p>
                  <p>Name</p>
                  <p>Quantity</p>
                  <p>Size</p>
                  <p>Amount</p>
                  <p className="text-center">X</p>
                </div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div className=" ">
                <div
                  className="py-4 rounded border-gray-200 mt-[1rem] border-t border-b text-gray-700 grid grid-cols-[1fr_3fr_0.5fr_0.3fr] sm:grid-cols-[0.7fr_0fr_2fr_1fr_1fr_0.5fr_0.5fr] items-center gap-4"
                  key={index}
                >
                  <div className="flex items-start gap-1">
                    <img
                      src={productData.image[0]}
                      alt=""
                      className="w-16 sm:w-20"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-[0.7rem] sm:text-[1rem] sm:hidden font-medium">
                      {productData.name}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 sm:hidden w-9 border bg-slate-50 rounded">
                      {item.size}
                    </p>
                    <p className="sm:hidden">
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                  <p className="text-[0.7rem] sm:text-[1rem] hidden sm:block font-medium">
                    {productData.name}
                  </p>
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className=" bg-gray-100 border border-gray-400 rounded max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <p className="px-2 sm:px-3 hidden sm:block sm:py-1 w-9 bg-gray-100 border border-gray-400 rounded">
                    {item.size}
                  </p>
                  <p className="hidden sm:block">
                    {currency}
                    {productData.price}
                  </p>
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 mr-4 sm:w-5 cursor-pointer mx-auto"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end w-full md:w-[25%]">
          <div className="w-full">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer rounded"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
