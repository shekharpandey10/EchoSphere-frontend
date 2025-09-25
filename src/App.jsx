import { useState } from 'react'
import Button from './components/Button'
// import './App.css'
import SignUp from './components/pages/SignUp'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div className='bg-blue-50 h-screen w-full flex justify-center items-center '>
      <SignUp/>
      <ToastContainer/>
    </div>
  )
}

export default App
