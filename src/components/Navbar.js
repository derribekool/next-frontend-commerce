import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="navbar__link relative cursor-pointer">HOME</div>
          <div className="navbar__link relative cursor-pointer">KATEGORI</div>
          <div className="navbar__link relative cursor-pointer">COUPLE</div>
          <div className="navbar__link relative cursor-pointer">PRIA</div>
          <div className="navbar__link relative cursor-pointer">WANITA</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 