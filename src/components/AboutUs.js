import React, { useState } from 'react'
import Footer from './Footer'
import Header1 from './Header1'
import { Link } from 'react-router-dom'
import AboutLink from './AboutLink'
import CloseIcon from '@mui/icons-material/Close';
import Footer1 from './Footer1'
import logo from "../assets/logo.png"

const AboutUs = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const handleOpenMenu=(pass)=>{
        setOpenMenu(pass)
      }
  return (
    <div className='text-gray-200 textLine'>
        <Header1 handleOpenMenu={handleOpenMenu} open={openMenu}/>
        <div className='lg:w-3/4  px-3 lg:mx-20 my-10 lg:my-20'>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>About OneCloud</h1>
                <p className='text-sm lg:text-base'>OneCloud is a cutting-edge RTMP/SRT streaming company that was founded with the mission of providing reliable and high-quality streaming services to our users. Our goal is to reach 1,000 users and become a leader in the streaming industry.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Our Values</h1>
                <p className='text-sm lg:text-base'>At OneCloud, we are committed to providing a seamless and enjoyable streaming experience for our users. We believe in transparency, reliability, and customer satisfaction, and we work tirelessly to ensure that our services meet these values.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Partnerships and Affiliations</h1>
                <p className='text-sm lg:text-base'>OneCloud has partnered with leading data centers to provide Tier 1 streaming services with 24x7 uptime. Our partnerships ensure that our users have access to the best technology and infrastructure available, which translates into a high-quality streaming experience.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Team</h1>
                <p className='text-sm lg:text-base'>Our team is made up of experienced professionals who are passionate about technology and the streaming industry. We are dedicated to providing our users with the best possible experience and are always working to improve our services.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Future Goals</h1>
                <p className='text-sm lg:text-base'>At OneCloud, we are constantly looking for ways to improve our services and reach more users. Our future goals include expanding our partnerships, introducing new video formats, and exploring new technologies to ensure that our users have access to the best streaming experience possible.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Supported Video Formats</h1>
                <p className='text-sm lg:text-base'>OneCloud supports both H.264 and H.265 video formats, ensuring that our users have access to the latest technology and a wide range of video options. Whether you're streaming live events, gaming, or just sharing your favorite content, OneCloud has you covered.</p>
            </div>
            <div className='my-10'>
                <p className='text-sm lg:text-base'>We hope that this gives you a better idea of who we are and what we stand for at OneCloud. If you have any questions or would like to know more, please don't hesitate to contact us.</p>
            </div>
        </div>
        <Footer1/>
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
        <Link className="outline-none" onClick={()=>setOpenMenu(false)} to="/"  >Services</Link>
        </li> 

        <li onClick={()=>setOpenMenu(false)} className='text-lg font-medium mb-10 text-gray-200'>
        <Link className="outline-none" onClick={()=>setOpenMenu(false)} to="/" >Supported Formats</Link>
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

export default AboutUs