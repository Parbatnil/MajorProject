import React from "react";

import CoursesAndExam from "./components/CoursesAndExam";
import TrendCourse from "./components/TrendCourse";
import Feedback from "./components/Feedback";

const LandingPage = () => {
  return (
    <div>
      <CoursesAndExam />
      <TrendCourse />
      <Feedback/>
      <div>hello</div>
    </div>
  );
};

export default LandingPage;
