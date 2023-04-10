import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import VanillaTilt from 'vanilla-tilt';
// import { JobsIdContext } from '../main';
const JobDetailsCard = ({ jobDetail }) => {
    const { logo, jobTitle, jobType, isFullTime, Company, address, salary, id } = jobDetail;
//    const handelJobsData = useContext(JobsIdContext)
    return (
        <div
        ref={el => {
            if (el) VanillaTilt.init(el, {
                max: 15, 
                speed: 500, 
                reset: true,
                axis: 'x',
                reverse: true
        }); }}
            className="card w-96 bg-[#dddddd]/30 rounded-none border">
            <img className='p-1 h-16 w-32 ml-10 mt-5 rounded-lg' src={logo} alt="Shoes" />
            <div className="card-body ">
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
                <Link to={`/${id}`} state={id} >
                <button className="my-btn w-3/4">View Details</button>
               </Link>

            </div>
        </div>
    );
};

export default JobDetailsCard;