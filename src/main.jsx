import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import JobsDetailsPage from './Components/JobsDetailsPage'
import ErrorPage from './Components/ErrorPage'


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
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}><App /></RouterProvider>
)
