import React from 'react'
import ReactDOM from 'react-dom/client'
import ClinicApp from './App.tsx'
import './index.css'
import Login from './Login.tsx'
import Register from './Register.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
