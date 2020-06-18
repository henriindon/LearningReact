import React from "react";
import TextInput from "./common/TextInput";
import DropDown from "./common/DropDown";
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

      <DropDown
        id="authorId"
        name="authorId"
        onChange={props.onChange}
        value={String(props.course.authorId || "")}
        label="Author"
        error={props.errors.author}
        sources={props.authors}
      />

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
  authors: PropsType.array.isRequired,
  onSubmit: PropsType.func.isRequired,
  onChange: PropsType.func.isRequired,
  errors: PropsType.object.isRequired,
};

export default CourseForm;
