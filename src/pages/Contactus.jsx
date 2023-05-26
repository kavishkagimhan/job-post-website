import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contactus = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
     

  }
  
  return (
    <div className='w-screen h-screen overflow-hidden '>
      <div className='flex items-center justify-center h-2/3 max-w-[800px] mx-auto border border-gray-400 rounded-md shadow-lg p-5 mt-24 overflow-hidden'>
        <div className='flex flex-col  w-[1000px] p-4 mx-auto  h-[300px] items-center justify-center gap-6'>
          <h1 className='text-4xl font-semibold text-center'>Contact Us</h1>
          <input className='px-6 py-3 outline-gray-500 focus:outline-none w-[80%] border' type="email" placeholder='Enter Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='p-6 px-6 py-3 outline-gray-500 focus:outline-none w-[80%] border' type="password" placeholder='Enter Your Name'
            onChange={(e) => setPassword(e.target.value)}
          />
            <textarea className='p-6 px-6 py-3 outline-gray-500 focus:outline-none w-[80%] border' type="password" placeholder='Enter Your Question'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='w-[80%] px-6 py-2 text-white bg-blue-500 border rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500' onClick={onLogin}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contactus