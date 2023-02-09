import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../config/Home'
import Login from '../config/Login'
import Signup from '../config/Signup'
import { Typography } from '@mui/material';
import Leran from '../config/leran';
import Individual from '../config/individual';

const Abc = () => {
  return (
    <BrowserRouter>
      <Navbar  expand="lg" className='border-bottom'>
      <Container    >
        <Navbar.Brand href="#"><img width={'112'} height={20} src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="" /></Navbar.Brand>
        <Button id='abcd' className=' d-none'>Get started</Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0" id='sm2'
            
            style={{ maxHeight: '100vh' }}
            // navbarScroll
          >
            <Nav.Link  > <Link className='sm2 mx-3 ' to={'home'}>Home</Link></Nav.Link>
            <Nav.Link > <Link className='sm2 mx-3 ' to={'learn'}>Learn</Link></Nav.Link>
            <Nav.Link > <Link className='sm2 mx-3 ' to={'indi'}>Individual</Link></Nav.Link>
            <Nav.Link > <Link className='sm2 mx-3 ' >Businesses</Link></Nav.Link>
            <Nav.Link > <Link className='sm2 mx-3 ' >Developers</Link></Nav.Link>
            <Nav.Link > <Link className='sm2 mx-3 ' >Company</Link></Nav.Link>
            
          
          </Nav>
          <Nav>

            <Nav.Link > <Link  className='sm22 mx-3 btn btn-secondary ' to={'login'}>Login </Link></Nav.Link>
          <Button > <Link className='sm22  btn btn-primary' to={'signup'}>Sign In</Link></Button>
          </Nav>
                
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login /> } />
        <Route path='signup' element={<Signup />} />
        <Route path='learn' element={<Leran />} />
        <Route path='indi' element={<Individual/>}></Route>
    </Routes> 
    </BrowserRouter>
  )
}

export default Abc
