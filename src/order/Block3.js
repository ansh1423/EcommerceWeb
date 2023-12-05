import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Orderlist } from '../redux/slices/Order';

function Block3() {
  const router=useRouter();
  const dispatch=useDispatch();
  const data=useSelector((state)=>state?.order?.order);
  console.log(data)
  useEffect(()=>{
    const Order= async()=>{
      const result=await dispatch(Orderlist());
      console.log(result)
    }
  },[])
  return (
    <>
  {data && data.length>0 && data?.map((item,index)=>(

 
    <table className='w-full  '>
  <tr class="text-[13px] mx-2 font-[700px] font-mulish">
    <th className='flex justify-start'>Order #</th>
    <th>Order Date</th>
    <th>Order Total</th>
    <th>Order Items id/SKDU</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr className='font-mulish font-[400px] text-[14px]'>
    <td className='font-[400px] text-[14px]'>
      <div className='flex  items-center '>
      <img src="https://admin.mochishoes.com/product/16-447/250/16-447M23.jpg"  className='w-14 h-12' alt="" />
      <p className='text-center'>M202049343544</p>
      </div>
      </td>
    <td className='mx-3 font-[400px] text-[14px]'>{item.updatedAt}</td>
    <td className='mx-8'>Rs. 2690.00</td>
     <td>	Order Item ID: 1636809</td>
     <td>ORDER CONFIRMED</td>
     <td><button onClick={()=>router.push('/orderdetails/')} className='text-white text-[12px] px-[5px] py-[1px] bg-[#36C2DD]'>View Details</button></td>
  </tr>
</table>
 ))}
</>
  )
}

export default Block3