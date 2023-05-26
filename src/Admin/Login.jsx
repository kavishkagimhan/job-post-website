import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/admin")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });

    }
    
    return (
        <div className='w-screen h-screen '>
            <div className='flex items-center justify-center h-[500px] max-w-[800px] mx-auto border border-gray-400 rounded-md shadow-lg p-4 mt-24 py-4'>
                <div className='flex flex-col  w-[1000px] p-4 mx-auto  h-[300px] items-center justify-center gap-6'>
                   <h1 className='text-4xl font-semibold text-center'>Login</h1>
                    <input className='px-6 py-3 outline-gray-500 focus:outline-none w-[80%] border' type="email" placeholder='Enter Email Address'
                       onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className='p-6 px-6 py-3 outline-gray-500 focus:outline-none w-[80%] border' type="password" placeholder='Enter Password'
                       onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='text-sm md:text-lg'>
                        I don't Have Account Click <Link className='hover:text-blue-500' to='/signup'>Here</Link>
                    </p>
                    <button className='w-[80%] px-6 py-2 text-white bg-blue-500 border rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500' onClick={onLogin}>Login </button>
                </div>
            </div>
        </div>
    )
}

export default Login