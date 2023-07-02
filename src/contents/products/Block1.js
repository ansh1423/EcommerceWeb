import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Block1() {
  return (
    <div className='text-base'>
        <p className='mx-4 py-4'>Home / Footwear / Men Shoes</p>
        <div className='flex'>

        <p className='py-3 w-72 mx-7'>Men's Shoes - 594 items</p>
        <div>
        <h1 className='text-3xl font-medium flex mx-5 '>Upgrade Your Style Quotient with Stylish Shoes for Men</h1>
       <p className='text-lg  flex mx-5 py-2 '> Along with wearing fashionable attire, a dashing pair of shoes is just as essential to complement an outfit.</p>

   
    <div className='flex justify-end  py-4 mx-4'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='w-64'>Read More/Less</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The neatness of a man is not just defined by his hygiene but also by his fashion choices. Keeping that in mind, Mochi Shoes features a broad range of shoes for men to keep the style game on point.
          </Typography>
        </AccordionDetails>
      </Accordion>
        
    </div>

        </div>
    </div>
    </div>
);
}
export default Block1