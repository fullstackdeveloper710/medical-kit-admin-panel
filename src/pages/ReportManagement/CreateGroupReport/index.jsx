import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./index.css";
import { Form } from "react-bootstrap";
const CreateGroupReport = () => {
  const [managebutton, setManageButton] = useState(6);
  return (
    <div className="container-fluid creategroupreport">
      <h3 className="text-center border-bottom pb-4 pt-2">
        Create A Report Group
      </h3>
      <div className="pt-4">
        <Form onSubmit={""}>
          <Form.Group className="mb-3" controlId="formBasicGroupName">
            <Form.Control
              type="text"
              name="groupname"
              placeholder="Group Name"
            />
          </Form.Group>
          <div className="row">
            <div className="col-9">
              <Form.Group className="mb-3" controlId="formBasicGroupName">
                <Form.Control
                  type="text"
                  name="groupname"
                  placeholder="Search"
                />
              </Form.Group>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Add to Group</button>
            </div>
          </div>
          <hr />
          <div className="row pb-3">
            <h4>In this Group</h4>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 1
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(1)}
              >
                Full Name of person{" "}
              </button>
              {managebutton === 1 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 1 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 2
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(2)}
              >
                Full Name of person
              </button>
              {managebutton === 2 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 2 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 3
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(3)}
              >
                Full Name of person{" "}
              </button>
              {managebutton === 3 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 3 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 4
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(4)}
              >
                Full Name of person{" "}
              </button>
              {managebutton === 4 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 4 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 5
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(5)}
              >
                Full Name of person{" "}
              </button>
              {managebutton === 5 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 5 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
            <div className="col-4 mb-3 position-relative">
              <button
                className={`w-100 border btn ${
                  managebutton === 6
                    ? "border-primary text-primary"
                    : "text-black-50"
                }`}
                type="button"
                onClick={() => setManageButton(6)}
              >
                Full Name of person{" "}
              </button>
              {managebutton === 6 && (
                <span
                  className={`closebuttonspan ${
                    managebutton === 6 ? "text-primary" : ""
                  }`}
                >
                  <IoIosCloseCircleOutline size={25} />
                </span>
              )}
            </div>
          </div>
          <hr />

          <div className="text-end">
            <button className="btn btn-dark me-4">Cancel</button>
            <button className=" btn-primary btn customsavebuttonwidth">
              Save Changes
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateGroupReport;
