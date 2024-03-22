import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import MapImage from "../../Assets/images/mapImage.png";
import "../BusinessProfile/style.css";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form } from "react-bootstrap";

import "react-phone-number-input/style.css";
import { fetchBusinessProfileData } from "../../redux/slice/BusinessProfileSlice";
import Loader from "../../components/Common/Loader";
import { fetchsuperadminapproverdata } from "../../redux/slice/CreateLocationSlice";
import {
  UpdateBusinessProfile,
  fetchUserProfileData,
} from "../../redux/slice/UserProfileSlice";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ValidationSchema from "../../components/Common/ValidationScema";
import { StatusCode } from "../../services/helper";
import ButtonLoader from "../../components/Common/ButtonLoader";

const BusinessProfile = () => {
  const { status, BusinessProfileData } = useSelector(
    (state) => state.BUSINESSPROFILE
  );
  const { BusinessprofileForm, formloadstatus } = useSelector(
    (state) => state.BUSINESSPROFILEFORM
  );

  const { ApproversSuperAdminsData } = useSelector(
    (state) => state.SUPERADMINAPPROVER
  );
  const dispatch = useDispatch();

  const userData = BusinessProfileData?.locations || [];
  const company = BusinessProfileData?.company || [];
  const companyEmail = company.distributor_email || "";
  const compNumber = company.distributor_email || "";
  const initialValues = {
    company_name: "",
    country_code: "",
    contact_number: "",
    email: "",
    assigned_role: "",
    number: "",
    businessEmail: "",
    assigned_role: "",
    approver: "approver",
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    setValues,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema.updateuser,
    onSubmit: async (values) => {
      const payload = {
        company_name: values.company_name,
        country_code: values.country_code,
        contact_number: values.contact_number,
        business_email: values.email,
        assigned_role: values.assigned_role,
      };
      const res = dispatch(UpdateBusinessProfile(payload));
    },
  });

  useEffect(() => {
    setValues({
      ...values,
      company_name: BusinessprofileForm?.business_profile?.company_name || "",
      country_code: BusinessprofileForm?.business_profile?.country_code || "",
      contact_number:
        BusinessprofileForm?.business_profile?.contact_number || "",
      email: BusinessprofileForm?.business_profile?.email || "",
      assigned_role: BusinessprofileForm?.business_profile?.assigned_role || "",
    });
  }, [BusinessprofileForm]);

  useEffect(() => {
    dispatch(fetchBusinessProfileData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserProfileData());
  }, []);
  useEffect(() => {
    dispatch(fetchsuperadminapproverdata());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-3 business_block">
      <Form onSubmit={handleSubmit}>
        <div className="topdata">
          <h4 className="text-center">
            <b>Business Profile</b>
          </h4>

          <div className="divider" />
        </div>
        <div className="row middle">
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
            <div className="row">
              <Form.Group
                className="mb-3 col-12"
                controlId="formBasicBusinessName"
              >
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company_name"
                  value={values.company_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Business Name"
                />
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group
                className="mb-3 col-3"
                controlId="formBasicBusinessName"
              >
                <div className="phoneinput">
                  <PhoneInput
                    name="country_code"
                    country={"us"}
                    value={values.country_code}
                    onChange={(value) =>
                      handleChange({
                        target: { name: "country_code", value },
                      })
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3 col-5" controlId="formBasicPhone">
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
                  name="contact_number"
                  type="text"
                  pattern="[0-9]*"
                  value={values.contact_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Number"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-4"
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
            </div>
            <hr />

            <div className="row">
              <Form.Group
                className="mb-3 col-6"
                controlId="formBasicAsignedSuperAdmin"
              >
                <Form.Label>Asigned Super Admin</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  name="assigned_role"
                  value={values.assigned_role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Super Admin"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-6"
                controlId="formBasicAsignegApprover"
              >
                <Form.Label>Approver</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  name="approver"
                  value={values.approver}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Approver"
                />
              </Form.Group>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <h4 className="text-center">
          <b>Company Locations</b>
        </h4>

        <div className="row gx-5 mt-3">
          <Slider
            horizontal={true}
            dots={true}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
          >
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
            <Button variant="primary" type="submit">
              {formloadstatus === StatusCode.LOADING ? (
                <ButtonLoader />
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BusinessProfile;
