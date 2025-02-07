import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle,settoggle ] = useState(true)
  const changeToggle=()=>{toggle==true? settoggle(false):settoggle(true)}

  
  
  return (
    <div className='relative'>
      {/* desktop view */}
      <div className="flex justify-between mx-4 items-center">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/688/840/non_2x/education-logo-free-vector.jpg"
            alt=""
            className="w-28"
          />
        </div>

        <div className="hidden  md:flex ">
          <ul className=" hidden  md:flex space-x-6 mb-8 ">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">Notice</li>
            <li className="hover:text-blue-500">Teacher</li>
            <li className="hover:text-blue-500">Admin</li>
            <li className="hover:text-blue-500">About us</li>
            <li className="hover:text-blue-500">Contact us</li>
          </ul>
        </div>

        <div className="relative hidden md:flex space-x-4 mr-3 mb-7">
          <input
            type="text"
            placeholder="Search"
            className="pl-2 pr-3 py-2 border rounded w-64  outline-blue-500"
          />
          <IoIosSearch className="absolute right-16 top-2 text-gray-500 text-xl hover:text-blue-500" />

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg"
            alt=""
            className=" rounded-full w-14  "
          />
        </div>
        {/* toggle menu */}

        <div className="md:hidden">
          {toggle ? (
            <GiHamburgerMenu className="text-2xl" onClick={changeToggle} />
          ) : (
            <IoClose className="text-2xl" onClick={changeToggle} />
          )}
        </div>
      </div>

      {toggle === false && (
        <div className="md:hidden flex flex-col justify-center items-center absolute bg-blue-500 text-white w-full z-1">
          <div className=" ">
            <ul className=" flex flex-col items-center w-full space-y-2 mb-8 ">
              <li className="hover:text-blue-500  text-white">Home</li>
              
              <li className="hover:text-blue-500">Notice</li>
              <li className="hover:text-blue-500">Teacher</li>
              <li className="hover:text-blue-500">Admin</li>
              <li className="hover:text-blue-500">About us</li>
              <li className="hover:text-blue-500">Contact us</li>
            </ul>
          </div>

          <div className="relative flex flex-col justify-center items-center space-y-2">
            <input
              type="text"
              placeholder="Search"
              className="pl-2 pr-3 py-2 border rounded w-64  outline-blue-500"
            />
            <IoIosSearch className="absolute right-2 top-2 text-gray-500 text-xl hover:text-blue-500" />

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg"
              alt=""
              className=" rounded-full w-14  "
            />
          </div>
        </div>
      )}
    </div>

  )}

      

export default Navbar
