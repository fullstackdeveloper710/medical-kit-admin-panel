import { Container, Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-number-input/style.css";
import CustomButton from "../../../components/Common/Button/Button";
import { FaBan, FaTrash } from "react-icons/fa";
import "./CreateUser.css";
import { useEffect, useRef, useState } from "react";
import {
  StatusCode,
  asignRoles,
  userPermissions,
} from "../../../services/helper";
import {
  createNewUser,
  fetchLocation,
} from "../../../redux/slice/CreateNewUserSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../../components/Common/ButtonLoader";
import ValidationSchema from "../../../components/Common/ValidationScema";
import { NavLink, useNavigate } from "react-router-dom";

function CreateUser() {
  const initialValues = {
    first_name: "",
    last_name: "",
    location_id: "",
    contact_number: "",
    country_code: "",
    employee_id: "",
    job_title: "",
    assigned_role: "",
    permissions: null,
    email: "",
    // profile_pic: null,
  };
  const whitelogoref = useRef();
  const [companyLogoPreview, setCompanyLogoPreview] = useState(null);
  const [checkedPermissions, setCheckedPermissions] = useState([]);
  const { status } = useSelector((state) => state.CREATEUSERANDLOCATION);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { FetchLocationData } = useSelector(
    (state) => state.CREATEUSERANDLOCATION
  );
  console.log(FetchLocationData, "dskj");
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
    validationSchema: ValidationSchema.createnewuser,
    onSubmit: async (values) => {
      const res = await dispatch(createNewUser(values));
      if (res.payload?.status) {
        navigate("/users");
      }
    },
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setCompanyLogoPreview(URL.createObjectURL(file));
    // setValues({ ...values, profile_pic: file });
  };

  const handlePermissionChange = (event) => {
    const permissionId = event.target.id;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedPermissions([...checkedPermissions, permissionId]);
      setValues({ ...values, permissions: checkedPermissions });
    } else {
      setCheckedPermissions(
        checkedPermissions.filter((id) => id !== permissionId)
      );
    }
  };

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  return (
    <div className="create-user">
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="align-items-c">
            <Col>
              <h3
                className="listing"
                style={{ textAlign: "center", paddingBottom: "20px" }}
              >
                Create New User
              </h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={4}>
              {/* <div className="divider" /> */}
              <div className="logodata">
                <div className="logo">
                  <Form.Group className="mb-3" controlId="formBasicProfile_pic">
                    <Form.Control
                      ref={whitelogoref}
                      type="file"
                      name="profile_pic"
                      className="d-none"
                      onChange={handleLogoChange}
                    />
                  </Form.Group>
                  <img
                    src={
                      companyLogoPreview
                        ? companyLogoPreview
                        : "https://img.freepik.com/free-vector/ampersand-3d-icon_23-2147501139.jpg?t=st=1710323642~exp=1710327242~hmac=bf70d869f6175d92ffc60310956a301dca1a3bc45f3ed2da6ffcaa9af100f8f9&w=740"
                    }
                    alt="profile_pic logo"
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
                </div>
              </div>
            </Col>
            <Col md={8}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
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
                  <Form.Group className="mb-3" controlId="formBasicLastName">
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
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicBusinessEmail"
                  >
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
                  <Form.Group className="mb-3" controlId="formBasicLocation_id">
                    <Form.Select
                      aria-label="Default select example"
                      name="location_id"
                      onChange={handleChange}
                      value={values.location_id}
                    >
                      <option>Office Location</option>
                      {FetchLocationData &&
                        FetchLocationData?.locations?.map((curElm) => (
                          <option value={curElm._id} key={curElm._id}>
                            {curElm.location_name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                  {errors.location_id && touched.location_id ? (
                    <p className="text-danger">{errors.location_id} </p>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCountry_code"
                  >
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
                  </Form.Group>
                  {errors.country_code && touched.country_code ? (
                    <p className="text-danger">{errors.country_code} </p>
                  ) : null}
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control
                      onKeyPress={(e) => {
                        if (
                          e.key === "e" ||
                          e.key === "E" ||
                          isNaN(Number(e.key))
                        ) {
                          e.preventDefault();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.preventDefault();
                        }
                      }}
                      type="text"
                      pattern="[0-9]*"
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
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmployee_id">
                    <Form.Control
                      type="text"
                      name="employee_id"
                      value={values.employee_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Employee ID"
                    />
                  </Form.Group>
                  {errors.employee_id && touched.employee_id ? (
                    <p className="text-danger">{errors.employee_id} </p>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicJob_title">
                    <Form.Control
                      type="text"
                      name="job_title"
                      value={values.job_title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Job Title"
                    />
                  </Form.Group>
                  {errors.job_title && touched.job_title ? (
                    <p className="text-danger">{errors.job_title} </p>
                  ) : null}
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicAssigned_role"
                  >
                    <Form.Select
                      aria-label="Default select example"
                      name="assigned_role"
                      onChange={handleChange}
                      value={values.assigned_role}
                    >
                      <option>Assign Role</option>
                      {asignRoles.map((curElm, index) => (
                        <option value={curElm.value} key={index}>
                          {curElm.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  {errors.assigned_role && touched.assigned_role ? (
                    <p className="text-danger">{errors.assigned_role} </p>
                  ) : null}
                </Col>
              </Row>
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

          <div className="permisioncard">
            <Row>
              {userPermissions &&
                userPermissions.map((curElm) => (
                  <Col key={curElm.id} className={curElm.column}>
                    <Form.Group name="permissions">
                      <Form.Check
                        type={curElm.type}
                        id={curElm.id}
                        label={curElm.label}
                        onChange={handlePermissionChange}
                      />
                    </Form.Group>
                  </Col>
                ))}
              {errors.permissions && touched.permissions ? (
                <p className="text-danger">{errors.permissions} </p>
              ) : null}
            </Row>
          </div>
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
            <Col md={6}>
              <div className="btn_groups ms-md-5 ps-md-5">
                <NavLink className="nav-link" to="/users">
                  <CustomButton
                    // variant="danger"
                    className="btn-dark"
                  >
                    Cancel
                  </CustomButton>
                </NavLink>
                <button type="submit" className="btn btn-primary">
                  {status === StatusCode.LOADING ? (
                    <ButtonLoader />
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default CreateUser;
