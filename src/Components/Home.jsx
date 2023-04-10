import React from 'react';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div className='font-manrope max-w-[1200px] mx-auto '>
            <div className="banner px-10 mx-auto flex justify-between items-center my-10">
                <div className="flex flex-col gap-4">
                <h1 className="font-bold text-7xl leading-tight">
                    One step <br /> closer to your <br /><span className='gradient-text'>Drem Job</span>
                    </h1>
                    <p className="tracking-wide font-light text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="my-btn w-1/2">Get started</button>
                </div>
                <img src="resources/Images/banner-person.png" alt="" />
            </div>
            <JobCategory />
            <FeaturedJobs />
        </div>
    );
};

export default Home;