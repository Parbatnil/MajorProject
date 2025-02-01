import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex justify-between mx-4 items-center'>
      <img src="https://static.vecteezy.com/system/resources/previews/007/688/840/non_2x/education-logo-free-vector.jpg" alt=""  className='w-28'/>
      <div>
        <ul className='flex space-x-6 mb-8'>
          <li className='hover:text-blue-500'>Home</li>
          <li className='hover:text-blue-500'>Notice</li>
          <li className='hover:text-blue-500'>Teacher</li>
          <li className='hover:text-blue-500'>Admin</li>
          <li className='hover:text-blue-500'>About us</li>
          <li className='hover:text-blue-500'>Contact us</li>
        </ul>
      </div>
       
      <div className="relative flex space-x-4 mr-3 mb-7">
      <input
        type="text"
        placeholder="Search"
        className="pl-2 pr-3 py-2 border rounded w-64  outline-blue-500"
      />
      <IoIosSearch className="absolute right-16 top-2 text-gray-500 text-xl hover:text-blue-500" />
    
      <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" alt=""  className=' rounded-full w-14  '/>
      
      </div >
      
      
      
    </div>
  )
}

export default Navbar
