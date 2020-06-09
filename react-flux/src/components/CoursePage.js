import React, { useState, useEffect } from "react";
import CourseTable from "./CourseTable";
import { getCourses } from "../api/courseApi";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseTable courses={courses} />
    </>
  );
}

export default CoursePage;
