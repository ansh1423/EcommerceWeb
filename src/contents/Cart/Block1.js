import { Box, Grid } from '@mui/material'
import React from 'react'
import Block2 from './Block2'
import Block3 from './Block3'

function Block1() {
  return (
    <> 
     <div className='my-28'>
    <div className='text-2xl mx-4 my-5'>
        Shopping Cart
    </div>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2} columns={16}>
       <Grid sx={{position:"sticky", top:"100px", maxHeight:"100vh"}} item xs={11}>
         <Block3/>
       </Grid>
      
       <Grid item xs={5}>
        <Block2/>
       </Grid>
     </Grid>
   </Box>
   </div>
   </>
  )
}

export default Block1