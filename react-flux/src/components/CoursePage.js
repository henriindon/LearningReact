import React, { useState, useEffect } from "react";
import CourseTable from "./CourseTable";
import coursetStore from "../stores/CourseStore";
import authorStore from "../stores/AuthorStore";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { toast } from "react-toastify";
import { loadAuthors } from "../actions/authorActions";

function CoursePage() {
  const [courses, setCourses] = useState(coursetStore.getCourses());

  useEffect(() => {
    coursetStore.addChangeListener(onCoursesChange);
    if (coursetStore.getCourses().length === 0) {
      loadAuthors();
      loadCourses();
    }
    return () => {
      coursetStore.removeChangeListener(onCoursesChange);
    };
  }, []);

  function onCoursesChange() {
    const authors = authorStore.getAuthors();
    const storeCourses = coursetStore.getCourses();

    const updatedCourses = storeCourses.map((course) => {
      return {
        ...course,
        authorName: authors.find((author) => course.authorId === author.id)
          .name,
      };
    });
    setCourses(updatedCourses);
  }

  function deleteCourseHandler(id) {
    deleteCourse(id);
    toast.success("course deleted!");
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseTable courses={courses} deleteCourse={deleteCourseHandler} />
    </>
  );
}

export default CoursePage;
