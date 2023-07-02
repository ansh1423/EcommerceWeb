import React from 'react'
import Block1 from '../../src/contents/products/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Block2 from '../../src/contents/products/Block2'
import Block3 from '../../src/contents/products/Block3'
import Block4 from '../../src/contents/products/Block4'
import Block5 from '../../src/contents/products/Block5'
import Block6 from '../../src/contents/products/Block6'
import Block7 from '../../src/contents/products/Block7'
import Footer from '../../src/layouts/Footer'
function index() {
  return (
    <>
    <Navabar/>
    <Block1/>
    <Block2/>
    <Block3 />
    {/* <Block4/> */}
    {/* <Block5/> */}
  
    <Footer/>
    </>
  )
}

export default index