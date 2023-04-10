import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';
const SingleItem = ({ job }) => {
    const { state } = useLocation();
    const { logo, id, jobTitle, Company, isFullTime, jobType, salary, address } = job;
    return (
        <div className='flex gap-10 items-center bg-[#dddddd]/30 rounded-none border'>
            <div>
        <img className='h-20 w-32 p-2' src={logo} alt="" />
            </div>
            <div className='space-y-3' >
               
                <h2 className="card-title">
                    {jobTitle}
                </h2>
                <p>{Company}</p>
                <div className="flex gap-2">
                    <div className="p-[2px] rounded bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">
                        {isFullTime ? <div className="px-6 py-2 text-blue-800 bg-white">{"Full-time"}</div > : <div className="px-6 py-2 text-blue-800 bg-white">{"Part-time"}</div>}
                    </div>
                    <div className="p-[2px] rounded bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">
                        <div className="px-6 py-2 text-blue-800 bg-white">{jobType}</div>
                    </div>
                </div>

                <p className='text-sm leading-relaxed'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {" "}{address} <br /> <span>
                        <FontAwesomeIcon icon={faDollar} />
                        {" "} Salary: {salary.replace('per year', ' ')}</span></p>
            </div>
            <div className='ml-auto'>
            <Link to={`/${id}`} state={id} >
                <button className="my-btn mr-2">View Details</button>
               </Link>
            </div>
        </div>
    );
};

export default SingleItem;