import React from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  Typography,
} from "@mui/material";
import MenuItems from "./MenuItems/index";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Login from "../../components/auth/Login";
const index = (props) => {
  const [open, setOpen] = useState(false);
  const [dilogOpen, setDilogOpen] = useState(false);
  const handleClick = () => {
    setDilogOpen(true);
  };
  return (
    <div className="my-4">
      <Dialog open={dilogOpen}>
        <Login setDilogOpen={setDilogOpen} />
      </Dialog>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MenuItems />
      </Drawer>
      <nav className="fixed top-0 z-50 bg-white w-full">
        <div className="flex justify-between">
          <div className="flex justify-start items-center px-2 ">
            <MenuIcon className="sm:hidden" onClick={() => setOpen(true)} />
            <img
              src="https://www.mochishoes.com/images-mochi/mochi-logo.webp"
              alt=""
              className="w-52 max-xl:w-full h-11 mx-1 py-2my-1"
            />
          </div>
          <div className="flex  items-center ">
            <div className="relative max-sm:hidden">
              <input
                type="search"
                name=""
                id=""
                placeholder="What are you looking for?"
                className="border-cyan-200 w-96  h-10 border-2 max-sm:hidden outline-1 px-2 py-3"
              />
              <SearchIcon
                sx={{ position: "absolute", top: "8px", right: "10px " }}
              />
            </div>
            <p className="px-2 py-3">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
            </p>
            <p className="px-2 py-3">
              <PermContactCalendarIcon
                sx={{ fontSize: "25px" }}
                onClick={handleClick}
              />
            </p>
            <p className="px-2 py-3">
              <ShoppingBagIcon sx={{ fontSize: "25px" }} />
            </p>
          </div>
        </div>

        <ul className="flex max-sm:hidden justify-center  my-2 text-xs font-bold">
          <li className="mx-6  max-lg:mx-1">MEN</li>
          <li className="mx-6 max-lg:mx-1">WOMEN</li>
          <li className="mx-6 max-lg:mx-1">KIDS</li>
          <li className="mx-6 max-lg:mx-1">ACCESSORIES</li>
          <li className="mx-6 max-lg:mx-1">BAGS</li>
          <li className="mx-6 max-lg:mx-2">BRAND</li>
          <li className="mx-6 max-lg:mx-2">SALE</li>
          <li className="mx-6 max-lg:mx-2">FILA</li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
