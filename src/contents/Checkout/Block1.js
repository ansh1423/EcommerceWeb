
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Block2 from '../Checkout/Block2';

const steps = [
    
  'Shipping',
  'Payment'
  
];

function Block1() {
  return (
    <div className=' py-4 w-full'>
     <img
              src="https://www.mochishoes.com/images-mochi/mochi-logo.webp"
              alt=""
              className=" flex justify-start w-44"
            />
    <Box sx={{ width: '100%' , justifyContent:'center', display:'flex' }}>
    <Stepper sx={{width:'50%'}} activeStep={1} alternativeLabel>
      {/* {steps.map((label) => ( */}
        <Step key="hry">
          <StepLabel><Block2/></StepLabel>\
         </Step> 
        <Step key="hry">
          
          <StepLabel>hrlo</StepLabel>
        </Step>
    
    </Stepper>
  </Box>
  </div>
);
}
export default Block1