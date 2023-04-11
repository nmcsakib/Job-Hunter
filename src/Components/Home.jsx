import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const el = React.useRef(null);
      // Create reference to store the Typed instance itself
        const typed = React.useRef(null);
    
      React.useEffect(() => {
        const options = {
            strings: 
                ['Success', 'Future', 'Drem Job'],
          
          typeSpeed: 60,
            backSpeed: 60,
            loop: true,
          
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        }
      }, [])
      
    return (
        <div className='font-manrope max-w-[1200px] mx-auto '>   
            <div className="banner px-10 md:-mt-24 mx-auto md:flex justify-between items-center my-10">
                <div className="flex flex-col gap-4">
                <h1 className="font-bold text-7xl leading-tight">
                    One step <br /> closer to your <br /><span className='gradient-text' ref={el} ></span>
                    </h1>
                    <p className="tracking-wide font-light text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <a className="my-btn w-1/2" href='#jobs'>Get started</a>
                </div>
                <img src="resources/Images/banner-person.png" alt="" />
            </div>
            <JobCategory />
            <FeaturedJobs />
        </div>
    );
};

export default Home;