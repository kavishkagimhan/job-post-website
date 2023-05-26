import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';


function Navbar() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full bg-blue-500 h-14'>
            <div className="bg-blue-500 mx-auto flex items-center justify-between h-14 text-white max-w-[1240px] px-4 ">
                <Link to=''>
                    <div className='flex items-center gap-2'>
                        <WorkIcon />
                        <h1 className='w-full text-xl font-bold '>FIND JOBS</h1>
                        <ul className='flex'>
                            <Link to='/'><li className='hidden p-4 font-bold cursor-pointer hover:text-blue-700 md:flex'>Home</li></Link>
                            <Link to='/aboutus'> <li className='hidden p-4 font-bold cursor-pointer hover:text-blue-700 md:flex'>AboutUs</li></Link>
                            <Link to='/contact'> <li className='hidden p-4 font-bold cursor-pointer hover:text-blue-700 md:flex'>ContactUs</li></Link>
                        </ul>

                    </div>
                </Link>
                <ul className='items-center hidden md:flex'>
                    <Avatar />
                    <Link to='/login'><button className='hidden p-4 font-bold cursor-pointer hover:text-blue-700 md:flex'>Login</button></Link>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r-gray-900 bg-blue-400 ease-in-out duration-500' : 'fixed left-[-100%] ease-end-out duration-500'}>
                    <Link to='/'><div className='flex items-center gap-2 p-4 cursor-pointer'>
                        <WorkIcon />
                        <h1 className='w-full text-xl font-bold '>FIND JOBS</h1>
                        <Avatar />
                    </div></Link>
                    <ul className='p-4 pt-24 uppercase '>
                        <Link to='/'> <li className='p-4 border-b border-gray-600'>Home</li></Link>
                        <Link to='/aboutus'> <li className='p-4 border-b border-gray-600'>About Us</li></Link>
                        <Link to='/contactus'> <li className='p-4 border-b border-gray-600'>About Us</li></Link>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar