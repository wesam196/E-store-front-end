import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.js'
import './index.css'
import { ContextProvider } from './contexts/contextprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={App}/>
    </ContextProvider>
  </React.StrictMode>,
)