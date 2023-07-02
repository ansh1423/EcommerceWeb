import React from 'react'
import Navabar from '../../src/layouts/Navabar/index'
import Block1 from '../../src/contents/product/Block1'
import Block2 from '../../src/contents/product/Block2'
import Block3 from '../../src/contents/product/Block3'
import Block5 from '../../src/contents/product/Block5'
import Block6 from '../../src/contents/product/Block6/Block6'
import Footer from '../../src/layouts/Footer'
import { Products } from '../../src/constants/home/Products'
export default function index() {
  return (
    <>
    <div>[ProductId]
      <Navabar/>
      <Block1/>
      <Block2/> 
      {/* <Block3/> */}
      <Block5/>
      <Block6 sliderData={Products} />
      <Footer/>
    </div>
    </>
  )
}

