import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseRow(props) {
  const authorName = props.getAuthor(props.course.authorId);
  return (
    <tr>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => props.deleteCourse(props.course.id)}
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={"/course/" + props.course.slug}>{props.course.title}</Link>
      </td>
      <td>{authorName}</td>
      <td>{props.course.category}</td>
    </tr>
  );
}

function CourseTable(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <CourseRow
                key={course.id}
                course={course}
                deleteCourse={props.deleteCourse}
                getAuthor={props.getAuthor}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CourseTable.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCourse: PropTypes.func.isRequired,
  getAuthor: PropTypes.func.isRequired,
};

export default CourseTable;
