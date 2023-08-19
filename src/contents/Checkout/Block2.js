import React from 'react'

function Block2() {
  return (
    <div className=' w-full h-full  px-4 mx-4'>
    <p className='py-2 text-xl font-semibold'>Order Summary</p>
    <div className='flex  py-2 justify-between'>
      <p className='flex font-extralight text-lg '>Coupon</p>
      <button type="Apply" className='flex font-extralight text-lg border-2 py-1 px-2 rounded-md'>Apply</button>
    </div>
    <p className='py-2'> Price Details</p>
    <div className='flex text-lg font-thin py-2 justify-between'>
      <p className='flex '>Total MRP</p>
      <button type="Apply" className='flex '>Rs. 2,490.00</button>
    </div> 
    <div className='flex text-lg font-thin py-2 justify-between'>
      <p className='flex '>Total Discount on MRP</p>
      <button type="Apply" className='flex '>Rs. -0.00</button>
    </div>

    <div className='flex text-lg font-thin py-2 justify-between'>
      <p className='flex '>Total Discount</p>
      <button type="Apply" className='flex '>Rs. -0.00</button>
    </div>

    <div className='flex text-lg font-thin py-2 justify-between'>
      <p className='flex '>Shiping Charge</p>
      <button type="Apply" className='flex '>Rs. 0.00</button>
    </div>

    <div className='flex text-lg font-bold py-2 justify-between'>
      <p className='flex '>Order Total</p>
      <button type="Apply" className='flex '>Rs. 2,490.00</button>
    </div>

   
    
  </div>
  )
}

export default Block2