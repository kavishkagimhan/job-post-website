import React, { useState } from 'react'
import jobDataService from '../services/Postservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'

export const Editjob = () => {

    const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [position, setPosition] = useState("")
    const [category, setCategory] = useState("")
    const [requirements, setRequirements] = useState("")
    const [salary, setSalary] = useState("")
    const [tags, setTags] = useState("")
    const navigate = useNavigate();

    const editButton = async (e) => {



        if (company === "") {
            toast.error('Company Name is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (position === "") {
            toast.error('Position is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (category === "") {
            toast.error('Category is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (requirements === "") {
            toast.error('Requirements is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (salary === "") {
            toast.error('Salary is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (tags === "") {
            toast.error('Tags is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await jobDataService.Editjob({
                company, title, position, category, requirements, salary, tags
            });
            navigate("/admin/alljobs");
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='ml-10'>
                <div className='flex items-center justify-center  max-w-[800px] mx-auto border border-gray-400 rounded-md shadow-lg p-2 mt-10'>
                    <div className='flex flex-col  w-[1000px] px-4 py-2 mx-auto   items-center justify-center gap-6'>
                        <h1 className='text-xl font-semibold text-center'>Edit a Job</h1>
                        <input className=' px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Company Name'
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                        />
                        <input className=' px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Job Title'
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <div className='flex justify-start gap-2  text-lg w-[80%]'>
                            <label className='px-6 py-2' for="cars">Choose a Position:</label>
                            <select className='px-6 py-2 text-center'
                                name="position"
                                onChange={(e) => setPosition(e.target.value)}
                                value={position}
                            >
                                <option value="select">Select</option>
                                <option value="IT">Intern</option>
                                <option value="Business">Associate</option>
                                <option value="Medicine">Junior</option>
                                <option value="Engineering">Senior</option>
                                <option value="Engineering">Manager</option>
                            </select>
                        </div>
                        <div className='flex justify-start gap-2  text-lg w-[80%]'>
                            <label className='px-6 py-2' for="cars">Choose a Category:</label>
                            <select className='px-6 py-2 text-center'
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                <option value="select">Select</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Engineering">Engineering</option>
                            </select>
                        </div>

                        <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter job Requirements'
                            name="requirements"
                            onChange={(e) => setRequirements(e.target.value)}
                            value={requirements}
                        />

                        <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Salary'
                            name="salary"
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                        />
                        <input className='px-6 py-2 outline-gray-500 focus:outline-none w-[80%] border' type="text" placeholder='Enter Tags'
                            name="tags"
                            onChange={(e) => setTags(e.target.value)}
                            value={tags}
                        />
                        <button className='w-[80%] px-6 py-2 text-white bg-blue-500 border rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500' onClick={editButton}>Add Job</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
