import React, { useState, useEffect } from "react";
import CourseTable from "./CourseTable";
import coursetStore from "../stores/CourseStore";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursePage() {
  const [courses, setCourses] = useState(coursetStore.getCourses());

  useEffect(() => {
    coursetStore.addChangeListener(onChange);
    if (coursetStore.getCourses().length === 0) loadCourses();
    return () => {
      coursetStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setCourses(coursetStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseTable courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursePage;
