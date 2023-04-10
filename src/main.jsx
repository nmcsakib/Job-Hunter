import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('../resources/jobDetails.json'),
    children: [
      { path: '/', element: <Home />, },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}><App /></RouterProvider>
)
