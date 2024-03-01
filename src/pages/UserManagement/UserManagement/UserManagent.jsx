import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import profilepic from "../../../Assets/Profile/profile.png";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomButton from "../../../components/Common/Button/Button";
import { FaStopCircle, FaTrash } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import "./UserManagement.css";

function UserManagement() {
  const [content, setContent] = useState();

  const [checkboxStates, setCheckboxStates] = useState({
    text1: false,
    text2: false,
    text3: false,
  });

  const handleSave = () => {
    console.log("Content saved:", content);
  };

  const onCancelHandler = () => {
    // Logic to handle cancel action
    console.log("Edit cancelled");
  };

  const handleCheckboxChange = (fieldName) => {
    setCheckboxStates({
      ...checkboxStates,
      [fieldName]: !checkboxStates[fieldName],
    });
  };
  const roleOptions = [
    { value: "", label: "Assign Role" },
    { value: "role1", label: "Role 1" },
    { value: "role2", label: "Role 2" },
    { value: "role3", label: "Role 3" },
  ];
  const initialValues = {
    firstName: "",
    lastName: "",
    countryCode: "",
  };

  // Define validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    countryCode: Yup.string().required("Country Code is required"),
  });
  return (
    <div className="create-user">
      <Container>
        <Row className="align-items-c">
          <Col>
            <h3
              className="listing"
              style={{ textAlign: "center", paddingBottom: "20px" }}
            >
              User Management
            </h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            <img src={profilepic} alt="Profile Picture" className="img-fluid" />
            {/* <Button variant="primary">Edit Profile</Button> */}
            <Row>
              <Col>
                <span>Edit</span>
              </Col>
            </Row>
          </Col>

          <Col md={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="form_style">
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <ErrorMessage name="firstName" component="div" />
                      </div>
                    </Col>

                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <ErrorMessage name="lastName" component="div" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="email"
                          name="businessEmail"
                          placeholder=" Business Email"
                        />
                        <ErrorMessage name="businessEmail" component="div" />
                      </div>
                    </Col>

                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="officeLocation"
                          placeholder=" Office Location"
                        />
                        <ErrorMessage name="officeLocation" component="div" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <PhoneInput
                          country={"us"}
                          onChange={(value) =>
                            setFieldValue("countryCode", value)
                          }
                          placeholder="Number"
                        />
                        <ErrorMessage name="countryCode" component="div" />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="employeeId"
                          placeholder=" Employee ID"
                        />
                        <ErrorMessage name="employeeId" component="div" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="jobTitle"
                          placeholder="Job Title"
                        />
                        <ErrorMessage name="jobTitle" component="div" />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="dropdown"
                          name="assignRole"
                          as="select"
                          className="form-control"
                        >
                          {roleOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="assignRole"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h3
              style={{
                styleName: "Category Head",
                fontFamily: "Open Sans",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "15px",
                letterSpacing: "-0.011em",
                textAlign: "left",
              }}
              className="listing"
            >
              Permissions
            </h3>
          </Col>
        </Row>

        <Form>
          <Row>
            <Col>
              <Form.Check
                type="switch"
                id="ManageProducts"
                label="Manage Products"
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="checkbox3"
                label="Manage Company Users "
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="checkbox3"
                label="Manage Business Profile"
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Check
                type="switch"
                id="ManageProducts"
                label="Manage Products"
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="checkbox3"
                label="Manage Company Users "
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="checkbox3"
                label="Manage Business Profile"
                checked={checkboxStates.text3}
                onChange={() => handleCheckboxChange("text3")}
              />
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <Row className="justify-content-end py-5">
          <Col md={6}>
            <div className="btn_groups ms-md-5 ps-md-5">
              <button className="btn btn-outline-none usermgmt-button" disabled>
                Disable
              </button>
              <button className="btn btn-outline-none  usermgmt-button">
                <FaTrash/>Delete
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className="btn_groups ms-md-5 ps-md-5">
              <CustomButton
                // variant="danger"
                onClick={onCancelHandler}
                className="btn-dark"
              >
                Cancel
              </CustomButton>{" "}
              <CustomButton onClick={handleSave}>Save Changes</CustomButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserManagement;
