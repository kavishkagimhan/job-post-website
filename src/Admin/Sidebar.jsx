import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-[100vh] bg-[#172554] text-white mt-[-25px] cursor-pointer'>
            <Link to='/admin'><div className='px-6 py-4 mt-6'>
                <h1 className='text-2xl font-semibold '>Dashboard</h1>
            </div>
            </Link>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-400'>
                <h2 className='mt-6 text-xl'><Link to='/admin/addjob'>Add Jobs</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-400'>
                <h2 className='mt-6 text-xl'><Link to='/admin/alljobs'>All Jobs</Link></h2>
                <p className='ml-10 '><AiOutlineUserAdd /></p>
            </div>
        </div>
    )
}

export default Sidebar