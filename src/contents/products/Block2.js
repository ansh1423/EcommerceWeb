
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, useTheme } from '@mui/material'
import React, { useState } from 'react'
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    'Price:Low to High',
    'Price:High to Low',
    'Discount',
    'Popularity',
    'Newest',
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
function Block2() {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
   
  return (
    <>
    <div class=' border-b border-slate-300 max-md:hidden'>
    <div className='flex mx-4 pb-2  items-end justify-between'>
   <div className='text-[15px]  font-[600px] '>
     <p className='py-2  '>FILTERS</p>
   </div>
     <div class='flex gap-1  h-8'>
       <h1 className='font-[400px] text-[13px]  bg-slate-100 rounded-lg px-2 py-1'>Men Chappal</h1>
       <h1 className='font-[400px] text-[13px] bg-slate-100 rounded-lg px-2 py-1'>Men Sandals</h1>
       <h1 className='font-[400px] text-[13px] bg-slate-100 rounded-lg px-2 py-1'>Men Sneakers</h1>
       <h1 className='font-[400px] text-[13px] bg-slate-100 rounded-lg px-2 py-1'>Men Loafers</h1>
       <h1 className='font-[400px] text-[13px] bg-slate-100 rounded-lg px-2 py-1'>Men Jutis</h1>
       </div>
     <div className=''>
    <FormControl sx={{  width:200 }}>
    <InputLabel id="demo-multiple-name-label text-[2px]">Sort By : Popularity</InputLabel>
    <Select
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Name" />}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, personName, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</div> 
</div>
</div>

</>
  )
}

export default Block2