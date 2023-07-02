import { Box, Grid } from '@mui/material'
import React from 'react'
import Block3 from '../product/Block3'
import Block4 from '../product/Block4'

function Block2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid sx={{position:"sticky", top:"100px", maxHeight:"100vh"}} item xs={9}>
        <Block3/>
        {/* <div className='border-2 border-solid border-sky-500 my-2 mx-4'>
     <img src="https://admin.mochishoes.com/product/19-120/660/19-120M23.jpg" alt="" /> 

        </div>
        <div className='border-2 border-solid  border-sky-500 mx-4'>
     <img src="https://admin.mochishoes.com/product/19-120/660/19-120O23.jpg" alt="" /> 

        </div>
        <div className='border-2 border-solid my-2 border-sky-500 mx-4'>
     <img src="https://admin.mochishoes.com/product/19-120/660/19-120R23.jpg" alt="" /> 

        </div> */}

      </Grid>
     
      <Grid item xs={7}>
       <Block4/>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Block2