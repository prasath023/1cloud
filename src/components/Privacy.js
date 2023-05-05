import React, { useState } from 'react'
import Footer from './Footer'
import Footer1 from './Footer1'
import logo from "../assets/logo.png"
import Header1 from './Header1'
import { Link } from 'react-router-dom'
import AboutLink from './AboutLink'
import CloseIcon from '@mui/icons-material/Close';
const Privacy = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const handleOpenMenu=(pass)=>{
        setOpenMenu(pass)
      }
  return (
    <div className='text-gray-200 textLine'>
        <Header1 handleOpenMenu={handleOpenMenu} open={openMenu}/>

        <div className='lg:my-20 my-10 lg:w-3/4 w-full px-3 lg:mx-20'>
            <div className='my-10'>
                <h1 className='heading text-2xl lg:text-3xl font-semibold my-5'>Privacy Policy</h1>
                <p className='text-sm lg:text-base'>At <a className='text-blue-500 underline' href="https://1cloud.digital">https://1cloud.digital</a> we respect the privacy of our users and are committed to protecting the personal information that they provide to us. This privacy policy explains what information we collect, why we collect it, and how we use it.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading text-2xl lg:text-3xl font-semibold my-5'>Information Collection</h1>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>We collect the following personal information from our users:</h1>
                <ul>
                    <li className='text-sm lg:text-base my-2 ml-3 lg:ml-5 list-disc'>Email address</li>
                    <li className='text-sm lg:text-base my-2 ml-3 lg:ml-5 list-disc'>Phone number</li>
                </ul>
            </div>
            <div className='my-10'>
                <h1 className='heading text-2xl lg:text-3xl font-semibold my-5'>Purpose of Collection</h1>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>We collect this information for the following purposes:</h1>
                <ul>
                    <li className='text-sm lg:text-base my-2 ml-3 lg:ml-5 list-disc'>To provide our streaming services to our users</li>
                    <li className='text-sm lg:text-base my-2 ml-3 lg:ml-5 list-disc'>To send users updates and promotions related to our services</li>
                    <li className='text-sm lg:text-base my-2 ml-3 lg:ml-5 list-disc'>To process payments through our payment gateway provider, Razorpay</li>
                </ul>
            </div>
            <div className='my-10'>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>Data Storage and Security</h1>
                <p className='text-sm lg:text-base'>We store all collected personal information securely and take reasonable measures to protect it from unauthorized access. However, no method of transmission over the internet or method of electronic storage is 100% secure, so we cannot guarantee its absolute security.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>Sharing of Information</h1>
                <p className='text-sm lg:text-base'>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information, unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>User Rights</h1>
                <p className='text-sm lg:text-base'>You have the right to access, correct, or delete your personal information at any time. You may also choose to opt out of receiving promotional materials from us. To exercise these rights, please contact us at support@1cloud.digital.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>Changes to the Policy</h1>
                <p className='text-sm lg:text-base'>We may update this privacy policy from time to time, and we will notify you of any changes by posting the new privacy policy on our website. You are advised to review this privacy policy periodically for any changes.</p>
            </div>
            <div className='my-10'>
                <h1 className='heading  text-lg lg:text-2xl font-semibold my-5'>Contact Us</h1>
                <p className='text-sm lg:text-base'>If you have any questions about this privacy policy, please contact us at support@1cloud.digtal</p>
            </div>
            <div className='my-10'>
                <p className='text-sm lg:text-base'>This privacy policy is effective as of 06-02-2023.</p>
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
        <Link className="outline-none" onClick={()=>setOpenMenu(false)} to="/" >Services</Link>
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

export default Privacy