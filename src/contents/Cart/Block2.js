import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux'

function Block2() {
  const item = useSelector((state)=>state.cart.cart)
  console.log(item)
  let totalPrice =0;
  
 for(let i =0;i<item.length;i++){
 let ans = (item[i].products[0].productId.price.mrp)*(item[i].products[0].qty)
  console.log(ans)
 totalPrice=totalPrice+ans; 
 }

 console.log(totalPrice);
 // Initialize ordertotal outside the loop to accumulate the total discount
let ordertotal = 0;
let discount=0;

for (let i = 0; i < item.length; i++) {
  // Check if the item and its properties exist before accessing them
  if (
    item[i] &&
    item[i].products &&
    item[i].products[0] &&
    item[i].products[0].productId &&
    item[i].products[0].productId.price &&
    item[i].products[0].productId.price.cost
  ) {
    // Calculate the discount for the current item
    discount = item[i].products[0].productId.price.cost;

    // Subtract the discount from the ordertotal
    ordertotal += discount;
  } else {
    // Handle any missing or undefined properties here
    console.log(`Error: Unable to calculate discount for item at index ${i}`);
  }
}

// Now you have the total discount for all items in ordertotal
console.log(`Total Discount: ${ordertotal}`);

 const router=useRouter();
 const handleCheckout = () => {
  // Navigates to the "/checkout" route
  router.push('/checkout');
};



  return (
    <>
     
    <div className=' w-72 h-96  px-4 mx-4'>
        <p className='py-2'>Order Summary</p>
        <div className='flex  py-2 justify-between'>
          <p className='flex font-extralight text-sm '>Coupon</p>
          <button type="Apply" className='flex font-extralight text-sm border-2 py-1 px-2 rounded-md'>Apply</button>
        </div>
        <p className='py-2'> Price Details</p>
        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total MRP</p>
          <button type="Apply" className='flex '>{totalPrice}.00</button>
        </div> 
        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total Discount on MRP</p>
          <button type="Apply" className='flex '>{discount}</button>
        </div>

        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Total Discount</p>
          <button type="Apply" className='flex '>{totalPrice-ordertotal}</button>
        </div>

        <div className='flex text-sm font-thin py-2 justify-between'>
          <p className='flex '>Shiping Charge</p>
          <button type="Apply" className='flex '>Rs. 0.00</button>
        </div>

        <div className='flex text-sm font-bold py-2 justify-between'>
          <p className='flex '>Order Total</p>
          <button type="Apply" className='flex '>{ordertotal}</button>
        </div>
        
      

       <div className='px-14 my-2 cursor-pointer bg-sky-500 text-white flex justify-center py-3 rounded-md'>
        <p onClick={handleCheckout} className='text-sm'>CHECKOUT </p>
       </div>
        
      </div>
      </>
  )
}

export default Block2