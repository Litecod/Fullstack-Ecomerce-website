import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import React from 'react'
import Testimonial from '../components/Testimonial'


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates culpa eligendi quibusdam, animi dolores aperiam! Ab quasi repellat architecto vitae quos, deleniti ipsum! Nemo excepturi dolorem distinctio esse itaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates culpa eligendi quibusdam, animi dolores aperiam! Ab quasi repellat architecto vitae quos, deleniti ipsum! Nemo excepturi dolorem distinctio esse itaque Lorem ipsum dolor sit amet.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aliquid veritatis quisquam consequuntur tempore aspernatur! Consectetur obcaecati officia reprehenderit porro suscipit quod sint asperiores laborum?</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-[1rem]">
        <div className="px-10 shadow-sm shadow-[#00000028] rounded md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit. Molestiae accusantium neque ut doloremque vero numquam officiis, </p>
        </div>
        <div className="px-10 shadow-sm shadow-[#00000028] rounded md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit. Molestiae accusantium neque ut doloremque vero numquam officiis, </p>
        </div>
        <div className="px-10 shadow-sm shadow-[#00000028] rounded md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expectional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit. Molestiae accusantium neque ut doloremque vero numquam officiis, </p>
        </div>
      </div>

      <Testimonial />
       <NewsLetterBox />

    </div>
  )
}

export default About