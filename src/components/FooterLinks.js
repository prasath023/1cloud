import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <ul className='lg:text-xl text-right font-semibold pb-5 lg:py-14 '>


<li className='my-3  lg:my-7'>
<Link className='outline-none cursor-pointer' to="/privacy-policy">Privacy Policy</Link>
        
        </li>
<li className='my-3  lg:my-7'>
<Link className='outline-none cursor-pointer' to="/return-policy">Refund Policy</Link>

</li>
<li className='my-3  lg:my-7'>
<Link className='outline-none cursor-pointer' to="/terms">Terms & Conditions</Link>
 
</li>

       </ul>
  )
}

export default FooterLinks