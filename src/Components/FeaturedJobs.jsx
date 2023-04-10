import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../App';
import JobDetailsCard from './JobDetailsCard';
import JobCard from './JobCard';

const FeaturedJobs = () => {
    const jobDetails = useContext(JobsContext)
    const shortJobsCard = jobDetails?.JobsDetails.slice(0, 4);
    console.log(shortJobsCard);
    const [jobs, setJobs] = useState(shortJobsCard);
    const handelAllJobs = () => {
        setJobs(jobDetails?.JobsDetails)
    }
    // let isShort = true;
    // useEffect(() => {
    //     const handelJobs = (short) => {
    //         if (short) {
    //             console.log('yes');
    //             const fullJobsCard = jobDetails.JobsDetails.slice(0, 10);
    //             setJobs(fullJobsCard)
    //             isShort = false;
    //         } else {
    //             console.log('noooooo');
                
    //             const shortJobsCard = jobDetails?.JobsDetails.slice(0, 4);
    //             setJobs(shortJobsCard)
    //             isShort = true;
    //         }
                
    //     }
    //     handelJobs()
    // },[])
    return (
        <div className=' my-10 flex flex-col items-center' >
             <div className="text-center">
            <h1 className="font-bold text-5xl my-5">Featured Job</h1>
            <p className='tracking-wide font-light text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>   
            </div>
            <div className='grid grid-cols-2 gap-10 mx-auto my-5'>
                {
                     jobs?.map(jobsDetail => <JobDetailsCard jobDetail={jobsDetail} key={jobsDetail.id} />)
                    
                }
            </div>
            <button onClick={handelAllJobs} className="my-btn w-1/4">See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;