import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import notificationImage from "../../../Assets/images/Background.png";
import CustomButton from "../../../components/Common/Button/Button";
import DateTimePicker from "../../../components/Common/DatePicker/DatePicker";
import "./EditNotification.css";
import { RegisterEditNotification } from "../../../redux/slice/MessageCentreSlice";

function EditNotification() {
  const [content, setContent] = useState();
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.MESSAGECENTRE);

  const [notificationData, setNotificationData] = useState({
    title: "",
    message: "",
    send_message_to:[],
    location:"",
    industry:"",
  });

  const [publishDetails, setPublishDetails] = useState({
    status: "",
    revisions: 1,
    publish_on: new Date(), 
    category: "",
   
  });

  const handleSave = () => {
    console.log("Saving article...");

    dispatch(RegisterEditNotification({ ...notificationData, ...publishDetails }))
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
    setNotificationData((prevData) => ({
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
    setNotificationData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    // Logic to handle adding the search term
    console.log("Search term:", searchTerm);
    // You can implement your logic here to add the search term
    // For example, you can send it to an API endpoint or store it in state
  };
  const industry = [
    "Agriculture, forestry & fishing",
    "Mining & quarrying",
    "Manufacturing",
    "Electricity, gas, steam & air conditioning supply",
    "Water supply, sewerage, waste & remediation activities",
    "Construction",
    "Wholesale & retail trade; repair of motor vehicles and motorcycles",
    "Transport & storage",
    "Accommodation & food service activities",
    "Information & communication",
    "Financial & insurance activities",
    "Real estate activities",
    "Professional scientific & technical activities",
    "Administrative & support service activities",
    "Public admin & defence; compulsory social security",
    "Education",
    "Human health & social work activities",
    "Arts, entertainment & recreation",
    "Other service activities",
    "Private households",
  ];
  const checkboxes = [
    { value: "general_users", label: "General Users" },
    { value: "user_admin", label: "User Admin" },
    { value: "user_super_admin", label: "User Super Admin" },
    { value: "general_distributors", label: "General Distributors" },
    { value: "distributor_admin", label: "Distributor Admin" },
    { value: "distributor_super_admin", label: "Distributor Super Admin" },
    { value: "rm_admin", label: "Reliance Medical Admin" },
    { value: "rm_super_admin", label: "Reliance Medical Super Admin" },
  ];
  

  useEffect(() => {
    // Simulated data source with location mappings
    const locationData = [
      { id: 1, name: "Country 1" },
      { id: 2, name: "Country 2" },
      // Add more location entries as needed
    ];
    setLocations(locationData);
  }, []);
  const handleMessageChange = (e) => {
    setNotificationData((prevData) => ({
      ...prevData,
      message: e.target.value,
    }));
  };
  const handleCheckboxChange = (label) => {
    // Toggle checkbox state
    const updatedCheckboxState = [...notificationData.send_message_to];
    if (updatedCheckboxState.includes(label)) {
      updatedCheckboxState.splice(updatedCheckboxState.indexOf(label), 1);
    } else {
      updatedCheckboxState.push(label);
    }
    // Update notificationData state
    setNotificationData((prevData) => ({
      ...prevData,
      send_message_to: updatedCheckboxState,
    }));
  };
    const handleLocationChange = (e) => {
    setNotificationData((prevData) => ({
      ...prevData,
      location: e.target.value,
    }));
  };

  const handleIndustryChange = (e) => {
    setNotificationData((prevData) => ({
      ...prevData,
      industry: e.target.value,
    }));
  };
  return (
    <div>
      <Row>
      <Col md={3}>
      <div
        className="notification-card"
        style={{
        }}
      >
        {/* Image representing the phone screen */}
        <img src={notificationImage} className="img-fluid" alt="Notification Image" />

     
      </div>
    </Col>
    <Col md={5}>
          <div className="notification-card card border-0 p-3">
            <h3 className="listing">Edit Notification</h3>
            <div className="title-box mb-2">
              <div className="d-flex justify-content-between pb-2">
                <p className="mb-0">Title</p>
                <span>100</span>
              </div>
              <input
                className="input_style"
                type="text"
                placeholder="Title"
                value={notificationData.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="message-box mb-2">
              <div className="d-flex justify-content-between pb-2">
                <p className="mb-0">Message</p>
                <span>100</span>
              </div>
              <textarea
                className="textarea_style"
                cols={3}
                placeholder="Message"
                value={notificationData.message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <div className="checkboxes border-top border-bottom py-3 my-3">
  <Form.Group as={Row}>
    <h4>Send Message To:</h4>
    {checkboxes.map((checkbox, index) => (
      <Col md={4} key={index}>
        <Form.Check
          type="checkbox"
          label={checkbox.label}
          checked={notificationData.send_message_to.includes(checkbox.value)}
          onChange={() => handleCheckboxChange(checkbox.value)}
        />
      </Col>
    ))}
  </Form.Group>
</div>

            <div className="select_wrapper mb-3">
              {/* Location select */}
              <label htmlFor="">Location(s)</label>
              <select value={notificationData.location} onChange={handleLocationChange}>
                <option>All</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>{location.name}</option>
                ))}
              </select>
            </div>
            <div className="select_wrapper mb-3">
              {/* Industry select */}
              <label htmlFor="">Industry(s)</label>
              <select value={notificationData.industry} onChange={handleIndustryChange}>
                <option>All</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="notification-card card border-0  p-3">
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
      <p>Revisions: {publishDetails.revisions}</p>
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
            <div className="select_wrapper my-3">
              <b>Restrict notifications to users who have registered the following products</b>
            </div>
            <div className="search_btn_add mb-3">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={handleSearchChange}
                 
                />
                 <CustomButton variant="primary" onClick={handleAddClick}>
                  Add
                </CustomButton>
               
              </Form>
            </div>

           <div className="span_styles">
           <span>Product Name</span>
            <span>LOT Number</span>
         
           
          


           </div>

            <div className="btn_groups">
              <CustomButton
                // variant="danger"
                onClick={onCancelHandler}
                className="btn-dark"
              >
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

export default EditNotification;
