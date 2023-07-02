import React from 'react'

function Sign() {
  return (
    <form action="">
    <div className="border-2  rounded m-auto  ">
      <h1 className='flex justify-end'><ClearIcon onClick={handleClick} /></h1>
      <h1 className='flex justify-center text-base py-3 my-1'>SIGN UP</h1>
      <div className='flex flex-col'>
       <input type="text" name="text" id="text" placeholder='Enter the Name' />
      <input type="email" name="email" id="email" className='border-2 px-2 py-4 my-2 mx-12' placeholder='Enter  the email' />
      <input type="password" name="password" className='border-2 px-2 py-4 my-2 mx-12' id="password" placeholder='Enter the Password'/>
      <input type="password" name="password" className='border-2 px-2 py-4 my-2 mx-12' id="password" placeholder='Confirm the Password'/>
       <div className='flex justify-center'>
        <button type="submit" className='py-2 bg-slate-900 px-3 my-3'>SIGN UP</button>
        </div>
        
      </div>
    </div>
    </form>
  )
}

export default Sign