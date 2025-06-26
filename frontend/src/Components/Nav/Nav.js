import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom';   

function Nav() {
  return (
    <div>
      <ul className='home-ul'>
        <li className='home-ll'>
          <NavLink
            to='/mainhome'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>Home</h1>
          </NavLink>
        </li>
        <li className='home-ll'> 
          <NavLink
            to='/adduser'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>ADD user</h1>
          </NavLink>
        </li>
        <li className='home-ll'>
          <NavLink
            to='/userdetails'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>user details</h1>
          </NavLink>
        </li>
         <li className='home-ll'>
          <NavLink
            to='/contact'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>Contact Us</h1>
          </NavLink>
        </li>
        <li className='home-ll'>
          <NavLink
            to='/regi'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>Register</h1>
          </NavLink>
        </li>
        <li className='home-ll'>
          <NavLink
            to='/log'
            className={({ isActive }) => isActive ? 'active home-a' : 'home-a'}
          >
            <h1>Login</h1>
          </NavLink>
        </li>
       
      </ul>
    </div>
  )
}

export default Nav
