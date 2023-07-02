import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Block5() {
  return (
    <>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
           <div className='flex'>
            <div className='border-2 w-11  h -8 border-black flex items-center justify-center  bg-slate-50 my-1 mx-2 py-1 px-1 '>
                4
            </div>
            <div className='border-2   h -80 border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                5
            </div>
            <div className='border-2   h -80 border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                6
            </div>
            <div className='border-2   h -80 border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                7
            </div>
           </div>
           <div className='flex'>
            <div className='border-2   h -80 border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                8
            </div>
            <div className='border-2   border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                9
            </div>
            <div className='border-2 border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                10
            </div>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                11
            </div>
           </div>
           <div className='flex'>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                12
            </div>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                41
            </div>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                42
            </div>
            <div className='border-2 w border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
            43
            </div>
           </div>
           <div className='flex'>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                44
            </div>
            <div className='border-2  border-black flex items-center justify-center w-11 h-8 bg-slate-50 my-1 mx-2 py-1 px-1 '>
                45
            </div>
           
           </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Brand</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="J.Fontini" />
      <FormControlLabel required control={<Checkbox />} label="Mochi" />
      <FormControlLabel required control={<Checkbox />} label="Genx" />
      <FormControlLabel required control={<Checkbox />} label="Clarks" />
      <FormControlLabel required control={<Checkbox />} label="Language" />
      <FormControlLabel required control={<Checkbox />} label="Vou Welx" />
      <FormControlLabel required control={<Checkbox />} label="Id" />
      <FormControlLabel required control={<Checkbox />} label="Mochi" />
      <FormControlLabel required control={<Checkbox />} label="Genx" />
      <FormControlLabel required control={<Checkbox />} label="Clarks" />
      <FormControlLabel required control={<Checkbox />} label="Language" />
      <FormControlLabel required control={<Checkbox />} label="Vou Welx" />
      <FormControlLabel required control={<Checkbox />} label="Id" />

    </FormGroup>

      </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Heels Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Heels height</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Lining Material</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Colour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Ocassion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          </>
  )
}

export default Block5