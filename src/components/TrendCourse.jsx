import React, { useState } from "react";
import MCA from "/images/artificial-intelligence.png";
import BCA from "/images/computer-science.png";
import { FaUserSecret } from "react-icons/fa";
import WBJECA from "/images/wbjecalogo.png";
import WBJEE from "/images/wbjeelogo.png";
import NIMCET from "/images/nimcetlogo.png";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array containing the details of trending courses
const trendingCourses = [
  {
    id: 1,
    name: "MCA: Master of Computer Application",
    tag: "MCA",
    image: MCA,
    students: 1600,
    instructor: "Abby Caldarone",
    bgColor: "bg-gradient-to-r from-blue-900 to-blue-600",
  },
  {
    id: 2,
    name: "BCA: Bachelor of Computer Application",
    tag: "BCA",
    image: BCA,
    students: 1200,
    instructor: "John Smith",
    bgColor: "bg-gradient-to-r from-cyan-500 to-blue-400",
  },
  {
    id: 3,
    name: "WBJECA: West Bengal Entrance for MCA",
    tag: "WBJECA",
    image: WBJECA,
    students: 950,
    instructor: "Emma Watson",
    bgColor: "bg-gradient-to-r from-blue-900 to-cyan-500",
  },
  {
    id: 4,
    name: "NIMCET: NIT MCA Entrance Test",
    tag: "NIMCET",
    image: NIMCET,
    students: 1100,
    instructor: "Robert Downey",
    bgColor: "bg-gradient-to-r from-yellow-700 to-amber-400",
  },
  {
    id: 5,
    name: "WBJEE: West Bengal Joint Entrance Exam",
    tag: "WBJEE",
    image: WBJEE,
    students: 1800,
    instructor: "Chris Evans",
    bgColor: "bg-gradient-to-r from-green-700 to-lime-400",
  },
];

const TrendCourse = () => {
  const [hovered, setHovered] = useState(false); // Tracks hover state to show/hide navigation arrows

  // Custom next arrow for the slider
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
          hovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={onClick}
        style={{
          zIndex: 1000,
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        <FaChevronCircleRight size={40} color="black" />
      </div>
    );
  };

  // Custom previous arrow for the slider
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
          hovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={onClick}
        style={{
          zIndex: 1000,
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        <FaChevronCircleLeft size={40} color="black" />
      </div>
    );
  };

  // Slider settings for react-slick
  const settings = {
    dots: false, // Disables dots below the slider
    infinite: true, // Enables infinite looping of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll per transition
    autoplay: true, // Enables auto-sliding
    autoplaySpeed: 3000, // Time interval for auto-sliding (in milliseconds)
    nextArrow: <CustomNextArrow />, // Custom Next Arrow Component
    prevArrow: <CustomPrevArrow />, // Custom Previous Arrow Component
    responsive: [
      {
        breakpoint: 1024, // For screen widths ≤ 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For screen widths ≤ 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div
      className="py-12 px-6 md:px-20 relative"
      onMouseEnter={() => setHovered(true)} // Show arrows on hover
      onMouseLeave={() => setHovered(false)} // Hide arrows when hover ends
    >
      <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-800">
        Our Trending Courses
      </h1>
      <h6 className="text-center pt-2 pb-8 text-gray-500 text-sm md:text-md">
        Check out the most 🔥 courses in the market
      </h6>
      <Slider {...settings}>
        {trendingCourses.map((course) => (
          <div
            key={course.id} // Unique key for each course item
            className="h-122 p-4 flex flex-col items-center border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Course image */}
            <img
              src={course.image}
              alt={course.tag}
              className={`w-full ${course.bgColor} p-8 rounded-lg object-contain h-60`}
            />
            <div className="mt-4 text-center">
              {/* Course tag */}
              <span className="bg-violet-200 text-violet-700 text-xs font-medium px-3 py-1 rounded-full">
                {course.tag}
              </span>
              {/* Course name */}
              <h1 className="font-bold text-md md:text-lg mt-4 text-gray-700  h-15">
                {course.name}
              </h1>
              {/* Number of students */}
              <span className="text-gray-500 text-sm block mt-2 mb-4">
                {course.students} Students
              </span>
            </div>
            {/* Instructor info and action button */}
            <div className="flex items-center justify-between w-full mt-4 border-t border-slate-300 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <FaUserSecret className="text-gray-400" />
                <h3 className="text-sm md:text-md font-medium">
                  {course.instructor}
                </h3>
              </div>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm hover:bg-violet-700 transition-colors">
                Check Details
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendCourse;
