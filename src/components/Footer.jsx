import React from 'react';
import {
  AiFillDribbbleSquare,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare
} from 'react-icons/ai';
import WorkIcon from '@mui/icons-material/Work';

function Footer() {
  return (
    <div className='bg-[#172554]'>
      <div className='text-gray-100  max-w-[1240px] max-auto py-16 grid lg:grid-cols-3 mx-4 mb-0'>
        <div>
          <div className='flex items-center gap-2'>
          <WorkIcon />
          <h1 className='w-full text-2xl font-bold '>FIND JOBS</h1>
          </div>
         
          <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam officiis
            qui eaque ducimus, sit repudiandae quasi minima ratione facere deleniti?
          </p>
          <div className='flex md:[75%] justify-between my-6'>
            <AiFillDribbbleSquare size={30} className='cursor-pointer hover:bg-[#00df9a] duration-75 rounded-md' />
            <AiFillFacebook size={30} className='cursor-pointer hover:bg-[#00df9a] duration-75 rounded-md' />
            <AiFillGithub size={30} className='cursor-pointer hover:bg-[#00df9a] duration-75 rounded-md' />
            <AiFillInstagram size={30} className='cursor-pointer hover:bg-[#00df9a] duration-75 rounded-md' />
            <AiFillTwitterSquare size={30} className='cursor-pointer hover:bg-[#00df9a] duration-75 rounded-md' />
          </div>
        </div>
        <div className='flex justify-between m-4 lg:col-span-3 sm:cols-span-1'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Analytics</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Marketing</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Commerce</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Analytics</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Marketing</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Commerce</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200'>Analytics</li>
              <li className='py-2 text-sm hover:text-gray-200'>Marketing</li>
              <li className='py-2 text-sm hover:text-gray-200'>Commerce</li>
              <li className='py-2 text-sm hover:text-gray-200'>Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer