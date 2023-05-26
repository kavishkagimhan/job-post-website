import React, { useState, useEffect } from 'react';
import applyDataService from '../services/Applyservice';
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from "react-spinners/PuffLoader";


const Application = () => {

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        getApplications();
    }, []);

    const getApplications = async () => {
        const data = await applyDataService.getAllApplications();
        setApplications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(applications);
    };


    const deleteHandler = async (id) => {
        await applyDataService.deleteApplication(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getApplications();
        })
            .catch((err) => {
                console.log(err);
            })
    };




    return (
        <div className='flex '>
            <div className='h-screen overflow-y-auto w-[1250px] py-5'>
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
                        <div>
                            <h1 className='text-3xl font-semibold text-center'>All Job Applications</h1>
                            <button className='px-4 py-2 mt-10 ml-8 text-white bg-blue-500 border hover:bg-white hover:border-blue-500 hover:text-blue-500'
                            onClick={getApplications()}
                            >
                                Refresh
                            </button>
                            <table className="w-[1100px] p-2 ml-14 mt-14 shadow-lg ">
                                <thead className='items-center justify-between p-2 bg-blue-700'>
                                    <tr className='p-1 cursor-pointer' >
                                        <th className='px-4 py-2 text-lg text-white'>Name</th>
                                        <th className='px-4 py-2 text-lg text-white'>Email</th>
                                        <th className='px-4 py-2 text-lg text-white'>Phone</th>
                                        <th className='px-4 py-2 text-lg text-white'>Job Title</th>
                                        <th className='px-4 py-2 text-lg text-white'>Job Possiton</th>
                                        <th className='px-4 py-2 text-lg text-white'>Company</th>
                                        <th className='px-4 py-2 text-lg text-white'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {applications
                                        .map((doc, index) => {
                                            return (
                                                <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-200 text-center'>
                                                    <td className='px-4 py-2 text-left'>{doc.name}</td>
                                                    <td className='px-4 py-2 text-left'>{doc.email}</td>
                                                    <td className='px-4 py-2 text-left'>{doc.phone}</td>
                                                    <td className='px-4 py-2 text-left'>{doc.title}</td>
                                                    <td className='px-4 py-2 text-left'>{doc.possition}</td>
                                                    <td className='px-4 py-2 text-left'>{doc.company}</td>
                                                    <td className='px-4 py-2 text-left'>
                                                        <div className='flex gap-1 ml-8 text-4xl cursor-pointer'>
                                                            <AiFillDelete className='p-1 hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)} />
                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                }

            </div>
        </div>
    )
}

export default Application