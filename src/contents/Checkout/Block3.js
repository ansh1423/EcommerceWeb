import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails= styled(MuiAccordionDetails )(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
function Block3() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
    <Accordion expanded={expanded === 'panel1'} sx={{width:'100%'}} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>CREDIT CARD</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end' className='flex justify-end'>
         <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>DEBIT CARD</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>WALLET</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>NET BANKING</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>CASH ON DELIVERY</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
  </>
);
}

export default Block3