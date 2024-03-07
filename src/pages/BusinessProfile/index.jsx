import React from "react";
import { Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import MapImage from "../../Assets/images/mapImage.png";
import "../BusinessProfile/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const BusinessProfile = () => {
  const validationSchema = Yup.object().shape({
    businessName: Yup.string().required("Business Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Number is required"),
    businessEmail: Yup.string()
      .email("Invalid email")
      .required("Business Email is required"),
    superAdmin: Yup.string().email("Invalid email").required("Email is required"),
    approver: Yup.string().email("Invalid email").required("Email is required"),
  });

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
              businessName: "",
              email: "",
              number: "",
              businessEmail: "",
              superAdmin: "",
              approver: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form>
                <div className="">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Field
                      type="text"
                      name="businessName"
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
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <PhoneInput
                          international
                          defaultCountry="US"
                          value={values.number} 
                          onChange={(value) => setFieldValue("number", value)} 
                          className="form-control business_input" 
                          placeholder="Phone Number"
                        />
                        <ErrorMessage
                          name="number"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          type="email"
                          name="businessEmail"
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
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Assigned Super Admin</Form.Label>
                        <Field
                          type="email"
                          name="superAdmin"
                          className="form-control"
                          placeholder="Super Admin"
                        />
                        <ErrorMessage
                          name="superAdmin"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Assigned Approver</Form.Label>
                        <Field
                          type="email"
                          name="approver"
                          className="form-control"
                          placeholder="Approver"
                        />
                        <ErrorMessage
                          name="approver"
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
      {/* Locations Display */}
      <div className="row gx-5 mt-3">
        <div className="col-md-4 p-2">
          <>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Location Name</small>
                    </b>
                    <p>The One Tower</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>House Number and Street Name</small>
                    </b>
                    <p>23 Harvester Road</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>City/Town</small>
                    </b>
                    <p>Epsom</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Country</small>
                    </b>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>

              <div>
                <img src={MapImage} style={{ width: 100, height: 90 }} />

                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Post Code</small>
                    </b>
                    <p>KT19 5EL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Email</small>
                  </b>
                  <p>info@kanousei.com</p>
                </div>
              </div>
              <div>
                <div>
                  <b className="smallText">
                    <small>Contact</small>
                  </b>
                  <p>+971 50106 8988</p>
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
          </>
        </div>
        <div className="col-md-4 box p-2">
          <>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Location Name</small>
                    </b>
                    <p>The One Tower</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>House Number and Street Name</small>
                    </b>
                    <p>23 Harvester Road</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>City/Town</small>
                    </b>
                    <p>Epsom</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Country</small>
                    </b>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>

              <div>
                <img src={MapImage} style={{ width: 100, height: 90 }} />

                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Post Code</small>
                    </b>
                    <p>KT19 5EL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Email</small>
                  </b>
                  <p>info@kanousei.com</p>
                </div>
              </div>
              <div>
                <div>
                  <b className="smallText">
                    <small>Contact</small>
                  </b>
                  <p>+971 50106 8988</p>
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
          </>
        </div>
        <div className="col-md-4 p-2">
          <>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Location Name</small>
                    </b>
                    <p>The One Tower</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>House Number and Street Name</small>
                    </b>
                    <p>23 Harvester Road</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>City/Town</small>
                    </b>
                    <p>Epsom</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Country</small>
                    </b>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>

              <div>
                <img src={MapImage} style={{ width: 100, height: 90 }} />

                <div className="d-flex">
                  <div>
                    <b className="smallText">
                      <small>Post Code</small>
                    </b>
                    <p>KT19 5EL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <b className="smallText">
                    <small>Email</small>
                  </b>
                  <p>info@kanousei.com</p>
                </div>
              </div>
              <div>
                <div>
                  <b className="smallText">
                    <small>Contact</small>
                  </b>
                  <p>+971 50106 8988</p>
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
          </>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center gap-2">
          <Button size="sm" className=" text-center rounded-circle">
            <FaPlus />
          </Button>
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
