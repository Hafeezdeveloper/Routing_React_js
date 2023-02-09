import { Button } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {

  let navigate = useNavigate()
  
  return (
    <div>
      <h2>Login</h2>
      <h5>Move towards / Home Page</h5>
      <Button variant='contained' onClick={() => navigate('/home')}>Home </Button>
    </div>
  )
}

export default Login
