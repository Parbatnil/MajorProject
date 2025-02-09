import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { CiStreamOn } from "react-icons/ci";
import python from "../../../assets/python.png";
import java from "../../../assets/java.png";
import cpp from "../../../assets/cpp.png";
import dbms from "../../../assets/dbms.png";

const coursesData = [
  {
    week: "Week 1",
    dateRange: "February 10 - 15",
    days: [
      {
        day: "Day 1",
        date: "10th February 2025",
        classes: [
          {
            subject: "Python",
            topic: "Garbage Collection",
            time: "2:00 P.M - 3:00 P.M",
            isLive: true,
            image: python,
          },
          {
            subject: "Java",
            topic: "OOP Concepts",
            time: "4:00 P.M - 5:00 P.M",
            isLive: false,
            image: java,
          },
        ],
      },
      {
        day: "Day 2",
        date: "11th February 2025",
        classes: [
          {
            subject: "C++",
            topic: "STL Overview",
            time: "3:00 P.M - 4:00 P.M",
            isLive: true,
            image: cpp,
          },
          {
            subject: "DBMS",
            topic: "Normalization",
            time: "5:00 P.M - 6:00 P.M",
            isLive: false,
            image: dbms,
          },
        ],
      },
    ],
  },
];

const CourseTab = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  return (
    <div>
      {coursesData.map((weekData, weekIndex) => (
        <div key={weekIndex}>
          {/* Week Section */}
          <div
            className="flex justify-between border border-slate-300 items-center p-2 rounded-xl select-none cursor-pointer"
            onClick={() =>
              setExpandedWeek(expandedWeek === weekIndex ? null : weekIndex)
            }
          >
            <div className="p-2 text-md flex space-x-4">
              <span className="font-bold text-lg">{weekData.week} - </span>
              <span className="text-slate-700">
                {weekData.dateRange} ({weekData.days.length} Days)
              </span>
            </div>
            <div className="p-2 rounded-full">
              {expandedWeek === weekIndex ? <FaMinus /> : <FaPlus />}
            </div>
          </div>

          {expandedWeek === weekIndex &&
            weekData.days.map((dayData, dayIndex) => (
              <div key={dayIndex}>
                {/* Day Section */}
                <div
                  className="my-2 flex justify-between border border-slate-300 p-2 rounded-md select-none cursor-pointer"
                  onClick={() =>
                    setExpandedDay(expandedDay === dayIndex ? null : dayIndex)
                  }
                >
                  <div className="p-2 text-sm">
                    <span className="font-bold text-md">{dayData.day} - </span>
                    <span className="text-slate-700">
                      {dayData.date} - ({dayData.classes.length} Classes)
                    </span>
                  </div>
                  <div className="p-2 rounded-full">
                    {expandedDay === dayIndex ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                {expandedDay === dayIndex &&
                  dayData.classes.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="m-3 my-5 flex items-center space-x-3"
                    >
                      <img
                        src={course.image}
                        className="w-14 pointer-events-none"
                        alt={course.subject}
                      />
                      <div>
                        <h1 className="font-medium text-lg">
                          {course.subject} [{course.topic}]
                        </h1>
                        <div className="flex items-center space-x-3">
                          <h6 className="text-gray-800 font-light">
                            {course.time}
                          </h6>
                          <LuDot />
                          <h6
                            className={`flex items-center ${
                              course.isLive ? "text-red-600" : "text-green-500"
                            } cursor-pointer`}
                          >
                            {course.isLive ? "Live" : "Recorded"}
                            {course.isLive && (
                              <CiStreamOn className="text-2xl text-red-600" />
                            )}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default CourseTab;
