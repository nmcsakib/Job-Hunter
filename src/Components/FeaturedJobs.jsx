import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../App';
import JobDetailsCard from './JobDetailsCard';
import JobCard from './JobCard';

const FeaturedJobs = () => {
    const jobDetails = useContext(JobsContext)
    const shortJobsCard = jobDetails?.JobsDetails.slice(0, 4);
    // console.log(shortJobsCard);
    const [jobs, setJobs] = useState(shortJobsCard);
    const handelAllJobs = () => {
        setJobs(jobDetails?.JobsDetails)
    }
    
    return (
        <div className=' my-10 flex flex-col items-center' id="jobs" >
             <div className="text-center">
            <h1 className="font-bold text-5xl my-5">Featured Job</h1>
            <p className='tracking-wide font-light text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>   
            </div>
            <div className='grid md:grid-cols-2 gap-10 mx-auto my-5'>
                {
                     jobs?.map(jobsDetail => <JobDetailsCard jobDetail={jobsDetail} key={jobsDetail.id} />)
                    
                }
            </div>
            <button onClick={handelAllJobs} className={jobs.length>4 ? `hidden` : `block my-btn w-1/2 md:w-1/4 `}>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;