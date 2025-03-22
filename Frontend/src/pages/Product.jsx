import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(``);
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className=" pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ----------Product Data------------ */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ----------Product Images---------- */}

        <div className="flex flex-col gap-3 w-full sm:w-[50%]  ">
          <div className="w-full sm:w-[100%]">
            <img className="w-full h-auto mx-auto md:max-0 max-w-[30rem] rounded" src={image} alt="" />
          </div>
          <div className="flex overflow-x-auto sm:overflow-scroll justify-between w-full px-[4rem]">
            {productData.image.map((item, index) => {
              console.log(item)
              return (
                <img
                  onClick={(e) => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer rounded"
                  alt=""
                />
              );
            })}
          </div>
        </div>

        {/* --- Product Info----- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(50)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price},000.00
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="mt-5 text-gray-500 md:w-4/5 flex gap-3">
            <p className="text-black font-medium">Category:</p>{" "}
            {productData.category}
          </div>
          <div className="mt-5 text-gray-500 md:w-4/5 flex gap-3">
            <p className="text-black font-medium">Sub Category:</p>{" "}
            {productData.subcategory}
          </div>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => setSize(item)}
                    className={` py-2 px-4 rounded ${
                      item === size ? "bg-[#8b5100] text-white" : "bg-gray-100"
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded"
          >
            ADD TO CART{" "}
          </button>
          <div className="text-sm text-gray-500 mt-5 flex flex-xol gap-1 ">
            <p className="">100% Original Product</p>
            <p className="">Cash on delivery is avaliable on this product</p>
            <p className="">Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* --------- Description & review sectio */}

      <div className="mt-20">
        <div className="flex">
          <b className="bg-gray-100 shadow-sm shadow-[#00000047] px-5 py-3 text-sm">
            Descrition
          </b>
          <p className="bg-gray-100 shadow-sm shadow-[#00000047] px-5 py-3 text-sm ">
            Rveviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-100 shadow-sm shadow-[#00000047] px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            reprehenderit aliquam animi hic, expedita, voluptatibus dignissimos
            possimus, commodi pariatur architecto voluptates eveniet ratione
            aperiam quia nam praesentium deserunt velit a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            laborum consectetur veritatis nulla. Libero, voluptas doloremque
            corporis delectus quia magnam ipsum reiciendis quos. Numquam
            voluptatum pariatur reiciendis quo quidem. Harum atque obcaecati
            sapiente fugiat velit!
          </p>
        </div>
      </div>

      {/* --------display related products------------ */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
