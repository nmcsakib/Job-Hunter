import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const JobsContext = createContext([]);

function App() {
  const jobsList = useLoaderData(); 

  return (
    <div className="App ">
      <JobsContext.Provider value={jobsList}>
      <Header />
      <Outlet />
      </JobsContext.Provider>
    </div>
  )
}

export default App
