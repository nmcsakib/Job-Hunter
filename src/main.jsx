import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import JobsDetailsPage from './Components/JobsDetailsPage'
import ErrorPage from './Components/ErrorPage'
import AppliedJobs from './Components/AppliedJobs'
import Statistics from './Components/Statistics'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => fetch('../resources/jobDetails.json'),
    children: [
      { path: '/', element: <Home />, },
      {
        path: '/:id',
        element: <JobsDetailsPage />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}><App /></RouterProvider>
)
