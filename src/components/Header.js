import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll';
import AboutLink from './AboutLink';
import logo from "../assets/logo.png"
import LogoLink from './LogoLink';


const Header = ({handleOpenMenu,open}) => {
  const [openMenu, setOpenMenu]=useState(false)

useEffect(()=>{
  handleOpenMenu(openMenu)
},[openMenu])

useEffect(()=>{
  setOpenMenu(open)
},[open])

  return (
    <div className='w-screen bg-black z-50 h-16 justify-around text-gray-300 items-center flex '>
        <div className='lg:w-1/4 font-black flex justify-center items-center'>
            <LogoLink/>
        </div>
        <div className='hidden lg:block w-2/4'>
          <ul className='flex justify-between heading font-semibold items-center'>
            <li className='cursor-pointer hover:border-r-2 hover:border-b  py-1 px-5 rounded-full transition-all duration-150 '>
            <AboutLink/>
            </li>
            <li className='cursor-pointer hover:border-r-2 hover:border-b  py-1 px-5 rounded-full transition-all duration-150 '>
              <Link to="services" spy={true} smooth={true} offset={0} duration={700} >Services</Link></li>
            <li className='cursor-pointer hover:border-r-2 hover:border-b  py-1 px-5 rounded-full transition-all duration-150 '>
              <Link to="support" spy={true} smooth={true} offset={-100} duration={1000} >Supported Formats</Link></li>
          </ul>
        </div>
        <div className='w-1/4 hidden lg:flex justify-center items-center'>
          <div className='bg-gray-300 flex justify-center items-center font-semibold py-2 px-5 cursor-pointer shadow-2xl text-black '>
            <a href="http://client.1cloud.digital" className='outline-none heading' target="_blank">Login/Signup</a>
          </div>
        </div>
        <div className='w-1/4 flex lg:hidden justify-end'>
            <div onClick={()=>setOpenMenu(true)} className='cursor-pointer'>
            <MenuIcon/>
            </div>
            </div>
    </div>
  )
}

export default Header