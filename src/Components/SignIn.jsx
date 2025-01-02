import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

function SignIn() {
  return (
    <Card color="transparent" shadow={false} 
       className="justify-center items-center pl-0 pr-0 pt-11 pb-12 relative isolate overflow-hidden text-white bg-slate-600 ml-96 mr-96 mt-3 mb-4  rounded-lg shadow-black">
        <Typography variant="h4" color="blue-gray" className='text-3xl'>
          Welcome Back !
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to see you! Enter your details to signin.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" text-black "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" text-black "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-serif">
            Doesn't have an account?{" "}
            <NavLink to="/signup" className="font-medium text-white">
              Sign Up
            </NavLink>
          </Typography>
        </form>
      </Card>
  );
}

export default SignIn;