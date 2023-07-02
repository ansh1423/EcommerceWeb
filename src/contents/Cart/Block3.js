import React from 'react'

function Block3() {
  return (
    <>
     <div className='flex justify-between '>
    <div className='mx-4 my-4  flex'>
       <p className='text-sm font-light py-2'>Item(1)</p>
       <div className='flex py-4 mx-3 '>
            <div >
            <img src="https://admin.mochishoes.com/product/16-207/250/16-207M23.jpg" className='w-28 px-2 py-2 h-28' alt="" />
            </div>
            <div>
                <p className='text-sm '> Men Tan Casual Slippers</p> 
                <p> Rs. 2,490.00</p> 

                 <p className='text-sm text-blue-400'>(Inclusive of all taxes)</p> 
                 <input type="number" name="number" id="" placeholder='size' className='w-14 text-sm text-black ' />
             </div>

             </div> 
        </div> 
        <div>
           <p className='text-sm font-light py-2'>Quantity</p>
           <p className='text-sm font-light py-2'>1</p>
           </div> 
           <div>
           <p className=' text-sm font-light py-2'>Subtotal</p>
           <p className='text-sm font-light py-2'>Rs.2,490</p>
            </div>  
    </div>
        <div className='flex justify-between mx-4'>
              <h1 className='py-3 mx-8 px-4 border-2 rounded-md text-xs font-base'>ADD MORE FROM WISHLIST</h1>
              <h1 className='py-3  px-4 border-2 rounded-md text-xs font-base '>CONTINUE SHOPPING</h1>
          </div>         
   </>
  )
}

export default Block3