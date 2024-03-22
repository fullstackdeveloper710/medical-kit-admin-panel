import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import MapImage from "../../Assets/images/mapImage.png";
import "../BusinessProfile/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form } from "react-bootstrap";

import "react-phone-number-input/style.css";
import { fetchBusinessProfileData } from "../../redux/slice/BusinessProfileSlice";
import Loader from "../../components/Common/Loader";
import { fetchsuperadminapproverdata } from "../../redux/slice/CreateLocationSlice";
import { fetchUserProfileData } from "../../redux/slice/UserProfileSlice";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BusinessProfile = () => {
  const dispatch = useDispatch();
  const { status, BusinessProfileData  } = useSelector(
    (state) => state.BUSINESSPROFILE
  );
  const {  BusinessprofileForm } = useSelector(
    (state) => state.BUSINESSPROFILEFORM
  );

  const {  ApproversSuperAdminsData } = useSelector(
    (state) => state.SUPERADMINAPPROVER
  );

  useEffect(() => {
    dispatch(fetchBusinessProfileData());
  }, [dispatch]);



  useEffect(() => {
    dispatch(fetchUserProfileData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchsuperadminapproverdata());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    businessName: Yup.string().required("Business Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Number is required"),
    businessEmail: Yup.string()
      .email("Invalid email")
      .required("Business Email is required"),
    superAdmin: Yup.string().required("Super Admin is required"),
    approver: Yup.string().required("Approver is required"),
  });
  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const userData = BusinessProfileData?.locations || [];
  const company = BusinessProfileData?.company || [];
  const companyEmail = company.distributor_email || "";
  const compNumber = company.distributor_email || "";
  // console.log(userDataApprover, "userDataApprover");
  
  const userInfo = BusinessprofileForm?.business_profile || [];
  console.log(userInfo,"userinformation")




  return (
    <div className="p-3 business_block">
      <h4 className="text-center">
        <b>Business Profile</b>
      </h4>

      <div className="divider" />

      <div className="row ">
        <div className="col-sm-3">
          <div className="recommended_logo box d-flex justify-content-center align-items-center flex-column">
            <p>Recommended logo</p>
            <p>Specifications</p>
            <p>500px X 300px</p>
            <p>transparent PNG</p>
          </div>
          <p className="text-center edit_btn">Edit</p>
        </div>

        <div className="col-sm-9">
          <Formik
            initialValues={{
              company_name: userInfo.company_name || "",
              country_code: userInfo.country_code || "",
              contact_number: userInfo.contact_number || "",
              email: userInfo.email || "",
              assigned_role:userInfo.assigned_role || "",
              number: "",
              businessEmail: "",
              superAdmin: "",
              approver: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(
              values,

              
              
              { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, values,
            

            errors,
            handleBlur,
            handleChange,
            touched,
            handleSubmit,
            setValues,
             setFieldValue }) => (
              <Form>
                <div className="">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Field
                      type="text"
                      name="company_name"
                      className="form-control"
                      placeholder="Business Name"
                    />
                    <ErrorMessage
                      name="businessName"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <div className="row">
                    <div className="col-sm-6">
                    <Row>
                <Col xs lg="3">
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
              </Row>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Business Email"
                        />
                        <ErrorMessage
                          name="businessEmail"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row">
                    <div className="col-sm-6">
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput12"
                  >
                    <Field
                      type="text"
                      name="assigned_role"
                      className="form-control"
                      // placeholder="Business Name"
                    />
                    <ErrorMessage
                      name="superAdmin"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                    </div>

                    
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="divider"></div>

      <h4 className="text-center">
        <b>Company Locations</b>
      </h4>

      <div className="row gx-5 mt-3">

      <Slider horizontal={true} dots={true} infinite={true} slidesToShow={3} slidesToScroll={1}>

        {userData.map((location, company) => (
          <div key={location._id} className="col-md-4 p-2">
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Location Name</small>
                    </b>
                    <p>{location.location_name}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>House Number and Street Name</small>
                    </b>
                    <p>{location.street}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>City/Town</small>
                    </b>
                    <p>{location.city}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Country</small>
                    </b>
                    <p>{location.country}</p>
                  </div>
                </div>
              </div>
              <div>
                {/* Render map or any other location-related component */}
                <img src={MapImage} style={{ width: 100, height: 90 }} />
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Post Code</small>
                    </b>
                    <p>{location.zip_code}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between align-items-center border-top border-dark pt-2">
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Email</small>
                  </b>
                  <p>{companyEmail}</p>
                </div>
              </div>
              <div>
                <div>
                  <b className="smallText">
                    <small>Contact</small>
                  </b>
                  <p>{location.telephone}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Assigned Super Admin</small>
                  </b>
                  <p>Harold Dickenson Jr</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Assigned Approver</small>
                  </b>
                  <p>Jugal Rupela</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center gap-2">
          <NavLink
            to="/createlocation"
            size="sm"
            className=" text-center rounded-circle"
          >
            <FaPlus />
          </NavLink>
          <span className="button-text">Create Location</span>
        </div>
        <div className="d-flex gap-3">
          <Button variant="dark">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
