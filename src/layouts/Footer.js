import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCardIcon from "@mui/icons-material/AddCard";
import Forward10Icon from "@mui/icons-material/Forward10";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Margin } from "@mui/icons-material";

function Footer() {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-full h-auto py-18 bg-gray-200 border-8 border-solid border-slate-100">
          <div className="my-2 py-4 px-1  justify-around max-lg:flex-col max-lg:justify-center flex">
            <div className="max-lg:my-5 py-3 m">
              <h1 className="text-xs font-thin py-3   mx-3  max-lg:text-center ">
                PAY SECURELY BY
              </h1>
              <img
                src="https://www.mochishoes.com/images-mochi/payment-logos.png"
                className="w-60 h-6 max-lg:w-80 max-lg:h-11 flex max-lg:m-auto"
              />
            </div>
            <div className="flex max-lg:justify-around  max-md:flex-col">
              <h1 className="text-xs font-thin flex  gap-2 max-md:justify-center items-center mx-3 max-md:py-2">
                <Forward10Icon sx={{ fontSize: "35px" }} /> 10 DAYS FREE RETURN
              </h1>

              <h1 className="text-xs font-thin  flex gap-2 max-md:justify-center  items-center mx-8 py-3 max-md:py-2">
                {" "}
                <LocalShippingIcon sx={{ fontSize: "35px"  }} /> FREE DELIVERY
              </h1>

              <h1 className="text-xs font-thin gap-2 flex max-md:justify-center items-center mx-3 max-md:py-2">
                {" "}
                <AddCardIcon sx={{ fontSize: "35px" }} /> CASH ON DILEVERY
              </h1>
            </div>
            <div>
              <h1 className="flex  text-xs max-lg:justify-center max-lg:py-3">
                Follow us{" "}
              </h1>
              <div>
                <h1 className="flex justify-center">
                  <InstagramIcon sx={{ fontSize: "30px" }} />{" "}
                  <YouTubeIcon sx={{ fontSize: "30px" }} />{" "}
                  <FacebookIcon sx={{ fontSize: "30px" }} />{" "}
                  <TwitterIcon sx={{ fontSize: "30px" }} />{" "}
                  <PinterestIcon sx={{ fontSize: "30px" }} />
                </h1>
              </div>
              <h1 className="flex  text-xs max-lg:justify-center">
                #StayAwesome{" "}
              </h1>
            </div>
          </div>
          <div className="border border-black my-4 h-0.2">
            
          </div>
          <div className="flex justify-evenly w-full  px-4">
            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500 ">CUSTOMER</h1>
              <h1 className="text-xs font-medium py-1">CONTACT US</h1>
              <h1 className="text-xs py-1 font-medium">SHOE CARE TIPS</h1>
              <h1 className="text-xs py-1 font-medium">FOOT CARE TIPS</h1>
              <h1 className="text-xs py-1 font-medium">BUYING GUIDE</h1>
              <h1 className="text-xs py-1 font-medium">TRACK ORDER</h1>
              <h1 className="text-xs py-1 font-medium">FOOT CARE TIPS</h1>
              <h1 className="text-xs py-1 font-medium">BUYING GUIDE</h1>
              <h1 className="text-xs py-1 font-medium">TRACK ORDER</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500">KNOW US</h1>
              <h1 className="text-xs py-1 font-medium">ABOUT</h1>
              <h1 className="text-xs py-1 font-medium">CAREERS</h1>
              <h1 className="text-xs py-1 font-medium">FAQ'S</h1>
              <h1 className="text-xs py-1 font-medium">STORE LOCATER</h1>
              <h1 className="text-xs py-1 font-medium">SIDE MAPS</h1>
              <h1 className="text-xs py-1 font-medium">FAQ'S</h1>
              <h1 className="text-xs py-1 font-medium">STORE LOCATER</h1>
              <h1 className="text-xs py-1 font-medium">SIDE MAPS</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500">POLICIES</h1>
              <h1 className="text-xs py-1 font-medium">TERMS & CONDITIONS</h1>
              <h1 className="text-xs py-1 font-medium">
                SHIPPING & RETURN POLICY
              </h1>
            </div>
            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500">POLICIES</h1>
              <h1 className="text-xs py-1 font-medium">METRO SHOES</h1>
              <h1 className="text-xs py-1 font-medium">WALKWAY SHOES</h1>
              <h1 className="text-xs py-1 font-medium">FITFLOP</h1>
              
            </div>
            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500">MY MOCHI</h1>
              <h1 className="text-xs py-1 font-medium">LOYALTY PROGRAM</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-sm py-2 text-slate-500">PATNERS</h1>
              <h1 className="text-xs py-1 font-medium">METRO SHOES</h1>
              <h1 className="text-xs py-1 font-medium">WALKWAY SHOES</h1>
              <h1 className="text-xs py-1 font-medium">FITFLOP</h1>
            </div>

            <div className="">
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-xs py-1 font-medium">CONTACT US</h1>
                  <h1 className="text-xs py-1 font-medium">SHOE CARE TIPS</h1>
                  <h1 className="text-xs py-1 font-medium">FOOT CARE TIPS</h1>
                  <h1 className="text-xs py-1 font-medium">BUYING GUIDE</h1>
                  <h1 className="text-xs py-1 font-medium">TRACK ORDER</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" }, width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Know us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-xs py-1 font-medium">ABOUT</h1>
                  <h1 className="text-xs py-1 font-medium">CAREERS</h1>
                  <h1 className="text-xs py-1 font-medium">FAQ'S</h1>
                  <h1 className="text-xs py-1 font-medium">STORE LOCATER</h1>
                  <h1 className="text-xs py-1 font-medium">SIDE MAPS</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Carrer us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-xs py-1 font-medium">
                    TERM AND CONDITION
                  </h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-xs py-1 font-medium">
                    TERM AND CONDITION
                  </h1>
                  <h1 className="text-xs py-1 font-medium">
                    SHIPPING & RETURN POLICY
                  </h1>
                  <h1 className="text-xs py-1 font-medium">PRIVACY POLICY</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>My Moto</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-xs py-1 font-medium">PATNERS</h1>
                  <h1 className="text-sm py-2 font-semibold">PATNERS</h1>
                  <h1 className="text-xs py-1 font-medium">METRO SHOES</h1>
                  <h1 className="text-xs py-1 font-medium">WALKWAY SHOES</h1>
                  <h1 className="text-xs py-1 font-medium">FITFLOP</h1>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-full py-3 flex justify-end items-end">
            © 2023 Metro Brands Limited. ALL RIGHTS RESERVED.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
