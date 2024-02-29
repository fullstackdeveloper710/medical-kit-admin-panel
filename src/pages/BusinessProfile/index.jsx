import { Form } from "react-bootstrap";
import "../BusinessProfile/style.css";
import Button from "react-bootstrap/Button";
import MapImage from "../../Assets/images/mapImage.png";
import { FaPlus } from "react-icons/fa";
import React from "react";

const BusinessProfile = () => {
  return (
    <div className="container">
      <h4 className="text-center">
        <b 
        >Business Profile</b>
      </h4>

      <div className="divider" />

      <div className="row ">
        <div className="col-sm-3">
          <div className="box d-flex justify-content-center align-items-center flex-column">
            <p>Recommended logo</p>
            <p>Specifications</p>
            <p>500px X 300px</p>
            <p>transparent PNG</p>
          </div>
          <p className="text-center">Edit</p>
        </div>

        <div className="col-sm-8">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Business Name" />
          </Form.Group>

          <div className="row">
            <div className="col-sm-2">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </div>
            <div className="col-sm-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Number" />
              </Form.Group>
            </div>
            <div className="col-sm-6">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Business Email" />
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
                <Form.Control type="email" placeholder="Super Admin" />
              </Form.Group>
            </div>
            <div className="col-sm-6">
              {" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Assigned Approver</Form.Label>
                <Form.Control type="email" placeholder="Approver" />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <h4 className="text-center">
        <b>Company Locations</b>
      </h4>
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
