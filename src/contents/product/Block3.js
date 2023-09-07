import { Box, styled } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
// import { baseUrl } from "./config";
const Container = styled(Box)(({ theme }) => ({

    width: "520px",
    height: "400px",
    [theme.breakpoints.down('lg')]: {
      width:"440px",
      height:"330px",
      marginRight:"10px"
  
      },
      [theme.breakpoints.down('md')]: {
        width:"380px",
        height:"250px"
        },
  
  }))
const ImageWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "140px",
    gap:"20px",
    [theme.breakpoints.down('lg')]: {
       marginLeft:'80px',
       marginRight:"10px"
      },
  }))
const Image = styled("img")(({ theme }) => ({
    width:"400px",
    height:"370px",
    objectFit:"cover",
    // "&:hover": {
    //   filter: "blur(2px)"
    // },
    [theme.breakpoints.down('lg')]: {
      width:"350px",
      height:'320px'
      },
      [theme.breakpoints.down('md')]: {
        width:"299px",
        height:'280px'
        },
  
  }))
  const Image1 = styled("img")(({ theme }) => ({
    width:'100px',
    height:"100px",
    marginLeft:"30px",
    border:"1px solid teal",
    [theme.breakpoints.down('lg')]: {
      width:"50px",
      height:'50px'
      },
    }))
function Block3 (){
  const data = useSelector((state)=>state.product.product)
  const dataItem =  data && data.length>0 && data?.filter((item)=> item.id === "64e353cea474fca8fa0107eb")
  console.log(dataItem);
  
    const settings = {
        customPaging: function(index) {
          return (
            <a>
              <Image1 src={dataItem && dataItem.length>0 && dataItem[0].productImages && dataItem[0].productImages[index].path} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        autoPlay:true,
        autoPlaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };    
      
  return (
    <Container>
    {/* <h2>Custom Paging</h2> */}
    <Slider {...settings}>
      {dataItem &&  dataItem.length>0 && dataItem[0].productImages.length>0 && dataItem[0].productImages.map((item,index)=>(
      <ImageWrapper key={index}>
      <Image src={item.path} />
      </ImageWrapper>
      ))}
      {/* </ImageWrapper>
      <ImageWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='https://admin.mochishoes.com/product/19-120/660/19-120M23.jpg' />
      </ImageWrapper>
      )} */}
    </Slider>
  </Container>
);
  }

export default Block3