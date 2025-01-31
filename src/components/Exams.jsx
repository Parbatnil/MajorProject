import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import WBJECA from "../../public/images/wbjecalogo.png";
import WBJEE from "../../public/images/wbjeelogo.png";
import CAT from "../../public/images/catlogo.png";
import NIMCET from "../../public/images/nimcetlogo.png";
import { FiClock } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const exams = [
  {
    name: "WBJECA",
    code: "WBJECA",
    description:
      "West Bengal Joint Entrance Exam for Computer Applications, essential for MCA admissions in West Bengal.",
    imageUrl: WBJECA,
    bgColor: "bg-gradient-to-r from-blue-900 to-cyan-500",
    duration: "180 mins",
  },
  {
    name: "WBJEE",
    code: "WBJEE",
    description:
      "West Bengal Joint Entrance Examination, an entry gateway to undergraduate engineering courses in West Bengal.",
    imageUrl: WBJEE,
    bgColor: "bg-gradient-to-r from-green-700 to-lime-400",
    duration: "240 mins",
  },
  {
    name: "CAT",
    code: "CAT",
    description:
      "Common Admission Test, a national-level exam for admissions into prestigious MBA programs in India.",
    imageUrl: CAT,
    bgColor: "bg-gradient-to-r from-red-600 to-orange-400",
    duration: "120 mins",
  },
  {
    name: "NIMCET",
    code: "NIMCET",
    description:
      "National Institute of Technology MCA Common Entrance Test, conducted for MCA admissions in NITs across India.",
    imageUrl: NIMCET,
    bgColor: "bg-gradient-to-r from-yellow-500 to-amber-400",
    duration: "150 mins",
  },
];

const Exams = () => {
  const [reactions, setReactions] = useState({});

  const toggleReaction = (index) => {
    setReactions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-wrap  gap-10  items-center">
      {exams.map((exam, index) => (
        <div
          key={index}
          className="flex flex-col w-[298.3px] rounded-xl shadow-lg shadow-gray-500/50"
        >
          <img
            src={exam.imageUrl}
            alt={exam.name}
            className={`w-[298.3px] rounded-t-lg ${exam.bgColor} opacity-90 p-8 h-[223px]`}
          />
          <div className="flex justify-between items-center px-4 pt-2">
            <div className="flex space-x-2 justify-between items-center">
              <span className="bg-violet-200 text-violet-600 text-xs px-2 py-1 mt-2 rounded">
                {exam.code}
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
          <div className="flex px-4 pt-4 flex-col">
            <div className="border-gray-300 space-y-4 min-h-[130px] border-b">
              <NavLink>
                <h1 className="text-md md:text-xl font-[500] hover:text-blue-900">
                  {exam.name}
                </h1>
              </NavLink>
              <p className="text-md text-gray-500">
                {exam.description.slice(0, 100)}...
              </p>
            </div>
          </div>
          <div className="m-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FiClock className="text-red-500 text-md" />
              <h6>{exam.duration}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exams;
