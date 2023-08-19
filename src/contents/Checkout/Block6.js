import { TextField } from '@mui/material'
import React from 'react'

function Block6() {
  return (
    <>
    <div className='mx-10 '>
      <TextField fullWidth label="Name" className='py-1' id="fullWidth" />
      <TextField fullWidth label="House" className='py-1' id="fullWidth" />
      <TextField fullWidth label="Address" className='py-1' id="fullWidth" />
      <TextField fullWidth label="District " className='py-1' id="fullWidth" />
      <TextField fullWidth label="State"  className='py-1' id="fullWidth" />
      <TextField fullWidth label="Postal Code"  className='py-1' id="fullWidth" />
      <TextField fullWidth label="Landmark"  className='py-1' id="fullWidth" />
      <TextField fullWidth label="Mobile No."  className='py-1' id="fullWidth" />
      <TextField fullWidth label="Father Name"  className='py-1' id="fullWidth" />
      <h1>Select Address Type</h1>
      <div>
        <input type="checkbox" name="Home" id="Home" className=' py-2 mx-2' placeholder='Home' />Home
        <input type="checkbox" name="Home" id="Home" className='py-1 mx-2' placeholder='Home' />Office
      </div>
    
    </div>
    </>
  )
}

export default Block6