import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { Shoesimage } from "../Block4/Shoesimage";
import { useSelector } from "react-redux";

const SliderContainer = styled("div")({
  width: "100%",
  height: "100%",

  display: "flex",

  flexDirection: "column",
  alignItems: "center",

  "@media (max-width: 900px)": {
    width: "100%",
    height: "400px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "350px",
  },
});
const ImageContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "100%",
  position: "relative",
  background: "#F2F2F2",

  "@media (max-width: 900px)": {
    width: "100%",
    height: "600px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "600px",
  },
});
const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "0px",

  "@media (max-width: 900px)": {
    width: "100%",
    height: "400px",
  },

  "@media (max-width: 600px)": {
    width: "100%",
    height: "350px",
  },
});

const SliderItem = ({ posterLinks }) => {
   console.log(posterLinks);
  return (
    <>
      <SliderContainer sx={{backgroundColor:"black"}}>
        <ImageContainer  sx={{backgroundColor:"black"}}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Image src={posterLinks?.path} alt="divineyogpeeth yoga" />
          
          </Box>
        </ImageContainer>
          {
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: { xs: "350px", sm: "400px", md: "500px" },
                flexDirection: "column",
              }}
            >
            </Box>
          }
      </SliderContainer>
    </>
  );
};

export default SliderItem;
