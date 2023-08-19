import React from 'react'
import Block1 from '../../src/contents/Checkout/Block1'
import Block4 from '../../src/contents/Checkout/Block4'
import Block2 from '../../src/contents/Checkout/Block2'
import Navabar from '../../src/layouts/Navabar/index'
import Footer from '../../src/layouts/Footer'
import Block5 from '../../src/contents/Checkout/Block5'

function index() {
  return (
    <>
       <Navabar/>
       <Block1/>
       {/* <Block4/>
       <Block5/> */}
       <Footer/>
    </>
  )
}

export default index