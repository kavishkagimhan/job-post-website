import React, { useState, useEffect } from 'react';
import jobDataService from '../services/Postservice';
import { Link } from 'react-router-dom';

const Jobview = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState([]);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
        const data = await jobDataService.getAllJobs();
        setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handleSearch = () => {
        const filtered = jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.position.toLowerCase().includes(search.toLowerCase()) ||
                job.requirements.toLowerCase().includes(search.toLowerCase()) ||
                job.company.toLowerCase().includes(search.toLowerCase()) ||
                job.tags.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    return (
        <div>
            <h2 className='p-4 text-3xl font-semibold text-center text-blue-500'>Find Your Dream Job</h2>
            <div className='w-[100%] justify-end flex mr-10 max-w-[550px] mx-auto px-4 sm:px-2'>
                <input className='border border-blue-600 rounded-md p-[12px] w-1/2 focus:outline-none ' type="text" placeholder='ex. Frontend, web'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch} className='px-6 bg-blue-400 p-[12px] text-white hover:bg-blue-700 transition delay-150 duration-300 w-auto'>Search</button>
            </div>
            <div className='p-4'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredJobs.map((job, index) => (
                        <div className='border-blue-500 rounded-md w-[80%] border mx-auto p-4 mt-4 hover:shadow-xl' key={job.id}>
                            <h2 className='text-2xl font-semibold text-blue-600 cursor-pointer hover:underline'>{job.title}</h2>
                            <div className='flex flex-col gap-2 py-2 md:items-center md:flex-row'>
                                <label className='text-lg font-semibold text-left md:w-1/6'>Position :</label>
                                <p className='w-5/6 text-left'>{job.position}</p>
                            </div>
                            <hr></hr>
                            <div className='flex flex-col gap-2 py-2 md:items-center md:flex-row'>
                                <label className='text-lg font-semibold text-left md:w-1/6'>Requirements :</label>
                                <p className='w-5/6 text-left'>{job.requirements}</p>
                            </div>
                            <hr></hr>
                            <div className='flex flex-col gap-2 py-2 md:items-center md:flex-row'>
                                <label className='text-lg font-semibold text-left md:w-1/6'>Salary: </label>
                                <p className='w-5/6 text-left'>{job.salary}</p>
                            </div>
                            <hr></hr>
                            <div className='flex flex-col gap-2 py-2 md:items-center md:flex-row'>
                                <label className='text-lg font-semibold text-left md:w-1/6'>Company :</label>
                                <p className='w-5/6 text-left'>{job.company}</p>
                            </div>
                            <hr></hr>
                            <div className='flex flex-col gap-2 py-2 md:items-center md:flex-row'>
                                <label className='text-lg font-semibold text-left md:w-1/6'>Tags: </label>
                                <p className='w-5/6 text-left'>{job.tags}</p>
                            </div>
                            <hr></hr>


                            <Link to={{
                                pathname: `/apply/${job.id}/${job.company}/${job.title}/${job.position}`
                            }}>
                                <button
                                    className='px-6 py-2 mt-4 text-white bg-blue-500 border rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500'

                                >
                                    Apply
                                </button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}




export default Jobview