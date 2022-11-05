import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" />


<nav className="bg-primary shadow-lg">
  <div className="container mx-auto">
    <div className="sm:flex justify-around">
      
      <NavLink to="#" className="text-gradient font-poppins font-normal text-3xl font-bold p-3">morsystems.</NavLink>

      
      <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
        <li className="sm:inline-block">
          <NavLink to="/" className="p-3 hover:text-white font-poppins font-normal ">Home</NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink to="/catalogue" className="p-3 hover:text-white font-poppins font-normal ">Catalogue</NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink to="/contact" className="p-3 hover:text-white font-poppins font-normal">Contact</NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink to="/Login" className="p-3 hover:text-white font-poppins font-normal">Login</NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink to="/Registration" className="p-3 hover:text-white font-poppins font-normal">Registration</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav