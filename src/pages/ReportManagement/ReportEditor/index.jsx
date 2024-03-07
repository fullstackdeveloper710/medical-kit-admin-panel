import React from "react";
import "./index.css";
import { Col, Form, Row } from "react-bootstrap";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import CustomPagination from "../../../components/Common/Pagination";
import { PiUsersFill } from "react-icons/pi";
import CardWithChart from "../../../components/CardWithChart";
import { FaMedkit } from "react-icons/fa";
const ReportEditor = () => {
  return (
    <div className="reporteditor">
      <h3 className="text-center border-bottom pb-4 pt-2">Report Editor</h3>
      <div className="row pt-3">
        <div className="col-md-5">
          <div className="reportname">
            <Form.Group className="mb-3" controlId="formReportName">
              <Form.Control type="text" placeholder="Report Name" />
            </Form.Group>
          </div>
          <div className="reportdate">
            <Form.Group className="mb-3" controlId="formBasicDate">
              <h6>Start on</h6>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <div className="frequency">
            <h6>Frequency</h6>
            <Row>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Choose Units</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlHoeOfen"
                >
                  <Form.Control type="text" placeholder="How Often" />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="sendreport">
            <h6>Send Report To</h6>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formReportSearch">
                  <Form.Control type="search" placeholder="Search" />
                </Form.Group>
              </Col>
              <Col>
                <button className="btn btn-primary w-100">Add to Report</button>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="buttongroup">
            <div className="mb-4">
              <button className="btn me-2 border">Name of Group</button>
              <button className="btn border">Name of Group</button>
            </div>
            <div>
              <button className="btn me-2 border">Full Name of Person</button>
              <button className="btn border">Full Name of Person</button>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="fw-bold">
            <Form.Check
              label="Choose the Report Widget Name"
              name="group1"
              type={"checkbox"}
            />
          </div>
          <hr />
          <div className="row">
            <div className="col-1">
              <Form.Check name="group1" type={"checkbox"} />
            </div>
            <div className="col-7">
              <div className="border d-flex">
                <span className="mt-3 ps-2">
                  <PiUsersFill size={25} />
                </span>
                <CardWithChart title="Registered User" count="1324" />
              </div>
            </div>
            <div className="col-4">
              <h6>Users registered over the last six months.</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-1">
              <Form.Check name="group1" type={"checkbox"} />
            </div>
            <div className="col-7">
              <div className="border d-flex">
                <span className="mt-3 ps-2">
                  <FaMedkit size={25} />
                </span>
                <CardWithChart title="Registered Kits" count="1200" />
              </div>
            </div>
            <div className="col-4">
              <h6>Annual View of Kits Registered over time.</h6>
            </div>
          </div>
          <hr />
          <div className="mt-3">
            <CustomPagination />
          </div>
        </div>
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
  );
};

export default ReportEditor;
