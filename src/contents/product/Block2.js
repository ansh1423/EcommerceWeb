import { Box, Grid } from '@mui/material'
import React from 'react'
import Block3 from '../product/Block3'
import Block4 from '../product/Block4'
import { useSelector } from 'react-redux'

function Block2() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid sx={{position:"sticky", top:"100px", maxHeight:"100vh"}} item xs={9}>
        <Block3/>
      </Grid>
      <Grid item xs={7}>
       <Block4/>
      </Grid>
    </Grid>
  </Box>
  )
}
export default Block2