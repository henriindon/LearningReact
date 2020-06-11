import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        label="title"
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
      </div>

      <TextInput
        id="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        label="category"
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
