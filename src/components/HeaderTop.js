import React from 'react'

import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top___icon_wrapper">
            <BsFacebook />
            </div>
            <div className="header_top___icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top___icon_wrapper">
              <BsInstagram />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>GRATIS PENGIRIMAN</strong> KHUSUS PEKAN INI!
          </div>
          <div className="flex gap-4">
            <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
              <option value="IDR Rp">Rp</option>
              <option value="USD $">$</option>
            </select>
            <select name="language" id="language" className="text-gray-500 text-[12px] w-[80px]">
              <option value="Indonesia">Indonesia</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;