import React, { useContext } from 'react';
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
    return (
        <>
            <div className="dropdown mt-5 ml-16">
  <label tabIndex={0} className="btn m-1">Filter by &#8650; </label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Remote</a></li>
    <li><a>Onsite</a></li>
  </ul>
</div>
         <div className='px-16 my-10 flex gap-5 flex-col'>
            {
                newJobCart.map((job, index) => <SingleItem key={index} job={job} />)
           }
        </div>
        </>
    );
};

export default AppliedJobs;