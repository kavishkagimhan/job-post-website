import React, { useState, useEffect } from 'react'
import jobDataService from '../services/Postservice';
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from "react-spinners/PuffLoader";
import Sidebar from './Sidebar'

const Alljobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
        const data = await jobDataService.getAllJobs();
        console.log(jobs);
        setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await jobDataService.deleteJob(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getJobs();
        })
            .catch((err) => {
                console.log(err);
            })
    };

    const truncateRequirements = (requirements) => {
        const words = requirements.split(' ');
        if (words.length > 5) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return requirements;
    };

    return (
        <div className='flex '>
            <div>
                <Sidebar />
            </div>
            <div className='h-screen overflow-y-auto w-[1250px] py-5'>
                <Link to='/admin/addjob'><button className='px-4 py-2 mt-10 ml-8 text-white bg-blue-500 border hover:bg-white hover:border-blue-500 hover:text-blue-500'>Add New Job</button></Link>
                {
                    loading ?
                        <div className='flex justify-center mt-20'>
                            <PuffLoader color="rgba(54, 215, 183, 1)"
                                cssOverride={{}}
                                loading
                                size={76}
                                speedMultiplier={2} />
                        </div>
                        :
                        <table class="w-[1100px] p-2 ml-14 mt-14 shadow-lg ">
                            <thead className='items-center justify-between p-2 bg-blue-700'>
                                <tr className='p-1' >
                                    <th className='px-4 py-2 text-lg text-white'>Company Name</th>
                                    <th className='px-4 py-2 text-lg text-white'>Job Title</th>
                                    <th className='px-4 py-2 text-lg text-white'>Job Position</th>
                                    <th className='px-4 py-2 text-lg text-white'>Category</th>
                                    <th className='px-4 py-2 text-lg text-white'>Requirements</th>
                                    <th className='px-4 py-2 text-lg text-white'>Salary</th>
                                    <th className='px-4 py-2 text-lg text-white'>Tags</th>
                                    <th className='px-4 py-2 text-lg text-white'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {jobs
                                    .map((doc, index) => {
                                        return (
                                            <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-200 text-center'>
                                                <td className='px-4 py-2 text-left'>{doc.company}</td>
                                                <td className='px-4 py-2 text-left'>{doc.title}</td>
                                                <td className='px-4 py-2 text-left'>{doc.position}</td>
                                                <td className='px-4 py-2 text-left'>{doc.category}</td>
                                                <td className='px-4 py-2 text-left'>{truncateRequirements(doc.requirements)}</td>
                                                <td className='px-4 py-2 text-left'>{doc.salary}</td>
                                                <td className='px-4 py-2 text-left'>{doc.tags}</td>
                                                <td className='px-4 py-2 text-left'>
                                                    <div className='flex gap-1 ml-8 text-4xl cursor-pointer'>
                                                        <AiFillDelete className='p-1 hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)} />
                                                        <Link to={`/admin/editjob/${doc.id}`}> <AiFillEdit className='p-1 hover:bg-blue-500' /></Link>
                                                        <Link to=''> <AiFillEye className='p-1 hover:bg-blue-500' /></Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                }

            </div>
        </div>
    )
}

export default Alljobs