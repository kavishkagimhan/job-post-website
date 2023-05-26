import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import applyDataService from '../services/Applyservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Applyjob = () => {

    const { possition } = useParams();
    const { title } = useParams();
    const { company } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const navigate = useNavigate();
    
    const submitButton = async (e) => {

        if (name === "") {
            toast.error('Name is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (email === "") {
            toast.error('Email is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (phone === "") {
            toast.error('Phone is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await applyDataService.addApplication({
                name,phone,email, title, company, possition
            }); 
            toast.success('Application Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate("/");
        }
    }


    return (
        <div className='h-screen'>
            <div>
                <h1 className='p-5 mt-10 text-3xl font-semibold text-center sm:p-7'>Apply to {possition} {title} at {company}  </h1>
            </div>

            <div className='flex items-center justify-center max-w-[300px] sm:max-w-[500px] mx-auto border border-gray-400 rounded-md shadow-lg p-2 mt-10'>
                <div className='flex flex-col  w-[800px] px-4 py-2 mx-auto   items-center justify-center gap-6'>
                <h1 className='text-xl font-semibold text-center'>Apply a Job</h1>
                    <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Your name'
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Email Address'
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter phone number'
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <button className='w-[80%] px-6 py-2 text-white bg-blue-500 border rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500' onClick={submitButton}>Add Job</button>
                </div>
            </div>

        </div>
    )
}

export default Applyjob