import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { JobsContext } from '../App';

const JobsDetailsPage = () => {
    const {JobsDetails} = useContext(JobsContext)
    const loc = useLocation()
    const { state } = loc;
    // console.log(state);
    // console.log(JobsDetails);
    const jobExists = JobsDetails.find(
        jobData => jobData.id === state
    )
    const {description, jobType, jobTitle, salary, address, responsibilities, experience, educationalRequirements, email, phone} = jobExists;
    return (
        <div className='grid grid-cols-6 gap-8 px-16 my-10'>
            <div className='col-span-4 space-y-4'>
            <p className="font-bold">Job Description: <span className='font-normal'>{description}</span></p>
            <p className="font-bold">Job Responsibilities: <span className='font-normal'>{responsibilities}</span></p>
            <p className="font-bold">Educational Requirements: <span className='font-normal'>{educationalRequirements}</span></p>
            <p className="font-bold">Experience: <span className='font-normal'>{experience}</span></p>
            </div>
            <div className="col-span-2">
            <div className="card bg-[#7E90FE]/10 rounded-none text-gray-800">
  <div className="card-body">
                        <h2 className="card-title">Job Details</h2>
                        <hr />
                        <p className='font-medium'>Salary: {salary.replace('per year', ' ')}</p>
                        <p className='font-medium'>Job: {jobTitle}</p>
                        <h2 className="card-title">Contact</h2>
                        <hr />
                        <p className='font-medium'>Phone: {phone}</p>
                        <p className='font-medium'>Email: {email}</p>
                        <p className='font-medium'>Address: {address}</p>
    <div className="card-actions justify-end">
      <button className="my-btn w-full">Apply Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default JobsDetailsPage;