import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const LogoLink = () => {
    return (
        <Link className='outline-none cursor-pointer' to="/">
        <img className='w-32 lg:w-40' src={logo} alt="" />

        </Link>
      )
}

export default LogoLink