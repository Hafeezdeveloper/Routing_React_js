import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
   let naviga =  useNavigate()
  return (
    <div>
      <h1>SignUp</h1>
      <h2>Move towards login page</h2>
      <Button variant='contained' onClick={() => naviga('/login')}>Click Me</Button>
    </div>
  )
}

export default Signup
