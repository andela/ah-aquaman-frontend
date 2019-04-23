import React from "react";
import TagsInput from "react-tagsinput";
import InputField from "../../../commons/inputField";
import Button from "../../../commons/buttons";
import "react-tagsinput/react-tagsinput.css";

const Editor = ({
  onSubmit, title, description, body, onInputChange, onChange, value,
}) => (
  <div className="col-lg-8">
    <div className="article-container">
      <div className="details create-article">
        <h4>Publish Article</h4>
        <div className="separator" />

        <form onSubmit={onSubmit} className="mt-5">
          <div>
            <div className="form-group">
              <InputField
                name="title"
                className="form-control "
                type="text"
                placeholder="Title"
                value={title}
                onInputChange={onInputChange}
                maxLength="200"
              />
            </div>

            <div className=" form-group ">
              <InputField
                name="description"
                className="form-control "
                type="text"
                placeholder="What's this article about?"
                value={description}
                onInputChange={onInputChange}
                maxLength="200"
              />
            </div>
            <div className="form-group">
              <textarea className="form-control" value={body} onChange={onInputChange} placeholder="Tell your story...... " name="body" />
            </div>
            <TagsInput value={value} onChange={onChange} />
            <div className="form-group">
              <Button
                className="btn btn-article btn-primary mb-5 mt-1 float-left"
                id="publish"
                type="submit"
                text="Publish Article"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Editor;
