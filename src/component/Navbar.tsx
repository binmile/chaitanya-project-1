import React from 'react'
import { NavLink } from 'react-router-dom'
// import { UseAuth } from './Auth'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }: {isActive: boolean } ) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    // const auth:any  = UseAuth()

  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles}  to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>

        {/* {
          !auth.user && (
            <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
          )
        } */}


    </nav>
  )
}
