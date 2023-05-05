import React, { useState } from 'react'
import Footer from './Footer'
import Header1 from './Header1'
import { Link } from 'react-router-dom'
import AboutLink from './AboutLink'
import CloseIcon from '@mui/icons-material/Close';
import Footer1 from './Footer1'
import logo from "../assets/logo.png"

const Terms = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const handleOpenMenu=(pass)=>{
        setOpenMenu(pass)
      }
  return (
    <div className='text-gray-200 textLine'>
        <Header1 handleOpenMenu={handleOpenMenu} open={openMenu}/>
        <div className='lg:my-20 my-10 w-full px-3 lg:w-3/4 lg:mx-20'>
            <h1 className='heading lg:my-10 my-7 text-xl lg:text-3xl font-semibold'>These terms and conditions apply to your use of the 1cloud RTMP/SRT Server service.</h1>
            <h1 className='heading my-5 lg:my-10 text-lg lg:text-2xl font-semibold'>By using our service, you agree to be bound by these terms and conditions.</h1>
            <ul className='text-sm lg:text-base'>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Service Description: 1cloud provides a secure RTMP/SRT service for streaming high-quality video content. Our RTMP/SRT server is designed to handle a variety of streaming formats, including live broadcasts and on-demand content.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Payment: All payments must be made in full prior to use of the 1cloud RTMP/SRT Server service. We accept payment through the Razorpay payment gateway or other authorized payment methods. All payments are non-refundable.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Termination: You may terminate a customer’s access to the 1cloud RTMP/SRT Server service at any time, with or without cause.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Limitation of Liability: 1cloud’s liability to customers is limited to the amount paid for the RTMP/SRT server service. We will not be liable for any indirect, incidental, or consequential damages, including but not limited to, loss of profits or data.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Privacy Policy: 1cloud complies with all applicable privacy laws and regulations in India, and has a privacy policy that explains how customer data will be collected, used, and shared.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Content Responsibility: Customers are solely responsible for the content they stream through the 1cloud RTMP/SRT Server, and they must ensure that it complies with all applicable laws and regulations in India.</li>
                <li className='text-sm lg:text-base list-disc ml-3 lg:ml-5 my-8'>Changes to Terms: 1cloud reserves the right to modify these terms and conditions at any time, with or without notice to customers</li>
            </ul>
           
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
        <Link className='outline-none' onClick={()=>setOpenMenu(false)} to="/" >Services</Link>
        </li> 

        <li onClick={()=>setOpenMenu(false)} className='text-lg font-medium mb-10 text-gray-200'>
        <Link className='outline-none'  onClick={()=>setOpenMenu(false)} to="/" >Supported Formats</Link>
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

export default Terms