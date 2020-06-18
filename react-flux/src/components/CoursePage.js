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
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    coursetStore.addChangeListener(onCoursesChange);
    authorStore.addChangeListener(onAuthorsChange);
    if (coursetStore.getCourses().length === 0) {
      loadAuthors();
      loadCourses();
    }
    return () => {
      coursetStore.removeChangeListener(onCoursesChange);
      authorStore.removeChangeListener(onAuthorsChange);
    };
  }, []);

  function onAuthorsChange() {
    setAuthors(authorStore.getAuthors());
  }

  function onCoursesChange() {
    setCourses(coursetStore.getCourses());
  }

  function deleteCourseHandler(id) {
    deleteCourse(id);
    toast.success("course deleted!");
  }

  function getAuthorById(id) {
    return authors.find((auth) => auth.id === id).name;
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseTable
        courses={courses}
        deleteCourse={deleteCourseHandler}
        getAuthor={getAuthorById}
      />
    </>
  );
}

export default CoursePage;
