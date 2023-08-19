import React from 'react'

function Block3() {
  return (
    <table className='w-full '>
  <tr className='border-2'>
    <th>Order #</th>
    <th>Order Date</th>
    <th>Order Total</th>
    <th>Order Items</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr className='border-2'>
    <td><img src="https://admin.mochishoes.com/product/16-447/250/16-447M23.jpg"  className='w-14 h-16' alt="" /> </td>
    <td className='mx-3'>04 Jul 2023</td>
    <td>Rs. 2690.00</td>
     <td>	Order Item ID: 1636809</td>
     <td>ORDER CONFIRMED</td>
     <td><button className='text-white bg-blue-500'>View Details</button></td>
  </tr>
    
  <tr className='border-2' >
    <td><img src="https://admin.mochishoes.com/product/16-447/250/16-447M23.jpg"  className='w-14 h-16' alt="" /> </td>
    <td className='mx-3'>04 Jul 2023</td>
    <td>Rs. 2690.00</td>
     <td>	Order Item ID: 1636809</td>
     <td>ORDER CONFIRMED</td>
     <td><button className='text-white bg-blue-500'>View Details</button></td>
  </tr>
  
</table>
  )
}

export default Block3