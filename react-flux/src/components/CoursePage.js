import React, { useState, useEffect } from "react";
import CourseTable from "./CourseTable";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseTable courses={courses} />
    </>
  );
}

export default CoursePage;
