import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="flex flex-col gap-2 items-center mb-3 ">
      <p className="w-8 sm:w-12 h-[3px] sm:h-[3px] bg-gray-700"></p>
        <p className="text-[#8b5100]">{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        
    </div>
  )
}

export default Title