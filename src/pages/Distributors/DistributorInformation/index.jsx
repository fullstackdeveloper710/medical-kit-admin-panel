import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PhoneInput from "react-phone-input-2";
import "./index.css";
import { Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { StatusCode } from "../../../services/helper";
import ButtonLoader from "../../../components/Common/ButtonLoader";
import ValidationSchema from "../../../components/Common/ValidationScema";
import { NavLink } from "react-router-dom";
import { distributorregisteruser } from "../../../redux/slice/DistributionRegistrationSlice";
const DistributorInformation = () => {
  const initialValues = {
    distributor_name: "",
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
  const [companyLogoPreview, setCompanyLogoPreview] = useState(null);
  const [whiteCompanyLogoPreview, setWhiteCompanyLogoPreview] = useState(null);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.DISTRIBUTORREGISTRATION);
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
    validationSchema: ValidationSchema.distributorinformation,
    onSubmit: async (values) => {
      const res = await dispatch(distributorregisteruser(values));
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
      <h3 className="text-center border-bottom pb-4 pt-2">
        Distributor Information
      </h3>
      <div className="infoformdata pt-4 pb-2">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5 ">
              <div className="companylogodata">
                <h6>Company Logo</h6>
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
              <div className="companylogodata">
                <h6>Company White Logo</h6>
                <div className="companylogo">
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCompany_white_logo"
                  >
                    <Form.Control
                      ref={secwhitelogoref}
                      type="file"
                      name="company_white_logo"
                      className="d-none"
                      onBlur={handleBlur}
                      onChange={handleLogoChange}
                    />
                  </Form.Group>
                  <img
                    src={
                      whiteCompanyLogoPreview
                        ? whiteCompanyLogoPreview
                        : "https://img.freepik.com/free-vector/golden-blue-diamond-shape-logo-business-template_23-2148707648.jpg?t=st=1710323942~exp=1710327542~hmac=a68811cee6c82fd9e46b9a65cd74e542d4cb3465ad4717d26760d2e4f8a89987&w=740"
                    }
                    alt="white logo"
                    className="custom_image"
                  />
                </div>
                <div className="text-center pt-2">
                  <button
                    className="btn btn-dark"
                    type="button"
                    onClick={() => secwhitelogoref.current.click()}
                  >
                    Edit
                  </button>
                  {errors.company_white_logo && touched.company_white_logo ? (
                    <p className="text-danger">{errors.company_white_logo} </p>
                  ) : null}
                </div>{" "}
              </div>
            </div>

            <div className="col-md-7">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="distributorName">
                    <Form.Control
                      type="text"
                      name="distributor_name"
                      value={values.distributor_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Distributor name"
                    />
                  </Form.Group>
                  {errors.distributor_name && touched.distributor_name ? (
                    <p className="text-danger">{errors.distributor_name} </p>
                  ) : null}

                  <Form.Group className="mb-3" controlId="formBasicStreet">
                    <Form.Control
                      type="text"
                      name="street"
                      value={values.street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Street"
                    />
                  </Form.Group>
                  {errors.street && touched.street ? (
                    <p className="text-danger">{errors.street} </p>
                  ) : null}
                  <Form.Group className="mb-3" controlId="formBasicCounty">
                    <Form.Control
                      type="text"
                      name="county"
                      value={values.county}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="County"
                    />
                  </Form.Group>
                  {errors.county && touched.county ? (
                    <p className="text-danger">{errors.county} </p>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Control
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Country"
                    />
                  </Form.Group>
                  {errors.country && touched.country ? (
                    <p className="text-danger">{errors.country} </p>
                  ) : null}
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPostal">
                    <Form.Control
                      type="text"
                      name="postal_code"
                      value={values.postal_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Postal Code"
                    />
                  </Form.Group>
                  {errors.postal_code && touched.postal_code ? (
                    <p className="text-danger">{errors.postal_code} </p>
                  ) : null}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicSuperAdmin">
                    <Form.Control
                      type="text"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Super Admin"
                    />
                  </Form.Group>
                  {errors.role && touched.role ? (
                    <p className="text-danger">{errors.role} </p>
                  ) : null}
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
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCountryCode">
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
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <h6 className="w-25">Alternative Distributor</h6>
            <Form.Group>
              <Form.Control
                className="w-100"
                type="text"
                name="alternate_distributor_name"
                value={values.alternate_distributor_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Distributor Name"
              />
            </Form.Group>
            {errors.alternate_distributor_name &&
            touched.alternate_distributor_name ? (
              <p className="text-danger">
                {errors.alternate_distributor_name}{" "}
              </p>
            ) : null}
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex">
                <div className="me-5">
                  <MdLocationDisabled size={20} />
                  <span className="ms-1">Disable</span>
                </div>
                <div>
                  <GoTrash size={20} />
                  <span> Delete</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <NavLink className={"nav-link d-inline"} to="/distributors">
                <button className="btn btn-dark" type="button">
                  Cancel
                </button>
              </NavLink>
              <button className="btn btn-primary ms-4 w-50" type="submit">
                {status === StatusCode.LOADING ? (
                  <ButtonLoader />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>{" "}
        </Form>
      </div>
    </div>
  );
};

export default DistributorInformation;
