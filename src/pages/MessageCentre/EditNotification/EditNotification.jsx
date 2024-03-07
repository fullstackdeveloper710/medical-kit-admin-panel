import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import notificationImage from "../../../Assets/images/Background.png";
import CustomButton from "../../../components/Common/Button/Button";
import DateTimePicker from "../../../components/Common/DatePicker/DatePicker";
import "./EditNotification.css";

function EditNotification() {
  const [content, setContent] = useState();
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    // Logic to handle adding the search term
    console.log("Search term:", searchTerm);
    // You can implement your logic here to add the search term
    // For example, you can send it to an API endpoint or store it in state
  };
  const industries = [
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
    "General Users",
    "User Admin",
    "User Super Admin",
    "General Distributors",
    "Distributor Admin",
    "Distributor Super Admin",
    "Reliance Medical Admin",
    "Reliance Medical Super Admin",
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
          <div className="notification-card card border-0  p-3">
            <h3 className="listing">Edit Notification</h3>
            <div className="title-box mb-2">
             <div className="d-flex justify-content-between pb-2">
              <p className="mb-0">Title</p>  
              <span>100</span>
              </div>
              <input className="input_style" type="text" placeholder="Title" />
            </div>{" "}
            <div className="message-box mb-2">
            <div className="d-flex justify-content-between pb-2">
              <p className="mb-0">Message</p>
              <span>100</span>
              </div>
              <textarea className="textarea_style" cols={3} placeholder="Message"></textarea>
            </div>
            <div className="checkboxes border-top border-bottom py-3 my-3">
              <Form.Group as={Row}>
                <h4>Send Message To:</h4>
                {checkboxes.map((label, index) => (
                  <Col md={4} key={index}>
                    <Form.Check type="checkbox" label={label} />
                  </Col>
                ))}
              </Form.Group>
            </div>
            <div className="select_wrapper mb-3">
              <label htmlFor="">Location(s)</label>
              <select>
                <option>All</option>
                {locations.map((location) => (
                  <option key={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div className="select_wrapper mb-3">
              <label htmlFor="">Industry(s)</label>
              <select>
                <option>All</option>

                {industries.map((industry, index) => (
                  <option key={index}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="notification-card card border-0  p-3">
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
              <DateTimePicker />
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
