import React from 'react';
import VanillaTilt from 'vanilla-tilt';
const JobCard = ({ job }) => {

    const { logo, name, jobsAvailable } = job;
    return (
        <div
        ref={el => {
            if (el) VanillaTilt.init(el, {
                max: 25, 
                speed: 400, 
                glare: true, 
                'max-glare': 0.5,
                reset: true,
                axis: 'x'
        }); }}
            className='bg-[#9873FF]/20 py-8 px-8 rounded-md space-y-2'>
            <img className='bg-[#E90FE] rounded-md' src={logo} alt={name} />
            <h3 className='font-bold tracking-wide'>{name}</h3>
            <p>{jobsAvailable} Available</p>
        </div>
    );
};

export default JobCard;