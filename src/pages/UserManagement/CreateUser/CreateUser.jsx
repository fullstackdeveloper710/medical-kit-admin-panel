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
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomButton from "../../../components/Common/Button/Button";
import { FaBan, FaStopCircle, FaTrash } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import "./CreateUser.css";
import { useRef, useState } from "react";
import { StatusCode } from "../../../services/helper";

import { useDispatch, useSelector } from "react-redux";
import ValidationSchema from "../../../components/Common/ValidationScema";
import { registeruser } from "../../../redux/slice/UserManagementSlice";
import ButtonLoader from "../../../components/Common/ButtonLoader";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";

function CreateUser() {
  const initialValues = {
    assigned_role:"",
    first_name: "",
    street: "",
    county: "",
    country: "",
    email: "",
    postal_code: "",
    country_code: "",
    contact_number: "",
    company_logo: null,
    company_white_logo: null,
    alternate_distributor_name: "",
    role: "",
  };
  const [content, setContent] = useState();
  const [checkboxStates, setCheckboxStates] = useState({
    text1: false,
    text2: false,
    text3: false,
  });
  const handleCheckboxChange = (fieldName) => {
    setCheckboxStates({
      ...checkboxStates,
      [fieldName]: !checkboxStates[fieldName],
    });
  };
  const [companyLogoPreview, setCompanyLogoPreview] = useState(null);
  const [whiteCompanyLogoPreview, setWhiteCompanyLogoPreview] = useState(null);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.USEREGISTRATION);
  const whitelogoref = useRef();
  const secwhitelogoref = useRef();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema.userinformation,
    onSubmit: async (values) => {
      const res = await dispatch(registeruser(values));
    },
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "company_logo") {
      setCompanyLogoPreview(URL.createObjectURL(file));
      setValues({ ...values, company_logo: file });
    } else {
      setWhiteCompanyLogoPreview(URL.createObjectURL(file));
      setValues({ ...values, company_white_logo: file });
    }
  };
  return (
    <div className="distributorinfo">
      <h3 className="text-center border-bottom pb-4 pt-2">Create New User</h3>
      <div className="infoformdata pt-4 pb-2">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5 ">
              <div className="companylogodata">
                {/* <h6>Company Logo</h6> */}
                <div className="companylogo">
                  <Form.Group
                    className="mb-3"
                    controlId="formBasiccompany_logo"
                  >
                    <Form.Control
                      ref={whitelogoref}
                      type="file"
                      name="company_logo"
                      className="d-none"
                      onChange={handleLogoChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <img
                    src={
                      companyLogoPreview
                        ? companyLogoPreview
                        : "https://img.freepik.com/free-vector/ampersand-3d-icon_23-2147501139.jpg?t=st=1710323642~exp=1710327242~hmac=bf70d869f6175d92ffc60310956a301dca1a3bc45f3ed2da6ffcaa9af100f8f9&w=740"
                    }
                    alt="company logo"
                    className="custom_image"
                  />
                </div>
                <div className="text-center pt-2">
                  <button
                    className="btn btn-dark"
                    type="button"
                    onClick={() => whitelogoref.current.click()}
                  >
                    Edit
                  </button>

                  {errors.company_logo && touched.company_logo ? (
                    <p className="text-danger">{errors.company_logo} </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formname">
                      <Form.Control
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="First Name"
                      />
                    </Form.Group>
                    {errors.first_name && touched.first_name ? (
                      <p className="text-danger">{errors.first_name} </p>
                    ) : null}
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Control
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Last Name"
                      />
                    </Form.Group>
                    {errors.last_name && touched.last_name ? (
                      <p className="text-danger">{errors.last_name} </p>
                    ) : null}
                  </Col>
                </Row>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBusinessEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Business Email"
                    />
                  </Form.Group>
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email} </p>
                  ) : null}
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="formOfficeLocation">
                    <Form.Control
                      type="text"
                      name="street"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Office Location"
                    />
                  </Form.Group>
                  {errors.street && touched.street ? (
                    <p className="text-danger">{errors.street} </p>
                  ) : null}
                </Col>
              </Row>
              <Row>
              <Col xs lg="2">
                  <div className="phoneinput">
                    <PhoneInput
                      name="country_code"
                      country={"us"}
                      placeholder="Phone Number"
                      value={values.country_code}
                      onChange={(value) =>
                        handleChange({
                          target: { name: "country_code", value },
                        })
                      }
                    />
                  </div>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control
                      type="number"
                      name="contact_number"
                      value={values.contact_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Number"
                    />
                  </Form.Group>
                  {errors.contact_number && touched.contact_number ? (
                    <p className="text-danger">{errors.contact_number} </p>
                  ) : null}
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEmployeeId">
                    <Form.Control
                      type="text"
                      name="emp_id"
                      value={values.emp_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Employee ID(optional) "
                    />
                  </Form.Group>
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email} </p>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formJobTitle">
                    <Form.Control
                      type="text"
                      name="assigned_role"
                      value={values.assigned_role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Job Title"
                    />
                  </Form.Group>
                  {errors.assigned_role && touched.assigned_role ? (
                    <p className="text-danger">{errors.assigned_role} </p>
                  ) : null}
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="formAssignRole">
                    <Form.Control
                      type="text"
                      name="street"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Office Location"
                    />
                  </Form.Group>
                  {errors.street && touched.street ? (
                    <p className="text-danger">{errors.street} </p>
                  ) : null}
                </Col>
              </Row>
            </div>
          </div>
          <hr />
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
                <div className="disable_delete_action">
                  <button className=" usermgmt-button" disabled>
                    <FaBan /> Disable
                  </button>
                  <button className="  usermgmt-button">
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </Col>
              <div className="col-md-6 text-end">
                <button className="btn btn-dark" type="button">
                  Cancel
                </button>
                <button className="btn btn-primary ms-4 w-50" type="submit">
                  {status === StatusCode.LOADING ? (
                    <ButtonLoader />
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default CreateUser;
