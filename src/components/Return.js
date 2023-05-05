import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AboutLink from './AboutLink'
import CloseIcon from '@mui/icons-material/Close';

import Footer from './Footer'
import Footer1 from './Footer1'
import logo from "../assets/logo.png"


import Header1 from './Header1'

const Return = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const handleOpenMenu=(pass)=>{
        setOpenMenu(pass)
      }
  return (
    <div className='text-gray-200 textLine'>
        <Header1 handleOpenMenu={handleOpenMenu} open={openMenu}/>
       <div className='lg:w-3/4 px-3 lg:mx-20 my-10 lg:my-20'>
       <div className="my-10">
        <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Refund Policy</h1>
        <p className='text-sm lg:text-base'>At <a className='text-blue-500 underline' href="https://1cloud.digital">https://1cloud.digital</a>, we want to ensure that our users are satisfied with the services we provide. If for any reason you are not satisfied with your purchase, we offer the following refund policy:</p>
       </div> 
       <div className="my-10">
        <h1 className='heading lg:text-3xl  text-xl font-semibold my-5'>Eligibility for Refunds</h1>
        <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>
        Refunds will be considered for the following reasons:
        </h1>
        <ul>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Technical issues that prevent you from using the streaming service</li>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Quality of the streaming service not meeting expectations</li>
        </ul>
       </div>
       <div className="my-10">
        <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Procedure for Requesting a Refund</h1>
        <p className='text-sm lg:text-base'>
        To request a refund, please contact us at support@1cloud.digital within 2 days of your purchase. Please include the following information in your request:
        </p>
        <ul>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Your full name and email address</li>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Order number or proof of purchase</li>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Reason for requesting a refund</li>
        </ul>
       </div>
       <div className="my-10">
        <h1 className='heading lg:text-3xl text-xl font-semibold my-5'>Our team will review your request and provide a response within 7 Days.</h1>
        <h1 className='heading lg:text-3xl text-xl font-semibold my-5'>Limitations</h1>
        <h1 className='heading lg:text-2xl text-lg font-semibold my-5'>Refunds will not be granted for the following reasons:</h1>
        <ul>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Change of mind after purchase</li>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Incomplete use of the streaming service</li>
            <li className='ml-3 lg:ml-5 text-sm lg:text-base my-2 list-disc'>Failure to meet technical requirements for using the streaming service</li>
        </ul>
       </div>
       <div className="my-10">
        <h1 className='heading  font-semibold my-10'>This refund policy is subject to change at any time and without notice.</h1>
        <h1 className='heading lg:text-2xl text-xl font-semibold my-5'>Contact Us</h1>
        <h1 className='  font-semibold my-5'>If you have any questions about this refund policy, please contact us at support@1cloud.digital.</h1>
        <h1 className='  font-semibold my-5'>This refund policy is effective as of 06-02-2023</h1>
       </div>
       </div> 
       <Footer1 />
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
        <li onClick={()=>setOpenMenu(false)} className='text-xl font-medium mb-5 text-gray-200'>
         <AboutLink/>
        </li>
        <li onClick={()=>setOpenMenu(false)} className='text-xl font-medium mb-5 text-gray-200'>
        <Link className="outline-none" onClick={()=>setOpenMenu(false)} to="/"  >Services</Link>
        </li> 

        <li onClick={()=>setOpenMenu(false)} className='text-xl font-medium mb-10 text-gray-200'>
        <Link className="outline-none" onClick={()=>setOpenMenu(false)} to="/"  >Supported Formats</Link>
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

export default Return