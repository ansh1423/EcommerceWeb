import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { HomeSlider } from '../../constants/home/HomeSlider';
import SliderItem from './slider/SliderItem';
import { ArrowBack, ArrowForward, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';

import { Box, Button, styled, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Shoesimage } from './Block4/Shoesimage';
import { useRouter } from 'next/router';
const SliderContainer = styled('div')({
width:"30%",
height:"30%",
// display: "flex",
overflow:"hidden",

position:'relative',
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
borderRadius:'0px',
"@media (max-width: 900px)": {
    width:"100%",
height:"600px",
height:"400px",
backgroundColor:'white',
 },

"@media (max-width: 600px)": {
    backgroundColor:'white',
    width:"100%",
    marginTop:'80px',
    height:"350px",
 },


})
const SliderInnerContainer = styled('div')({
 
  width:'100%',
  height:'60%',
  // border:'1px solid black',
  overflow:"hidden",
  backgroundColor:'#EBEBEB',
  paddingBottom:"30px",
// paddingRight:'40px',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  "@media (max-width: 900px)": {
    width:'100%',
    
 
 },

  "@media (max-width: 600px)": {
    width:'10%',
    height:"40px",
 
 },
})




const PreviousBtn = () =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ArrowBack sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px',marginLeft:'50px' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
    <div className={className}   onClick={onClick}>
          <ArrowForward sx={{color:'black',fontSize:'40px',background:'white',borderRadius:'50px',marginLeft:'-30px'}}/>
         </div> 
   )
}


const Block4 = ({data}) => {
  
  const router=useRouter();
// console.log(sliderData)  
  const settings = {
    dots: true,
    arrows:false,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide:0,
    // prevArrow:<PreviousBtn />,
    // nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 200,
            arrows:false,
            autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  
  return (
    <>
     
    <SliderContainer>         
       <SliderInnerContainer  onClick={()=>router.push(`/product/${data.id}`)} >
    <Slider {...settings}>
     {data && data.productImages.length >0 && data.productImages?.map((item) => (
      
    <SliderItem key={item} posterLinks={item}  />
))} 
    </Slider>
   
    <div>
    <h1 className='text-sm font-bold text-start px-3 pt-1 '>{data?.title?.shortTitle}</h1>
    <h2 class='text-sm text-start font-medium px-3 pt-1'>{data?.title?.longTitle}</h2>
    <h3 class='text-sm text-start font-bold px-3 p-1'>Rs. 3330 </h3>
    </div>
      </SliderInnerContainer>  
    </SliderContainer>
    
  

    </>
  )
}

export default Block4