import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/CourseStore";
import authorStore from "../stores/AuthorStore";
import * as courseActions from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onCourseChange);
    authorStore.addChangeListener(onAuthorsChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      var course = courseStore.getCourseBySlug(slug);
      if (course) setCourse(course);
      else props.history.push("/notfound");
    }
    if (authors.length === 0) {
      loadAuthors();
    }

    return () => {
      courseStore.removeChangeListener(onCourseChange);
      authorStore.removeChangeListener(onAuthorsChange);
    };
  }, [props.history, authors.length, courses.length, props.match.params.slug]);

  const onCourseChange = () => {
    setCourses(courseStore.getCourses());
  };

  const onAuthorsChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  const handleChange = (event) => {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required!";
    if (!course.authorId) _errors.author = "Author is required!";
    if (!course.category) _errors.category = "Category is required!";
    setErrors(_errors);
    return Object.keys(_errors).length < 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm
        errors={errors}
        authors={authors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
