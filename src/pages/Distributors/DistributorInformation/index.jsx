import React from "react";
import Form from "react-bootstrap/Form";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PhoneInput from "react-phone-input-2";
import "./index.css";
import { Col, Row } from "react-bootstrap";
const DistributorInformation = () => {
  return (
    <div className="distributorinfo">
      <h3 className="text-center border-bottom pb-4 pt-2">
        Distributor Information
      </h3>
      <div className="infoformdata pt-4 pb-2">
        <div className="row">
          <div className="col-md-5 ">
            <div className="companylogodata">
              <h6>Company Logo</h6>
              <div className="companylogo">
                <p>
                  Recommanended logo <br /> specifications: <br /> 500px*300px{" "}
                  <br /> transparent PNG
                </p>
              </div>
              <div className="text-center pt-2">Edit</div>
            </div>
            <div className="companylogodata">
              <h6>Company White Logo</h6>
              <div className="companylogo">
                <p>
                  Recommanended logo <br /> specifications: <br /> 500px*300px{" "}
                  <br /> transparent PNG
                </p>
              </div>
              <div className="text-center pt-2">Edit</div>
            </div>
          </div>
          <div className="col-md-7">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Distributor Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStreet">
                  <Form.Control type="text" placeholder="Street" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCountry">
                  <Form.Control type="text" placeholder="Country" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicPostal">
                  <Form.Control type="text" placeholder="Postal Code" />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicSuperAdmin">
                  <Form.Control type="text" placeholder="Super Admin" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBusinessEmail">
                  <Form.Control type="text" placeholder="BusinessEmail" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs lg="2">
                <div className="phoneinput">
                  <PhoneInput country={"us"} />
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
            <button className="btn btn-primary ms-4 w-50">Save Changes</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DistributorInformation;
