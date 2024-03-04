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
    businessEmail: "",
    officeLocation: "",
    countryCode: "",
    employeeId: "",
    jobTitle: "",
    assignRole: "",
  };
  const phonenumberRegex =
  /^[+]?[0-9]{1,3}?[-.\\s]?[(]?[0-9]{1,4}[)]?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,9}$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    businessEmail: Yup.string()
      .email("Invalid email format")
      .required("Business Email is required"),
    officeLocation: Yup.string().required("Office Location is required"),
    country_code: Yup.string().required("Country Code is required"),
    phone: Yup.string()
      .matches(phonenumberRegex, "*Enter a valid Phone Number")
      .required("*Enter a valid Phone Number"),

    employeeId: Yup.string().required("Employee ID is required"),
    jobTitle: Yup.string().required("Job Title is required"),
    assignRole: Yup.string().required("Role is required"),
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
              {({
              setFieldValue,
              values,
              isSubmitting,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur, }) => (
                <Form className="form_style">
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
                        </span>
                      </div>
                    </Col>

                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
                        </span>{" "}
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
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.businessEmail &&
                            touched.businessEmail &&
                            errors.businessEmail}
                        </span>{" "}
                      </div>
                    </Col>

                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="officeLocation"
                          placeholder=" Office Location"
                        />
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.officeLocation &&
                            touched.officeLocation &&
                            errors.officeLocation}
                        </span>{" "}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                      <PhoneInput
                        placeholder="Phone Number"
                        value={values.phone}
                        country={values.country_code}
                        onChange={(value, country) => {
                          handleChange({ target: { name: "phone", value } });

                          // Check if country is available before accessing its properties
                          if (country && country.countryCallingCode) {
                            const updatedCountryCode = `+${country.countryCallingCode}`;
                            handleChange({
                              target: {
                                name: "country_code",
                                value: updatedCountryCode,
                              },
                            });
                          } else {
                            handleChange({
                              target: {
                                name: "country_code",
                                value: values.country_code,
                              },
                            });
                          }
                        }}
                      />

                      <span style={{ color: "red" }}>
                        {errors.phone && touched.phone && errors.phone}
                      </span>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="employeeId"
                          placeholder=" Employee ID"
                        />
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.employeeId &&
                            touched.employeeId &&
                            errors.employeeId}
                        </span>{" "}
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
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.jobTitle &&
                            touched.jobTitle &&
                            errors.jobTitle}
                        </span>{" "}
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
                        <span style={{ color: "red", fontSize: "small" }}>
                          {errors.assignRole &&
                            touched.assignRole &&
                            errors.assignRole}
                        </span>
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
                <FaTrash />
                Delete
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
