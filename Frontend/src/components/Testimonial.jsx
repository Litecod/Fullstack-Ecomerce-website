import React from "react";
import { Link } from "react-router-dom";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6"
import { sliderSettings } from "../utils/CommonOneCol";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { assets } from "../assets/assets";
import Title from "./Title";


const Testimonial = () => {
  const slides = [
    {
      id: 1,
      imageUrl: assets.testimonial_img,
      star: assets.testimonial_star_img,
      rating:
        "12 reviews at Yelp",
      names: "Gloria Rose",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Lite Shoppy is exactly what our business has been lacking.",
    },
    {
      id: 2,
      imageUrl: assets.testimonial_img_two,
      star: assets.testimonial_star_img,
      rating:
        "22 reviews at Yelp",
      names: "Cyntia John",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Lite Shoppy is exactly what our business has been lacking.",
    },
    {
      id: 3,
      imageUrl: assets.testimonial_img_three,
      star: assets.testimonial_star_img,
      rating:
        "17 reviews at Yelp",
      names: "Blessed Samuel",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Lite Shoppy is exactly what our business has been lacking.",
    },
  ];
  return (
    <div className="w-full pb-[2rem]">
      <div className="flex flex-col md:flex-row w-[100%] justify-between gap-[2rem] md:gap-0">
        <div className="w-[100%] md:w-[30%]">
          <div className="">
          <Title text1={"WHAT"} text2={"CUSTOMERS SAYS"} />
          </div>
          <h1 className="text-[3rem] text-[#8b5100] mt-[2.5rem]">What They Say?</h1>
          <div className="text-[#393939] mt-[2.5rem] flex flex-col gap-4">
            <p>Lite Shoppy has got more than 100k positive ratings from our users around the world.</p>
            <p>Some of the customers were greatly satified with what they say</p>
            <p>Are you too? Please give your reviews</p>
          </div>
          <button className=" mt-[2.5rem] border-[1px] border-[#8b5100] border-r-[0px] border-r-[#fff] text-[#8b5100] rounded flex items-center gap-6 pl-[2rem]"><p>Check our new arivals</p><Link to="/collection" className="border-[1px] border-[#8b5100] rounded p-[1rem]"><FaArrowRight /></Link></button>
        </div>
        <div className="w-[100%] md:w-[50%] relative">
          <Swiper {...sliderSettings} className="relative">
            <SliderButtons />
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
              >
                <div className="relative w-[100%] lg:w-[80%] md:h-[40rem]">
                  <img src={slide.imageUrl} alt="" className="w-[28rem] rounded" />
                  <div className="absolute max-w-[30rem] bg-[#fff] flex bottom-[-2rem] right-0 rounded z-10 shadow-sm shadow-[#00000015]">
                    <div className="h-[15rem] w-[0.6rem] bg-[#8b5100] rounded-tl rounded-bl"></div>
                    <div className="w-full p-[2rem] flex flex-col gap-[2rem]">
                      <div className="flex gap-2">
                        <div className="h-[100%] w-[0.1rem] bg-[#8b5100]"></div>
                        <p>{slide.detail}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{slide.names}</p>
                        <div className="">
                          <img src={slide.star} alt=""/>
                          <p>{slide.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;




const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-[15rem]  flex justify-between md:justify-normal gap-[54%] w-[100%] z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-[1.5rem] bg-[#fff] rounded"
      >
        <FaLessThan className="text-[#49BBBD] font-medium" />
      </button>
      <button onClick={() => swiper.slideNext()} className="p-[1.5rem] bg-[#fff] rounded shadow-sm shadow-[#0000003b]">
        <FaGreaterThan className="text-[#49BBBD] font-medium" />
      </button>
    </div>
  );
};