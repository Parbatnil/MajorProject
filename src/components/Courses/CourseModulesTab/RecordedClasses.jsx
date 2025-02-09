import React from "react";
import ClassRow from "./ClassRow";

const schedule = [
  {
    day: "Monday",
    classes: [
      { subject: "Python", time: "10:00 AM - 11:00 AM" },
      { subject: "Java", time: "2:00 PM - 3:00 PM" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { subject: "DBMS", time: "11:00 AM - 12:00 PM" },
      { subject: "C++", time: "3:00 PM - 4:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { subject: "Networking", time: "9:00 AM - 10:00 AM" },
      { subject: "Python", time: "2:30 PM - 3:30 PM" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { subject: "Java", time: "10:00 AM - 11:00 AM" },
      { subject: "OS", time: "1:00 PM - 2:00 PM" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { subject: "C++", time: "12:00 PM - 1:00 PM" },
      { subject: "Web Dev", time: "4:00 PM - 5:00 PM" },
    ],
  },
];

const RecordedClasses = () => {
  return (
    <div className="max-w-3xl mx-auto mt-5">
      <h2 className="text-xl font-bold mb-3 text-center">
        Weekly Class Schedule
      </h2>
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Day</th>
            <th className="p-3 border">Classes</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((daySchedule, index) => (
            <ClassRow
              key={index}
              day={daySchedule.day}
              classes={daySchedule.classes}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordedClasses;
