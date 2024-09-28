import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li className='bg-[#373737b4] text-white font-medium rounded-3xl'><NavLink to="/home">Home</NavLink></li>
        <li className='bg-[#373737b4] text-white font-medium rounded-3xl'><NavLink to="/skills">Skills</NavLink></li>
        <li className='bg-[#373737b4] text-white font-medium rounded-3xl'><NavLink to="/works">Works</NavLink></li>
        <li className='bg-[#373737b4] text-white font-medium rounded-3xl'><NavLink to="/resume">Resume</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar justify-between">
                <div>
                    <div className="">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn bg-[#414141b5] border-none text-white lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className='bg-white font-medium px-4 py-2 rounded-lg'>Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;