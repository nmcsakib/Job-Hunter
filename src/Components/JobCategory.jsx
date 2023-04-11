import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('resources/Jobs.json').then(res => res.json()).then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
            <h1 className="font-bold text-5xl my-5">Job Category lists</h1>
            <p className='tracking-wide font-light text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>   
            </div>
            <div className='flex flex-col md:flex-row gap-8 justify-between px-16 my-10'>
                {
                   jobs?.categories?.map(job => <JobCard job={job} key={job.id} />)
               }
            </div>
        </div>
    );
};

export default JobCategory;