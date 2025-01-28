import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import WBJECA from "../../public/images/wbjecalogo.png";
import WBJEE from "../../public/images/wbjeelogo.png";
import CAT from "../../public/images/catlogo.png";
import NIMCET from "../../public/images/nimcetlogo.png";

const exams = [
  {
    name: "WBJECA",
    code: "WBJECA",
    description:
      "West Bengal Joint Entrance Exam for Computer Applications, essential for MCA admissions in West Bengal.",
    imageUrl: WBJECA,
    bgColor: "bg-blue-500",
  },
  {
    name: "WBJEE",
    code: "WBJEE",
    description:
      "West Bengal Joint Entrance Examination, an entry gateway to undergraduate engineering courses in West Bengal.",
    imageUrl: WBJEE,
    bgColor: "bg-green-500",
  },
  {
    name: "CAT",
    code: "CAT",
    description:
      "Common Admission Test, a national-level exam for admissions into prestigious MBA programs in India.",
    imageUrl: CAT,
    bgColor: "bg-red-500",
  },
  {
    name: "NIMCET",
    code: "NIMCET",
    description:
      "National Institute of Technology MCA Common Entrance Test, conducted for MCA admissions in NITs across India.",
    imageUrl: NIMCET,
    bgColor: "bg-yellow-500",
  },
];

const Exams = () => {
  const [reactions, setReactions] = useState({}); // Track reactions for each exam by index

  const toggleReaction = (index) => {
    setReactions((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the reaction for the clicked exam
    }));
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {exams.map((exam, index) => (
        <div
          key={index}
          className="flex flex-col w-72 border-2 rounded-xl shadow-lg "
        >
          <img
            src={exam.imageUrl}
            alt={exam.name}
            className={`w-72 ${exam.bgColor} p-10`}
          />
          <div className="flex justify-between items-center px-4 pt-2 ">
            <span className="bg-violet-200 text-sm p-2 rounded-md">
              {exam.code}
            </span>

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
              <h1 className="text-xl font-medium">{exam.name}</h1>
              <p className="text-sm text-gray-500">{exam.description}</p>
            </div>
            <button className="bg-yellow-400 py-2 rounded-xl hover:bg-yellow-300 ">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exams;
