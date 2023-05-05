import React, { useState } from 'react'
import Header from "./Header"
import Rive, { useRive } from "rive-react"
import moonScan from "../assets/moon_scan.riv"
import Options from './Options'
import CloseIcon from '@mui/icons-material/Close';
import "../css/Home.css"
import { Link } from 'react-scroll'
import Footer from './Footer'
import AboutLink from './AboutLink'
import Button from './Button'
import ButtonLink from './ButtonLink'
import logo from "../assets/logo.png"
import Extras from './Extras'

const Home = () => {
  const [openMenu, setOpenMenu]=useState(false)
  const { rive, RiveComponent } = useRive({
    src: moonScan,
    autoplay:true,
    
  })

  // setInterval(() => {
  //   rive.stop()
  //   rive.play()
  // }, 5000);

  const handleOpenMenu=(pass)=>{
    setOpenMenu(pass)
  }
  return (
   <div className='relative flex flex-col overflow-x-hidden text-gray-200 justify-center'>
        <div className=''>
        <div className='lg:h-screen heightDiv -z-10 w-screen flex justify-between items-center absolute top-10'>
        <div className='lg:w-1/2 w-0 pb-5 h-full flex flex-col items-start lg:pl-10 justify-center'>
          {/* <h1 className='text-5xl text-gray-200 font-bold leading-relaxed'>
Live Streaming Platform for Businesses & Individuals
</h1> 
<div className='mt-10 text-2xl cursor-pointer font-bold px-5 py-3 rounded-full text-black bg-gray-300'>
  Get started
</div> */}
        </div>
        <div className='lg:w-1/2 w-full h-full'>
        <RiveComponent />
        </div>
        </div>
        </div>
        <Header handleOpenMenu={handleOpenMenu} open={openMenu}/>
        <div className='w-screen heightDiv  flex text-center lg:text-left  items-center lg:h-screen'>
        <div className='lg:w-1/2 w-full lg:pb-16 h-full flex flex-col items-start  lg:pl-10 justify-center'>
          <h1 className='lg:text-5xl lg:hidden px-3 text-3xl text-gray-200 heading font-bold leading-relaxed'>
Live Streaming Platform for Businesses & Individuals
</h1> 
<h1 className='hidden lg:block text-5xl text-gray-200 heading font-bold leading-relaxed'>
Live Streaming Platform for Businesses & Individuals
</h1> 
 <div className='w-screen flex justify-center lg:justify-start '>
 <div data-aos="zoom-in" data-aos-duration="1000" className='mt-10 flex justify-center lg:justify-start   lg:mt-10 text-xl lg:text-2xl cursor-pointer font-bold '>
 {/* <Link to="support" spy={true} smooth={true} offset={0} duration={1000} >Get Started</Link> */}
<Button title={"Get Started"} />
 </div>
</div>
        </div>
        </div>
        <div id='services' data-aos="zoom-out" data-aos-duration="1000" className='lg:px-16 px-5 font-semibold services text-gray-200'>
          <div className='border-b-2 border-t-2 flex mt-5 lg:mt-10 mb-36 py-10 lg:py-20 flex-col justify-center items-center'>
          <h1 data-aos="flip-up" data-aos-duration="2000" className='heading font-semibold text-3xl lg:text-5xl mb-5 lg:mb-10'>Services</h1>
          <div>
            <h1 data-aos="flip-up" data-aos-duration="2300" className=' lg:text-3xl text-xl my-5 font-semibold heading'>RTMP</h1>
            <p data-aos="flip-up" data-aos-duration="2500" className='text-sm lg:text-lg textLine'>
            RTMP (Real-Time Messaging Protocol) is a proprietary network protocol developed by Adobe Systems for streaming audio, video, and data over the internet, between a flash player and a server. RTMP is widely used for live streaming and video on demand, as it offers low latency and stable streaming. It operates over ports 1935 and 443, and is encrypted using SSL/TLS, making it more secure than other protocols like HTTP. RTMP is supported by many media servers, CDN providers, and media players.
            </p>
            <h1 data-aos="flip-up" data-aos-duration="2300" className='lg:text-3xl lg:mt-14 mt-9 text-xl my-5 font-semibold heading'>SRT</h1>
            <p data-aos="flip-up" data-aos-duration="2500" className='text-sm lg:text-lg textLine'>
            SRT (Secure Reliable Transport) is the video streaming protocol that delivers secure, high-quality and low-latency live videos over even the most unpredictable networks. With the protection against packet loss, jitter and fluctuating bandwidth, SRT ensures that your stream gets the best possible viewing experience.
            </p>
          </div>
          </div>
        </div>
        <Options/>
        <Extras/>
        <Footer/>
{
            openMenu &&
            <div className='absolute heading flex items-center justify-start bg-black flex-col lg:hidden top-0 z-50 w-screen h-screen'>
              <div className='flex px-12 py-4 justify-around lg:justify-start items-center w-full lg:w-1/4'>
        <div className=' font-black text-gray-200'>
        <img className='w-36' src={logo} alt="" />
          
        </div>
        <div className='w-3/4 flex lg:hidden justify-end'>
        <div onClick={()=>setOpenMenu(false)} className='text-gray-200 cursor-pointer'>
        <CloseIcon/>
        </div>
        </div>
        </div>
        <div className='h-full'>
        <ul className='flex flex-col mt-28 justify-center items-center'>
        <li onClick={()=>setOpenMenu(false)} className='text-lg font-medium mb-5 text-gray-200'>
         <AboutLink/>
        </li>
        <li onClick={()=>setOpenMenu(false)} className='text-lg font-medium mb-5 text-gray-200'>
        <Link onClick={()=>setOpenMenu(false)} to="services" spy={true} smooth={true} offset={0} duration={700} >Services</Link>
        </li> 

        <li onClick={()=>setOpenMenu(false)} className='text-lg font-medium mb-10 text-gray-200'>
        <Link onClick={()=>setOpenMenu(false)} to="support" spy={true} smooth={true} offset={-100} duration={1000} >Supported Formats</Link>
        </li> 
        <li>
        <div className='bg-gray-300 flex justify-center items-center font-semibold py-2 px-5 rounded-full cursor-pointer shadow-2xl text-black '>
        <a href="http://client.1cloud.digital" className='outline-none' target="_blank">Login/Signup</a>
          </div>
        </li>
        </ul>
        </div>
            </div>
        }
   </div>
  )
}

export default Home