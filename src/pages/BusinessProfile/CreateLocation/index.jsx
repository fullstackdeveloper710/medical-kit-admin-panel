import React, { useEffect } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import {
  createLocation,
  fetchsuperadminapproverdata,
} from "../../../redux/slice/CreateLocationSlice";
import { useFormik } from "formik";
import { countryNames } from "../../../services/helper/CountryDataAction";
import axios from "axios";
import { StatusCode } from "../../../services/helper";
import ButtonLoader from "../../../components/Common/ButtonLoader";
import ValidationSchema from "../../../components/Common/ValidationScema";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

const CreateLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ApproversSuperAdminsData, status } = useSelector(
    (state) => state.SUPERADMINAPPROVER
  );

  const initialValues = {
    location_name: "",
    street: "",
    city: "",
    county: "",
    country: "",
    zip_code: "",
    business_email: "",
    country_code: "",
    contact_number: "",
    assigned_admin_id: "",
    assigned_approver_id: "",
    longitude: "",
    latitude: "",
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ValidationSchema.createlocation,
      onSubmit: async (values) => {
        const data = await getLatLongData();
        if (data === undefined) {
          toast.error("Please enter correct location");
        } else {
          const body = { ...values, longitude: data.lon, latitude: data.lat };
          dispatch(createLocation(body));
          navigate("/businessprofile");
        }
      },
    });
  const getLatLongData = async () => {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${values.location_name}`
    );

    return response.data[0];
  };

  useEffect(() => {
    dispatch(fetchsuperadminapproverdata());
  }, []);
  return (
    <div className="createlocation">
      <h3 className="text-center border-bottom pb-3">Create A New Location</h3>
      <h6 className="text-center mt-2 mb-4 mt-4">
        Enter your business information
      </h6>
      <div className="locationformdata">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="formBasicLocationName">
                <Form.Control
                  type="text"
                  name="location_name"
                  value={values.location_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Location Name"
                />
              </Form.Group>
              {errors.location_name && touched.location_name ? (
                <p className="text-danger">{errors.location_name} </p>
              ) : null}
            </div>
            <div className="col-12">
              <Form.Group className="mb-3" controlId="formBasicStreetAdress">
                <Form.Control
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Street Address"
                />
              </Form.Group>
              {errors.street && touched.street ? (
                <p className="text-danger">{errors.street} </p>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="City"
                />
              </Form.Group>
              {errors.city && touched.city ? (
                <p className="text-danger">{errors.city} </p>
              ) : null}
            </div>

            <div className="col-6">
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
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Select
                  aria-label="Default select example"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                  onBlur={handleBlur}
                >
                  <option>Country</option>
                  {countryNames &&
                    countryNames.map((curElm, index) => (
                      <option value={curElm.label} key={index}>
                        {curElm.label}{" "}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              {errors.country && touched.country ? (
                <p className="text-danger">{errors.country} </p>
              ) : null}
            </div>

            <div className="col-6">
              <Form.Group className="mb-3" controlId="formBasicZipCode">
                <Form.Control
                  type="text"
                  name="zip_code"
                  value={values.zip_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Zip Code"
                />
              </Form.Group>
              {errors.zip_code && touched.zip_code ? (
                <p className="text-danger">{errors.zip_code} </p>
              ) : null}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="formBasicBusinessEmail">
                <Form.Control
                  type="email"
                  name="business_email"
                  value={values.business_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Business Email"
                />
              </Form.Group>
              {errors.business_email && touched.business_email ? (
                <p className="text-danger">{errors.business_email} </p>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicCountryCode">
                <div className="phoneInput">
                  <PhoneInput
                    name="country_code"
                    className="w-100"
                    country={"us"}
                    value={values.country_code}
                    onChange={(value) =>
                      handleChange({
                        target: { name: "country_code", value },
                      })
                    }
                  />{" "}
                </div>
              </Form.Group>
              {errors.country_code && touched.country_code ? (
                <p className="text-danger">{errors.country_code} </p>
              ) : null}
            </div>

            <div className="col-8">
              <Form.Group className="mb-3" controlId="formBasicContactNumber">
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
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Group
                className="mb-3"
                controlId="formBasicAssignSuperAdmin"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="text-capitalize"
                  name="assigned_admin_id"
                  onChange={handleChange}
                  value={values.assigned_admin_id}
                  onBlur={handleBlur}
                >
                  <option>Assigned Super Admin</option>
                  {ApproversSuperAdminsData &&
                    ApproversSuperAdminsData.Superadmins?.map((curElm) => (
                      <option value={curElm._id} key={curElm._id}>
                        {curElm.first_name} {curElm.last_name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              {errors.assigned_admin_id && touched.assigned_admin_id ? (
                <p className="text-danger">{errors.assigned_admin_id} </p>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="formBasicAssignApprover">
                <Form.Select
                  aria-label="Default select example"
                  name="assigned_approver_id"
                  onChange={handleChange}
                  value={values.assigned_approver_id}
                  onBlur={handleBlur}
                >
                  <option>Assigned Approver</option>
                  {ApproversSuperAdminsData &&
                    ApproversSuperAdminsData.Approvers?.map((curElm) => (
                      <option value={curElm._id} key={curElm._id}>
                        {curElm.first_name} {curElm.last_name}{" "}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              {errors.assigned_approver_id && touched.assigned_approver_id ? (
                <p className="text-danger">{errors.assigned_approver_id} </p>
              ) : null}
            </div>
          </div>
          <hr />
          <div className="text-end">
            <NavLink className="btn btn-dark me-2" to="/businessprofile">
              Cancel
            </NavLink>
            <button className="btn btn-primary" type="submit">
              {status === StatusCode.LOADING ? (
                <ButtonLoader />
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLocation;