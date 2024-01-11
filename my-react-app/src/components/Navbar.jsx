import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let Navigate = useNavigate();
  return (
  
 <div className="navbar bg-base-200">
 <div className="navbar-start">
   <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>   
     </div>
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li><Link to="/">Homepage</Link></li>
       <li><Link to="/registration">Registration</Link></li>
       <li><Link to="/login">Login</Link></li>
     </ul>
   </div>
 </div>
 <div className="navbar-center">
   <a className="btn btn-ghost text-xl font-bold font-sans" onClick={() => Navigate("/")}> Let's drink </a>
 </div>
 <div className="navbar-end">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-sm input-bordered w-24 md:w-auto" />
    </div>
    <a onClick={() => Navigate("/registration")} className="btn btn-sm ml-1 text-white bg-red-600 hover:bg-red-900">Registation</a>
    <a onClick={() => Navigate("/login")} className="btn btn-sm btn-xl ml-1 text-white bg-blue-600 hover:bg-blue-900">Login</a>
 </div>
</div>
  )
}

export default Navbar