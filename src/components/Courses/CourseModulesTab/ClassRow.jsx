import React from "react";

const ClassRow = ({ day, classes }) => {
  return (
    <tr className="border-b">
      <td className="p-3 font-semibold">{day}</td>
      <td className="p-3">
        {classes.map((cls, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="font-medium">{cls.subject}</span>
            <span className="text-gray-600 text-sm">({cls.time})</span>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default ClassRow;
