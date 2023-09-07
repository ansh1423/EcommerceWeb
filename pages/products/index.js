import React, { useEffect } from 'react'
import Block1 from '../../src/contents/products/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Block2 from '../../src/contents/products/Block2'
import Block3 from '../../src/contents/products/Block3'

import Footer from '../../src/layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getProduct } from '../../src/redux/slices/Product'
import Block4 from '../../src/contents/products/Block4'

function index() {
  const dispatch = useDispatch();
  const product=useSelector((state)=>state.product);
  
  useEffect(() => {
  const getProduct= async () => {
  
  const result = await dispatch(addProduct());

   console.log(result)
  }
  getProduct();  
  }, []) 


  return (
    
    <>
     <Navabar/>
      <Block1/>
      <Block2/>  
    <Block3 />  
   <Footer/> 
    </>
  )
}

export default index