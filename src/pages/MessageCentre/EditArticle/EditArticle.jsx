import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CmsEditor from "../../../components/Common/CmsEditor/CmsEditor";
import "./EditArticle.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomButton from "../../../components/Common/Button/Button";
import DateTimePicker from "../../../components/Common/DatePicker/DatePicker";
import { RegisterEditArticle } from "../../../redux/slice/MessageCentreSlice";

function EditArticle() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.MESSAGECENTRE);

  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
  });

  const [publishDetails, setPublishDetails] = useState({
    status: "",
    revision: 1,
    publish_on: new Date(), // Initial value
    category: "",
    feature_article: "",
    send_notification: "",
  });

  const handleSave = () => {
    console.log("Saving article...");

    dispatch(RegisterEditArticle({ ...articleData, ...publishDetails }))
      .then((response) => {
        if (response.status === 200) {
          console.log("Article updated successfully:", response.data.message);
          console.log("Article ID:", response.data.article_id);
        } else {
          console.error("Failed to update article:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating article:", error);
      });
  };
  

  const onCancelHandler = () => {
  };

  const handleChange = (newContent) => {
    setArticleData((prevData) => ({
      ...prevData,
      content: newContent,
    }));
  };

  const handlePublishDetailsChange = (fieldName, value, format) => {
    // Format the date if format is provided
    const formattedValue = format ? formatDate(value, format) : value;
    
    setPublishDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: formattedValue,
    }));
  };
  
  // Function to format the date
  const formatDate = (date, format) => {
    return new Intl.DateTimeFormat('en-US', format).format(date);
  };
  
  const handleTitleChange = (e) => {
    setArticleData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  };

  return (
    <div>
      <Row className="edit_article_row">
        <Col md={8}>
          <div className="card p-3 border-0">
            <h3 className="listing">Edit Article</h3>
            {/* <div className="title_article">  */}
              <input
              type="text"
              placeholder="Title"
              className="title_article"
              value={articleData.title}
              onChange={handleTitleChange}
            />
            {/* </div> */}
            <div className="text-editor">
              <CmsEditor
                content={articleData.content}
                handleChange={handleChange}
                handleSave={handleSave}
                onCancelHandler={onCancelHandler}
              />
            </div>
          </div>
        </Col>
        <Col md={4}>
  <div className="card p-3 border-0">
    <h3 className="listing">Publish Details</h3>
    <div className="select_wrapper mb-3">
      <label>Status:</label>
      <select
        value={publishDetails.status}
        onChange={(e) =>
          handlePublishDetailsChange("status", e.target.value)
        }
      >
        <option>Draft</option>
        <option>Sent for Approval</option>
        <option>Approved</option>
        <option>Scheduled</option>
      </select>
    </div>
    <div className="revision mb-3">
      <p>Revisions: {publishDetails.revision}</p>
    </div>
    <div className="date_wrapper mb-3">
      <label htmlFor="">Publish on: </label>
      <DateTimePicker
        value={publishDetails.publish_on}
        onChange={(date) =>
          handlePublishDetailsChange('publish_on', date)
        }
        format="yyyy-MM-dd HH:mm:ss" // Set your desired time format
      />
    </div>
    <div className="select_wrapper mb-3">
      <label htmlFor="">Categories:</label>
      <select
        value={publishDetails.category}
        onChange={(e) =>
          handlePublishDetailsChange("category", e.target.value)
        }
      >
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
      <select
        value={publishDetails.feature_article}
        onChange={(e) =>
          handlePublishDetailsChange("feature_article", e.target.value)
        }
      >
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="select_wrapper mb-3">
      <label htmlFor="">Send Notification:</label>
      <select
        value={publishDetails.send_notification}
        onChange={(e) =>
          handlePublishDetailsChange("send_notification", e.target.value)
        }
      >
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <div className="btn_groups">
      <CustomButton onClick={onCancelHandler} className="btn-dark">
        Cancel
      </CustomButton>{" "}
      <CustomButton onClick={handleSave}>Save Changes</CustomButton>
    </div>
  </div>
</Col>

      </Row>
    </div>
  );
}

export default EditArticle;
