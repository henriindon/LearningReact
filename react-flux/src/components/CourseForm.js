import React from "react";
import TextInput from "./common/TextInput";
import PropsType from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        label="title"
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.author && (
          <div className="alert alert-danger">{props.errors.author}</div>
        )}
      </div>

      <TextInput
        id="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        label="category"
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propsType = {
  course: PropsType.object.isRequired,
  onSubmit: PropsType.func.isRequired,
  onChange: PropsType.func.isRequired,
  errors: PropsType.object.isRequired,
};

export default CourseForm;
