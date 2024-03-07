import React, { useState } from "react";
import CmsEditor from "../../../components/Common/CmsEditor/CmsEditor";
import "./EditArticle.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import DateTimePicker from "../../../components/DatePicker/DatePicker";
import CustomButton from "../../../components/Common/Button/Button";
import DateTimePicker from "../../../components/Common/DatePicker/DatePicker";

function EditArticle() {
  const [content, setContent] = useState(`
    <h1>Welcome to my website</h1>
    <p>This is some dummy content. You can edit it using the editor below:</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel aliquam ante. Donec eu mollis leo. Vestibulum lobortis velit quis nunc luctus, in ultricies justo finibus.</p>
    <p>Nullam vestibulum, tortor at efficitur dapibus, lorem dui consectetur nunc, nec volutpat lectus neque id dui. Duis porta, justo nec rhoncus aliquet, nunc quam facilisis quam, ut lobortis metus velit non nisl.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
  `);

  const handleSave = () => {
    // Logic to save the content
    console.log("Content saved:", content);
  };

  const onCancelHandler = () => {
    // Logic to handle cancel action
    console.log("Edit cancelled");
  };

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <Row className="edit_article_row">
        <Col md={8}>
          <div className="card p-3 border-0">
          <h3 className="listing">Edit Article</h3>
          <div className="text-editor">
            <CmsEditor
              content={content}
              handleChange={handleChange}
              handleSave={handleSave}
              onCancelHandler={onCancelHandler}/>
          </div>
          </div>
        </Col>
        <Col md={4}>
        <div className="card p-3 border-0">
          <h3 className="listing">Publish Details</h3>
          <div className="select_wrapper mb-3">
            <label htmlFor="">Status:</label>
            <select>
              <option>Draft</option>
              <option>Draft</option>
              <option>Draft</option>
              <option>Draft</option>
              <option>Draft</option>
            </select>
          </div>
          <div className="revision mb-3">
            <p>Revisions: 0</p>
          </div>
          <div className="date_wrapper mb-3">
            <label htmlFor="">Publish on: </label>
            <DateTimePicker/>
          </div>
          <div className="select_wrapper mb-3">
            <label htmlFor="">Categories:</label>

            <select>
              <option>How To Video</option>
              <option>Product Update</option>
              <option>Legislation and Compliance</option>
              <option>News Update</option>
              <option>Product Launches</option>
              <option>Training</option>
              <option>user Defined</option>
            </select>
          </div>
          <div className="select_wrapper mb-3">
            <label htmlFor="">Feature Article:</label>
            <select>
              <option>Yes </option>
              <option>No</option>
            </select>
          </div>
          <div className="select_wrapper mb-3">
            <label htmlFor="">Send Notification:</label>
            <select>
              <option>Yes </option>
              <option>No</option>
            </select>
          </div>

          <div className="btn_groups">
          <CustomButton
            // variant="danger"
            onClick={onCancelHandler}
            className="btn-dark"
            >
            Cancel
          </CustomButton>{" "}
          <CustomButton 
           onClick={handleSave}>
            Save Changes
          </CustomButton>
               </div>
               </div>
        </Col>
      </Row>
    </div>
  );
}

export default EditArticle;
