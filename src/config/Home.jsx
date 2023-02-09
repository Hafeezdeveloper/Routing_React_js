import { Grid, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Grid container mt={'55px'} >
        <Grid item xs={12} sm={12} md={12}  sx={{textAlign: {md:'center',sm:'center',xs:'center'}}}>
            <Typography variant='h4' >
                Explore the Cryptoeconomy
            </Typography>
            <Typography variant='h6' sx={{fontSize:'14px',opacity:'0.5'}} >
            In the past 24 hours the market is up 0.07%
            </Typography>
             <input placeholder='Search for assest' type="text" className='form-control ' style={{padding:'15px',width:"50%",margin:'0 auto',borderRadius:'25px',height:'55px'}} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
