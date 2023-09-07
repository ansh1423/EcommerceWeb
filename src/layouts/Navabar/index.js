import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Badge,
  Dialog,
  Typography,
} from "@mui/material";
import MenuItems from "./MenuItems/index";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Login from "../../components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/Auth";
const index = (props) => {
  const dispatch=useDispatch();
  const user = useSelector((state)=> state?.auth?.user)
  console.log(user)
  

  useEffect(()=>{
   const getUserData = async()=>{
    await dispatch(getUser())
   }
   getUserData();
 
  }, [])
  const [open, setOpen] = useState(false);
  const [dilogOpen, setDilogOpen] = useState(false);
  const handleClick = () => {
    setDilogOpen(true);
  };
  const cartItem =useSelector((state)=>state.cart.cart)
console.log(cartItem);
  return (
    <div class=''>
    <div className="my-4 mb-[125px] ">
      <Dialog open={dilogOpen}>
        <Login setDilogOpen={setDilogOpen} />
      </Dialog>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MenuItems />
      </Drawer>
      <AppBar className="fixed top-0 bg-white text-black  w-full z-10">
        <div className="flex mt-4 mx-4 justify-between">
          <div className="flex justify-start items-center  ">
            <MenuIcon className="md:hidden" onClick={() => setOpen(true)} />
            <img
              src="https://www.mochishoes.com/images-mochi/mochi-logo.webp"
              alt=""
              className="w-full max-md:w-36 max-md:h-9 h-16 my-1"
            />
          </div>
          <div className="flex  items-center  ">
            <div className="relative text-sm  max-md:hidden">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search for Men Footwear, Women Footwear & more..."
                className="border-cyan-500 w-96  h-10 border-2 max-md:hidden outline-1 px-2 py-3"
              />
              <SearchIcon
                sx={{ position: "absolute", top: "8px", right: "10px " }}
              />
            </div>
            <p className="px-3 py-3">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px" }} />
            </p>
           {user ?  <p className="px-2 py-3">
              {user?.firstName}
            </p> : 
             <p className="px-2 py-3">
             <PermIdentityOutlinedIcon
               sx={{ fontSize: "30px" }}
               onClick={handleClick}
             />
           </p>
            }
            <p className="px-2 py-3">
            <Badge badgeContent={cartItem.length} color="secondary">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "30px" }} />
            </Badge>
            </p>
          </div>
        </div>

        <ul className="flex max-sm:hidden justify-center  my-2 text-xs font-bold">
          <li className="mx-6 max-md:text-xs text-sm font-bold max-lg:mx-1">
            MEN
          </li>
          <li className="mx-6 max-md:text-xs text-sm font-bold max-lg:mx-1">
            WOMEN
          </li>
          <li className="mx-6 max-md:text-xs text-sm font-bold max-lg:mx-1">
            KIDS
          </li>
          <li className="mx-6 max-md:text-xs text-sm font-bold max-lg:mx-1">
            ACCESSORIES
          </li>
          <li className="mx-6 max-md:text-xs text-sm font-bold max-lg:mx-1">
            BAGS
          </li>
          <li className="mx-6 text-sm font-bold max-lg:mx-2">BRAND</li>
          <li className="mx-6 max-md:text-xs text-sm text-red-600 font-bold max-lg:mx-2">
            SALE
          </li>
          <li className="mx-6 text-sm max-md:text-xs font-bold max-lg:mx-2">
            FILA
          </li>
        </ul>
      </AppBar>
    </div>
    </div>
  );
};

export default index;
