import Image from "next/image"
import React from 'react'

const Slide = ({img,title,mainTitle, price}) => {
  return (
    <div className="outline=none border-non relative">
      <div className="absolute left-[30px] md:left[70] max-w-[250px] sm:max-w[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{mainTitle}</h2>

        <h3 className="text-[24px] text-grey-500">
          Harga mulai dari <strong className="text-[20px] md:text-[20px] lg:text-[30x]">{price}</strong>
        </h3>
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Beli sekarang!
        </div>
      </div>
      <Image className="w-[100%] h-[300px] md:h-auto rounded-xs object-cover object-right md:object-left-bottom" src={img} alt="banner" width={2000} height={2000} />
      </div>
  ) 
}

export default Slide