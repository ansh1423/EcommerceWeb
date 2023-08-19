import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { SignUpSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/Auth";
import { useRouter } from "next/router";

const SignUp = () => {
  const router  = useRouter();
  const dispatch = useDispatch()
  const intialValue = {
    firstName: "",
    email: "",
    password: "",
    phone: "",

  };
  const { values,errors,touched, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: intialValue,
    //  console.log(values)
    onSubmit: async(values, action) => {
      console.log("ansh")
      console.log(values);
      const result  = await dispatch(register(values))
      console.log(result)
      if (result){
        alert("Registered Successfully")
        router.push("/login")
      }
      action.resetForm();
    },
  });
  return (
    <Box sx={{ width: "full", height:"100%", display: "flex", backgroundColor:"cadetblue", justifyContent: "center" }}>
      <Box
        sx={{
          width: "400px",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          border:'2px solid ',
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '16px',
          padding:"15px",
          margin:"10px",
          backgroundColor:"burlywood"
        
        }}
      >
        <Typography className='text-lg '>Sign Up</Typography>
        <form className="flex flex-col w-full " 
          onSubmit={handleSubmit}
        >
           <h1 className="text-sm py-1">Full Name</h1>
            <input
             type="name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
           {errors.firstName && touched.firstName && <div style={{color:'red'}}>{errors.firstName}</div>}
           <h1 className="text-sm py-1">Email</h1>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
             {errors.email && touched.email && <div style={{color:'red'}}>{errors.email}</div>}
             <h1 className="text-sm py-1">Password</h1>
            <input
              type="password"
              name="password"
              value={values.password}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {errors.password && touched.password && <div style={{color:'red'}}>{errors.password}</div>}
           <h1 className="text-sm py-1">Mobile Number</h1>
            <input
              type="number"
              name="phone"
              value={values.phone}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {errors.phone && touched.phone && <div style={{color:'red'}}>{errors.phone}</div>}
           <button className="bg-teal-400 rounded-md my-5 text-white text-sm py-2 px-2" onSubmit={handleSubmit}>Submit</button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
