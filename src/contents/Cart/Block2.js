import React from 'react'

function Block2() {
  return (
      <div className=' w-72 h-96  px-4 mx-4'>
        <p className='py-2'>Order Summary</p>
        <div className='flex  py-2 justify-between'>
          <p className='flex font-extralight text-sm '>Coupon</p>
          <button type="Apply" className='flex font-extralight text-sm border-2 py-1 px-2 rounded-md'>Apply</button>
        </div>
        <p className='py-2'> Price Details</p>
        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total MRP</p>
          <button type="Apply" className='flex '>Rs. 2,490.00</button>
        </div> 
        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total Discount on MRP</p>
          <button type="Apply" className='flex '>Rs. -0.00</button>
        </div>

        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total Discount</p>
          <button type="Apply" className='flex '>Rs. -0.00</button>
        </div>

        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Shiping Charge</p>
          <button type="Apply" className='flex '>Rs. 0.00</button>
        </div>

        <div className='flex text-sm font-bold py-2 justify-between'>
          <p className='flex '>Order Total</p>
          <button type="Apply" className='flex '>Rs. 2,490.00</button>
        </div>

       <div className='px-14 my-2 bg-sky-500 text-white flex justify-center py-3 rounded-md'>
        <p className='text-sm'>CHECKOUT </p>
       </div>
        
      </div>
  )
}

export default Block2