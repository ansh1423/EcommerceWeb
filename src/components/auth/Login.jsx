import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import Link from "next/link"
import { Dialog } from '@mui/material';
import Sign from './Sign'
function Login({setDilogOpen}) {
const handleClick = () =>{
  setDilogOpen(false)
}
const [openSign,setopenSign]=useState(false)
const handleOnchange=()=>{
  setopenSign(true)
}
  return (
    <form action="">
       <Dialog open={openSign} >
         <Sign setopenSign = {setopenSign} setDilogOpen={setDilogOpen} />
      </Dialog>
      <div className="border-2  rounded" style={{width:"30vw"}} >
        <h1 className='flex justify-end '><ClearIcon onClick={handleClick} /></h1>
        <h1 className='flex justify-center text-base py-3 my-1'>LOGIN</h1>
        <div className='flex flex-col px-3 w-full'>
          <div>
          <label htmlFor="email" >Email </label>
        <input type="email" name="email" className='border-2  w-full px-2 my-2 py-4' id="email" placeholder='Enter the email*' />
          </div>
          <label htmlFor="password">Password</label>
          <div>
        <input type="password" name="password" className='border-2 px-2 w-full py-4 my-2 ' id="password" placeholder='Enter the Password'/>
          </div>
         <div className='flex justify-center'>
          <button type="submit" className='py-2 bg-teal-300 text-white px-3 my-3'>LOGIN</button>
          </div>
          <div>
            <h1 className='flex justify-center'>Already have a account. </h1>
            {/* <a href="/" className='flex py-4 justify-center'>Sign Up</a> */}
          <Link href={"/"} className='flex justify-center text-teal-500' >Forget password</Link>
          <h1 className='flex justify-center py-3'>DON'T HAVE A ACCOUNT? <p onClick={handleOnchange} style={{color:'teal' , paddingLeft:'5px'}} > SIGN UP</p> </h1>
    
          
          </div>
          
        </div>
      </div>
      </form>
  )
}

export default Login