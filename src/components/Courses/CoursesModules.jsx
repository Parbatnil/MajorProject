import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import CourseTab from "./CourseModulesTab/CourseTab";
import RecordedClasses from "./CourseModulesTab/RecordedClasses";
const CoursesModules = () => {
  const tabSection = ["Course", "Recorded Classes", "Routine"];
  const [activeTab, setActiveTab] = useState("Course");

  const renderContent = () => {
    if (activeTab === "Course") {
      return (
        <div className="px-7 py-2">
          <CourseTab />
        </div>
      );
    } else if (activeTab === "Recorded Classes") {
      return <div className="px-7 py-2">notes</div>;
    } else if (activeTab === "Routine") {
      return (
        <div className="px-7 py-2">
          <RecordedClasses />
        </div>
      );
    }
  };
  return (
    <div className="">
      <div className="bg-[#1d3b53] text-white  flex flex-col md:flex-row justify-between gap-9 py-30 px-4  md:p-30 selection:text-red-500">
        {/* Left Section */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-[39px] font-bold leading-tight">
            The Complete Digital Marketing Course -
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold ">12 Courses in 1</h1>
          <p className="mt-4 text-sm">
            Satisfied conveying a dependent contented he gentleman agreeable do
            be. Warrant private blushes removed an in equally totally if.
            Delivered dejection necessary objection do Mr prevailed. Mr feeling
            does chiefly cordial in do.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <p className="font-semibold">By Lori Stevens</p>
            <p className="flex items-center md:px-3 text-yellow-400 font-bold">
              <FaStar className="text-yellow-500 mr-1" /> 4.5/5.0
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 flex flex-col md:p-2">
          <h1 className="text-xl md:text-xl  flex items-center gap-2">
            <FaUserGraduate className="text-yellow-500" />
            12,155 already enrolled
          </h1>
          <button className="bg-yellow-500 text-black font-semibold w-full rounded-lg h-12 mt-4 hover:bg-yellow-600 transition">
            Enroll Course
          </button>
        </div>
      </div>
      {/* _____________________________________________________________________________ */}
      {/* Tab section */}
      {/* _____________________________________________________________________________ */}
      <div className="h-screen w-screen relative">
        <div className="mx-2 bg-white md:mx-28 rounded-md shadow-xl flex flex-col gap-4 flex-wrap border absolute -top-20 md:w-[85%] md:-top-15 z-10 ">
          <div className="border-b-2 border-slate-300">
            {tabSection.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 px-7   ${
                  activeTab === tab
                    ? "text-blue-700 hover:text-blue-600 border-b-4 border-blue-700 font-medium "
                    : "text-black hover:text-blue-600 font-medium"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default CoursesModules;
