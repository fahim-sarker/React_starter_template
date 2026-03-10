import React from 'react'
import Container from './Container'
import Logo from "../../public/Layer_1.png"
import { Cart, Search } from './Svg/SvgContainer'

const Navbar = () => {
  return (
    <nav className='py-5'>
      <Container>
        <div className="flex gap-20 items-center px-30">
          <figure><img src={Logo} alt="Logo" /></figure>
          <div className="w-full relative">
            <input type="text" placeholder='Select sticker type...' className='py-2 px-5 w-full rounded-3xl border border-white/10 bg-white/3 backdrop-blur-[10px] outline-0 font-normal placeholder:text-white text-white' />
            <Search className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer" />
          </div>
          <div className="flex gap-7.5 items-center shrink-0">
            <button className="rounded-[24px] bg-[#6B41F6] shadow-[0_5px_0_0_#5135AF] px-4 py-2 cursor-pointer text-white font-bold text-base transition-all duration-200 hover:bg-[#5a34d6] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-[0_2px_0_0_#5135AF]">
              Signup
            </button>
            <Cart />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar