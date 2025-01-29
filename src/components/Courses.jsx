import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import MCA from "../../public/images/artificial-intelligence.png";
import BCA from "../../public/images/computer-science.png";
import BTECH from "../../public/images/data-science.png";
import MBA from "../../public/images/leadership-development.png";
import BBA from "../../public/images/program.png";
import MTECH from "../../public/images/www.png";
import BSCDS from "../../public/images/training-program.png";

const courses = [
  {
    name: "Master of Computer Application",
    code: "MCA",
    description:
      "Dive into the world of cutting-edge technology with our comprehensive MCA program. From software engineering.",
    imageUrl: MCA,
    bgColor: "bg-blue-500",
  },
  {
    name: " Bachelor of Computer Application",
    code: "BCA",
    description:
      "A foundational course that introduces students to the basics of computer applications, programming, and web technologies.",
    imageUrl: BCA,
    bgColor: "bg-green-500",
  },
  {
    name: " Bachelor of Technology",
    code: "BTECH",
    description:
      "An intensive program focused on engineering principles and advanced technical skills to shape future innovators.",
    imageUrl: BTECH,
    bgColor: "bg-red-500",
  },
  {
    name: " Master of Business Administration",
    code: "MBA",
    description:
      "A program designed to cultivate leadership and management skills with a focus on business strategy and innovation.",
    imageUrl: MBA,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Bachelor of Business Administration",
    code: "BBA",
    description:
      "An undergraduate program emphasizing business principles, communication, and decision-making skills.",
    imageUrl: BBA,
    bgColor: "bg-orange-500",
  },
  {
    name: "Master of Technology",
    code: "MTECH",
    description:
      "An advanced technical program focused on research, innovation, and specialized engineering concepts.",
    imageUrl: MTECH,
    bgColor: "bg-purple-500",
  },
  {
    name: "Bachelor of Science in Data Science",
    code: "BSCDS",
    description:
      "A program that equips students with analytical and programming skills to excel in the field of data science.",
    imageUrl: BSCDS,
    bgColor: "bg-teal-500",
  },
];

const Courses = () => {
  const [reactions, setReactions] = useState({}); // Track reactions for each course by index

  const toggleReaction = (index) => {
    setReactions((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the reaction for the clicked course
    }));
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center space-y-3 ">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex flex-col w-72 border-2 rounded-xl shadow-lg"
        >
          <img
            src={course.imageUrl}
            alt={course.name}
            className={`w-72 rounded-xl ${course.bgColor} p-10`}
          />
          <div className="flex justify-between items-center px-4 pt-2">
            <div className=" flex space-x-2 justify-between items-center">
              <span className="bg-violet-200 text-sm p-2 rounded-md">
                {course.code}
              </span>
              <span>
                <RiLiveFill className="text-green-800 text-xl" />
              </span>
            </div>
            <span
              onClick={() => toggleReaction(index)}
              className="cursor-pointer"
            >
              {reactions[index] ? (
                <FaHeart className="text-red-500" />
              ) : (
                <CiHeart className="text-gray-500" />
              )}
            </span>
          </div>
          <div className="flex p-4 flex-col space-y-6">
            <div className="border-b border-gray-300 pb-5">
              <h1 className=" text-md md:text-xl font-medium  min-h-15">
                {course.name}
              </h1>
              <p className="text-sm text-gray-500">
                {course.description.slice(0, 100)}...
              </p>
            </div>
            <button className="bg-yellow-400 py-2 rounded-xl hover:bg-yellow-300">
              View Course
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
