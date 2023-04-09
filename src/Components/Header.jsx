import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="header">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='bg-gradient-to-r from-[#9873FF] to-[#7E90FE]  bg-clip-text text-transparent'><a>Statistic</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Applied jobs
          </a>
          
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        <img className='w-20 md:w-40' src="resources/Images/CareerHub.png" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1 flex gap-6 ">
      <li className='bg-gradient-to-r from-[#9873FF] to-[#7E90FE]  bg-clip-text text-transparent'><NavLink to='/'>Statistic</NavLink></li>
      <li tabIndex={0} className='bg-gradient-to-r from-[#9873FF] to-[#7E90FE]  bg-clip-text text-transparent'>
        <a>
          Applied Jobs
        </a>
      </li>
      <li className='bg-gradient-to-r from-[#9873FF] to-[#7E90FE]  bg-clip-text text-transparent'><a>Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border-none bg-gradient-to-r from-[#9873FF] to-[#7E90FE] ">Start Applying</a>
  </div>
</div>
        </div>
    );
};

export default Header;