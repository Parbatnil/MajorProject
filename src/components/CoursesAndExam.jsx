import React, { useState } from "react";
import Courses from "./Courses";
import Exams from "./Exams";

const CoursesAndExam = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Courses");

  // Tab content based on activeTab
  const renderContent = () => {
    if (activeTab === "Courses") {
      return (
        <div className="py-4">
          <Courses />
        </div>
      );
    } else if (activeTab === "Exams") {
      return (
        <div className="py-4">
          <Exams />
        </div>
      );
    }
  };

  return (
    <div className="mx-6 md:mx-10 lg:mx-25 my-6 ">
      {/* Title */}
      <div>
        <h1 className="text-4xl md:text-5xl my-2  font-bold text-center">
          Courses and Exams
        </h1>
        <h6 className="text-center text-sm md:text-md my-2 text-gray-500">
          Choose the courses according to your need
        </h6>
      </div>
      {/* Horizontal Navigation Bar */}
      <div className="flex justify-center items-center space-x-8 bg-[#E4EEF7] p-4 rounded-2xl">
        {["Courses", "Exams"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-lg ${
              activeTab === tab
                ? "bg-[#066ac9] text-white font-semibold"
                : "text-blue-400 hover:bg-blue-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default CoursesAndExam;
