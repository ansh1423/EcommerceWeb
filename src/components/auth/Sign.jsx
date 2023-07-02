import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import Link from "next/link"


function Sign({setopenSign,setDilogOpen}) {
  const handleClick=()=>{
    setopenSign(false)
  }
  const handleLogin=()=>{
    setDilogOpen(true)
    setopenSign(false)
  }
  
return (
    <form action="">
      <div className="border-2  rounded" style={{width:"30vw"}} >
        <h1 className='flex justify-end '><ClearIcon onClick={handleClick} /></h1>
        <h1 className='flex justify-center text-base py-3 my-1'>SIGN UP</h1>
        <div className='flex flex-col px-3 w-full'>
        <div>
          <label htmlFor="email" >Name </label>
        <input type="text" name="text" className='border-2  w-full px-2 my-2 py-4' id="email" placeholder='Enter the Name' />
          </div>
          <div>
          <label htmlFor="email" >Email </label>
        <input type="email" name="email" className='border-2  w-full px-2 my-2 py-4' id="email" placeholder='Enter the email*' />
          </div>
          <label htmlFor="password">Password</label>
          <div>
        <input type="password" name="password" className='border-2 px-2 w-full py-4 my-2 ' id="password" placeholder='Enter the Password'/>
          </div>
         <div className='flex justify-center'>
          <button type="submit" className='py-2 bg-teal-300 text-white px-3 my-3'>Create an account</button>
          </div>
          <div>
          <h1 className='flex justify-center  py-3'>Already have a account. <p style={{color:'teal' , paddingLeft:'5px'}}onClick={handleLogin}>  LOGIN NOW</p> </h1>   
          </div>
          
        </div>
      </div>
      </form>
  )
}
export default Sign