import React from 'react'
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Block4 from './Block4';
import { ShoesWala } from '../../constants/products/Shoes';
import Block5 from './Block5';

function Block3() {
  return (
    <Box sx={{ width: '100%',  height:'auto' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={2.5}>
        <Block5/>
      </Grid>
      
      <Grid xs={9.5}>

          <div className='flex  max-md::hidden justify-evenly flex-wrap' >
        {ShoesWala.map((item, index)=>(
      <div className='w-60 h-96 my-2 mx-2' key={index} >
        <div className='border-2 w-60  h -80 '>
           <Block4 Shoesimage ={item.productImages} />
        </div>
        <h1 className=''>{item.name}</h1>
        <p className=''>{item.title}</p>
        <p className=' '>Rs {item.price}</p>
       </div>
      
      ))
    }
       </div>
      </Grid>
     
      
    </Grid>
  </Box>
  )
}
export default Block3