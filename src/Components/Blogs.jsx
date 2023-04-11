import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10 space-y-5'>
            <p className="font-bold">When should you use Context API: <span className='font-normal'>When I need a data in many components I use context API </span></p>
            <p className="font-bold">What is custom hook:  <span className='font-normal'>custom hooks are reusable functions that I can use to add special and unique functionality to the React applications.</span></p>
            <p className="font-bold">useRef(): <span className='font-normal'> useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current.</span></p>
            <p className="font-bold">useMeme(): <span className='font-normal'>useMemo() is a React Hook that lets you cache the result of a calculation between re-renders..</span></p>
        </div>
    );
};

export default Blogs;