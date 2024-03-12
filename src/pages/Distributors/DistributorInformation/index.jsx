import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PhoneInput from "react-phone-input-2";
import "./index.css";
import { Col, Row, Form } from "react-bootstrap";
const DistributorInformation = () => {
  const validationSchema = Yup.object().shape({
    distributorName: Yup.string().required("Distributor Name is required"),
    formBasicStreet: Yup.string().required("Street is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    superAdmin: Yup.string().required("Super Admin is required"),
    businessEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    alternativeDistributor: Yup.string(),
  });

  return (
    <div className="distributorinfo">
      <h3 className="text-center border-bottom pb-4 pt-2">
        Distributor Information
      </h3>
      <div className="infoformdata pt-4 pb-2">
        <Formik
          initialValues={{
            distributorName: "",
            street: "",
            country: "",
            postalCode: "",
            superAdmin: "",
            businessEmail: "",
            phoneNumber: "",
            alternativeDistributor: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col-md-5 ">
                  <div className="companylogodata">
                    <h6>Company Logo</h6>
                    <div className="companylogo">
                      <p>
                        Recommanended logo <br /> specifications: <br />{" "}
                        500px*300px <br /> transparent PNG
                      </p>
                    </div>
                    <div className="text-center pt-2">Edit</div>
                  </div>
                  <div className="companylogodata">
                    <h6>Company White Logo</h6>
                    <div className="companylogo">
                      <p>
                        Recommanended logo <br /> specifications: <br />{" "}
                        500px*300px <br /> transparent PNG
                      </p>
                    </div>
                    <div className="text-center pt-2">Edit</div>
                  </div>
                </div>

                <div className="col-md-7">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="distributorName">
                        <Field
                          type="text"
                          name="distributorName"
                          placeholder="Distributor Name"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="distributorName"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicStreet">
                        <Field
                          type="text"
                          name="formBasicStreet"
                          placeholder="Street"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="formBasicStreet"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Field
                          type="text"
                          name="country"
                          placeholder="Country"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="error-message"
                        />{" "}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicPostal">
                        <Field
                          type="text"
                          name="postalCode"
                          placeholder="Postal Code"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="postalCode"
                          component="div"
                          className="error-message"
                        />{" "}
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicSuperAdmin"
                      >
                        <Field
                          type="text"
                          name="superAdmin"
                          placeholder="Super Admin"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="superAdmin"
                          component="div"
                          className="error-message"
                        />{" "}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicBusinessEmail"
                      >
                        <Field
                          type="text"
                          name="businessEmail"
                          placeholder="BusinessEmail"
                          as={Form.Control}
                        />
                        <ErrorMessage
                          name="businessEmail"
                          component="div"
                          className="error-message"
                        />{" "}
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs lg="2">
                      <div className="phoneinput">
                        <Field name="phoneNumber">
                          {({ field, meta }) => (
                            <PhoneInput
                              {...field}
                              country={"us"}
                              placeholder="Phone Number"
                              inputProps={{ name: field.name }}
                              onChange={(value) =>
                                field.onChange(field.name)(value)
                              }
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control type="text" placeholder="Number" />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <h6 className="w-25">Alternative Distributor</h6>
                <Form.Control
                  type="text"
                  className="w-75"
                  placeholder="Distribution Name"
                />
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
                  <button className="btn btn-dark"> Cancel</button>
                  <button className="btn btn-primary ms-4 w-50">
                    Save Changes
                  </button>
                </div>
              </div>{" "}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DistributorInformation;

