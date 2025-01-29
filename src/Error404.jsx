import React from "react";
import error from "/images/error.png";
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <div>
      <div className=" my-3 flex justify-center items-center flex-col space-y-4  ">
        <img
          src={error}
          alt="Error image"
          className="w-full md:w-[60%] lg:w-[43%] py-10 justify-center items-center "
        />
        <h1 className="text-5xl md:text-8xl text-red-700 font-bold">404</h1>
        <h5 className="font-medium text-4xl">Oh no, something went wrong!</h5>
        <h6 className="text-xs md:text-sm md:text-md text-gray-500 ">
          Either something went wrong or this page doesn't exist anymore.
        </h6>

        <NavLink to="/">
          <button className="bg-blue-700  text-white py-2 px-3 rounded-md hover:bg-blue-900 font-bold text-md">
            Take me to Homepage
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
