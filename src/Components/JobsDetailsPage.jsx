import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { JobsContext } from '../App';
import { addToDb } from '../Utilities/fakeDB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobsDetailsPage = () => {
    const {JobsDetails} = useContext(JobsContext)
    const loc = useLocation()
    const { state } = loc;
    const jobExists = JobsDetails.find(
        jobData => jobData.id === state
    )
    const { description, id, jobTitle, logo, salary, address, responsibilities, experience, educationalRequirements, email, phone } = jobExists;
    let count = 0;
    const handelFunc = (id) => {
        count = 1;
        addToDb(id)
        if (count <= 1) {
            toast("Applied Successfully");
        } else {
            toast("Already added !!");
        }
    }
    return (
        <div className='md:grid grid-cols-6 gap-8 px-16 my-10'>
            <div className='col-span-4 space-y-4'>
               <img className='w-32 h-16 rounded-md' src={logo} alt="" />
            <p className="font-bold">Job Description: <span className='font-normal'>{description}</span></p>
            <p className="font-bold">Job Responsibilities: <span className='font-normal'>{responsibilities}</span></p>
            <p className="font-bold">Educational Requirements: <span className='font-normal'>{educationalRequirements}</span></p>
            <p className="font-bold">Experience: <span className='font-normal'>{experience}</span></p>
            </div>
            <div className="col-span-2">
            <div className="card bg-[#7E90FE]/20 rounded-none text-gray-800">
  <div className="card-body">
                        <h2 className="card-title">Job Details</h2>
                        <hr className='bg-gray-400 h-[2px]' />
                        <p className='font-medium'>Salary: {salary.replace('per year', ' ')}</p>
                        <p className='font-medium'>Job: {jobTitle}</p>
                        <h2 className="card-title">Contact</h2>
                        <hr className='bg-gray-400 h-[2px]' />
                        <p className='font-medium'>Phone: {phone}</p>
                        <p className='font-medium'>Email: {email}</p>
                        <p className='font-medium'>Address: {address}</p>
    
                    </div>
                  
                </div>
                <div className="mt-5">
      <button onClick={() => handelFunc(id)} className="my-btn w-1/2 md:w-full">Apply Now</button>
    </div>
            </div>
        </div>
    );
};

export default JobsDetailsPage;