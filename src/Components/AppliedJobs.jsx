import React, { useContext, useState } from 'react';
import { JobsContext } from '../App';
import { getStoredJobs } from '../Utilities/fakeDB';
import SingleItem from './SingleItem';

const AppliedJobs = () => {
    
    const { JobsDetails } = useContext(JobsContext)
    const storedItem = getStoredJobs();
 const jobId = Object.keys(storedItem)
    console.log(JobsDetails);
    console.log(jobId);
    let newJobCart = [];
    const result = JobsDetails.map(job => {
        if (jobId.includes(job.id)) {
            newJobCart.push(job)
        }
    });
    console.log(newJobCart);
    const [appliedJob, setAppliedJob] = useState(newJobCart);
    const handelSortJobs = (isTrue) => {
        if (isTrue) {
            const sortJobsRemote = newJobCart.filter(job => job.jobType === 'Remote');
        setAppliedJob(sortJobsRemote);
        } else {
            const sortJobsOnsite = newJobCart.filter(job => job.jobType === 'Onsite');
        setAppliedJob(sortJobsOnsite);
        }
    }
    return (
        <>
            <div className="dropdown rounded-none dropdown-hover mt-5 ml-16">
  <label tabIndex={0} className="my-btn rounded-none m-1">Filter by &#8650; </label>
  <ul tabIndex={0} className="dropdown-content rounded-none menu p-2 shadow w-52">
    <li className='btn'><a onClick={() => handelSortJobs(true)}>Remote</a></li>
    <li className='btn'><a onClick={() => handelSortJobs(false)}>Onsite</a></li>
  </ul>
</div>
         <div className='px-16 my-10 flex gap-5 flex-col'>
            {
                appliedJob.map((job, index) => <SingleItem key={index} job={job} />)
           }
        </div>
        </>
    );
};

export default AppliedJobs;