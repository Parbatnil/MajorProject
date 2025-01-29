import React from "react";

import CoursesAndExam from "./components/CoursesAndExam";
import TrendCourse from "./components/TrendCourse";
import Feedback from "./components/Feedback";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CoursesAndExam />
      <TrendCourse />

      <Feedback />
    </div>
  );
};

export default LandingPage;
