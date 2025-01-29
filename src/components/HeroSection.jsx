import React from "react";
import { FaCheckCircle, FaPlay, FaDesktop, FaChalkboardTeacher, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

import studentImage from "/images/boy.png";

const HeroSection = () => {
  return (
    <div>
      
      <div className="md:mx-16 flex flex-col md:flex-row min-h-screen items-center justify-center px-10 relative overflow-hidden">
        {/* <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-8 h-8 bg-green-500 rounded-full"></div> */}

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Limitless learning at your{" "}
            <span className="relative inline-block">
              <span className="text-yellow-500">fingertips</span>
            </span>
          </h1>
          <p className="text-gray-700 text-lg max-w-md leading-relaxed mx-auto md:mx-0">
            Online learning and teaching marketplace with 5K+ courses & 10M students.
            Taught by experts to help you acquire new skills and grow your career.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-gray-700">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-xl" /> Learn with experts
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-xl" /> Get certificates
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-xl" /> Membership benefits
            </span>
          </div>


          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-6">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md shadow-red-300">
              Get Started
            </button>
            <button className="flex items-center gap-3 text-blue-600 font-semibold hover:underline">
              <FaPlay /> Watch video
            </button>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative">
            <img
              src={studentImage}
              alt="Student"
              className="w-[300px] md:w-[420px] rounded-xl shadow-xl"
            />

            <div className="relative bottom-72 left-72 w-fit bg-green-500 text-white px-6 py-3 rounded-full md:flex hidden items-center gap-3 shadow-lg">
              <IoMdPeople className="text-2xl" />
              <span className="font-medium">1K+ New Students</span>
            </div>

            <div className="w-fit relative bottom-40 right-12 md:flex hidden items-center gap-3 bg-white/30 backdrop-blur-sm shadow-sm rounded-2xl px-5 py-3 border border-gray-200 absolute">
              <div className="bg-yellow-400 p-3 rounded-full">
                <MdEmail className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Congratulations</h3>
                <p className="text-gray-600 text-sm">Your admission completed</p>
              </div>
              <FaCheckCircle className="text-green-500 text-lg absolute top-3 right-3" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-6 mt-10">
        <div className="bg-red-100 px-6 py-4 rounded-lg flex items-center gap-4 shadow-md">
          <FaDesktop className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-xl font-bold">10K</h2>
            <p className="text-gray-700">Online Courses</p>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4 rounded-lg flex items-center gap-4 shadow-md">
          <FaChalkboardTeacher className="text-gray-700 text-4xl" />
          <div>
            <h2 className="text-xl font-bold">200+</h2>
            <p className="text-gray-700">Expert Tutors</p>
          </div>
        </div>

        <div className="bg-purple-100 px-6 py-4 rounded-lg flex items-center gap-4 shadow-md">
          <FaGraduationCap className="text-purple-600 text-4xl" />
          <div>
            <h2 className="text-xl font-bold">60K+</h2>
            <p className="text-gray-700">Online Students</p>
          </div>
        </div>

        <div className="bg-blue-100 px-6 py-4 rounded-lg flex items-center gap-4 shadow-md">
          <FaCertificate className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-xl font-bold">6K+</h2>
            <p className="text-gray-700">Certified Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
