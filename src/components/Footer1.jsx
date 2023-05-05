import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterLinks from './FooterLinks';
import AboutLink from './AboutLink';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import LogoLink from './LogoLink';

const Footer = () => {
  return (
    <div className='w-screen heading border-t-2 lg:pt-14 pt-8  text-gray-200'>
        <div className='justify-around items-center flex flex-col lg:flex-row'>

        <div className='flex justify-center lg:w-2/4   items-center '>
        <LogoLink/>
            <div className='mx-5 mt-3 hidden lg:block ml-10'>
            <InstagramIcon className='cursor-pointer'  fontSize='large'/>
            </div>
            <div className='mx-5 mt-3 hidden lg:block'>
            <FacebookIcon className='cursor-pointer' fontSize='large'/>
            </div>
            <div className='mx-5 mt-3 hidden lg:block'>
            <LinkedInIcon className='cursor-pointer' fontSize='large'/>
            </div>
            <div className='mx-5 mt-3 hidden lg:block'>
            <TwitterIcon className='cursor-pointer' fontSize='large'/>
        </div>
        <div className='mx-3 mt-1.5 lg:hidden z-50 ml-5'>
            <InstagramIcon className='cursor-pointer '  fontSize='medium'/>
            </div>
            <div className='mx-3 mt-1.5 lg:hidden z-50 '>
            <FacebookIcon className='cursor-pointer ' fontSize='medium'/>
            </div>
            <div className='mx-3 mt-1.5 lg:hidden z-50 '>
            <LinkedInIcon className='cursor-pointer ' fontSize='medium'/>
            </div>
            <div className='mx-3 mt-1.5 lg:hidden z-50 '>
            <TwitterIcon className='cursor-pointer ' fontSize='medium'/>
        </div>
        </div>


          <div className='lg:w-2/4 w-full heading my-5 text-2xl lg:text-4xl font-bold lg:my-0 flex items-center justify-center'>
            support@1cloud.digital
          </div>
        </div>
        <div className='flex justify-around items-start'>
       <ul className='lg:text-xl font-semibold pb-5 lg:py-14 '>
        <li className='my-3  lg:my-7'>
        <AboutLink/>
        </li>
        <li className='my-3  lg:my-7'>
        <Link to="/"  className="outline-none" >Services</Link>
</li>
        <li className='my-3  lg:my-7'>
        <Link to="/" className="outline-none" >Supported Formats</Link>
        </li>
        <li className='my-3  lg:my-7'>
        
            <a href="http://client.1cloud.digital" className='outline-none font-semibold' target="_blank">Login/Signup</a>
  
        </li>
       </ul>



       <FooterLinks/>
        </div>
        <div className='lg:px-16 w-screen text-xs lg:text-base flex justify-center'>
            <div className='border-t w-full textLine py-5 lg:py-10 flex justify-center'>
                <p>@ 2023 1Cloud Live Streaming, Inc. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer