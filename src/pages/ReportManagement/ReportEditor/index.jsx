import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Form, Row } from "react-bootstrap";
import { MdLocationDisabled } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import CustomPagination from "../../../components/Common/Pagination";
import { PiUsersFill } from "react-icons/pi";
import CardWithChart from "../../../components/CardWithChart";
import { FaMedkit } from "react-icons/fa";
import { FaBan, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import ValidationSchema from "../../../components/Common/ValidationScema";
import { StatusCode } from "../../../services/helper";
import { createNewReport } from "../../../redux/slice/CreateReportSlice";
import { fetchUserManagementData } from "../../../redux/slice/UserManagementSlice";
import { useFormik } from "formik";
import ButtonLoader from "../../../components/Common/ButtonLoader";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { fetchReportsData } from "../../../redux/slice/AddtoReportSlice";
const ReportEditor = () => {
  const initialValues = {
    report_name: "",
    // group_member: null,
    start_on: "",
    frequency_units: "",
    how_often: "",
    send_to_group: [],
    send_to_user: [],
  };
  const { status, AddReportData } = useSelector((state) => state.REPORTSDATA);
  const { reportnewstatus } = useSelector((state) => state.CREATENEWREPORT);
  const [search, setSearch] = useState("");
  const [finalname, setFinalName] = useState({});
  const [nameData, setNameData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [managebutton, setManageButton] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const {
    values,
    handleBlur,
    handleChange,
    setValues,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema.createnewreport,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Submitting form with values:", values);
      try {
        const res = await dispatch(createNewReport(values));
        console.log("API response:", res);
        if (res.payload?.status) {
          console.log("Report created successfully");
          navigate("/reports");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle errors here (e.g., display error messages to the user)
      } finally {
        setSubmitting(false); // Reset the submitting state
      }
    },
  });
  useEffect(() => {
    dispatch(fetchReportsData());
  }, []);

  // const addGroupHandler = (data) => {
  //   if (Object.keys(data).length === 0) {
  //     return;
  //   }
  //   const paydata = {
  //     user_id: data._id,
  //     full_name: data.first_name + data.last_name,
  //     assigned_role: data.assigned_role,
  //   };
  //   setNameData((prev) => [...prev, paydata]);
  //   setSearch("");
  //   setFinalName({});
  //   setValues({
  //     ...values,
  //     send_to_user: [...nameData, paydata],
  //   });
  // };

  // const getNameDataFromList = (data) => {
  //   setSearch(data.first_name + data.last_name) ;
  //   setFinalName(data);
  // };
  // const getNameDataFromList = (data, type) => {
  //   if (type === "user") {
  //     setSearch(data.first_name + data.last_name);
  //     setFinalName(data);
  //     setValues({
  //       ...values,
  //       send_to_user: [data],
  //     });
  //   } else if (type === "group") {
  //     setSearch(data.group_name); // Set search to group name
  //     setFinalName(data);
  //     setValues({
  //       ...values,
  //       send_to_group: [data],
  //     });
  //   }
  // };
  const addToReport = () => {
    if (selectedUser) {
      addGroupHandler(selectedUser, "user");
    } else if (selectedGroup) {
      addGroupHandler(selectedGroup, "group");
    }
    setSelectedUser(null);
    setSelectedGroup(null);
  };
  const getNameDataFromList = (data, type) => {
    if (type === "user") {
      const selectedUser = {
        user_id: data._id,
        full_name: `${data.first_name} ${data.last_name}`,
      };
      setValues((prevValues) => ({
        ...prevValues,
        send_to_user: [...prevValues.send_to_user, selectedUser],
      }));
      setNameData((prev) => [...prev, selectedUser]); // Update the nameData state
      setSearch(`${data.first_name} ${data.last_name}`); // Update the search field with the selected user's full name
    } else if (type === "group") {
      // If it's a group, add it to the send_to_group array
      const selectedGroup = {
        group_id: data._id,
        group_name: data.group_name,
      };
      setValues((prevValues) => ({
        ...prevValues,
        send_to_group: [...prevValues.send_to_group, selectedGroup],
      }));
      setNameData((prev) => [...prev, selectedGroup]); // Update the nameData state
      setSearch(data.group_name); // Update the search field with the selected group's name
    }
  };
  
  const addGroupHandler = (data, type, search) => {
    if (!data || Object.keys(data).length === 0) {
      return;
    }

    let newData = null;

    if (type === "user") {
      newData = {
        user_id: data.user_id,
        full_name: data.full_name,
        search: search, // Include the search data
      };
    } else if (type === "group") {
      newData = {
        group_id: data.group_id,
        group_name: data.group_name,
        search: search, // Include the search data
      };
    }

    // Add the new data to the respective array based on the type
    if (type === "user") {
      setValues((prevValues) => ({
        ...prevValues,
        send_to_user: [...prevValues.send_to_user, newData],
      }));
    } else if (type === "group") {
      setValues((prevValues) => ({
        ...prevValues,
        send_to_group: [...prevValues.send_to_group, newData],
      }));
    }

    // Update the nameData state to include the new data
    setNameData((prev) => [...prev, newData]);
    setSearch(""); // Clear search after adding to report
    setFinalName({});
  };

  const removeGroup = (groupId, isUser) => {
    const filterName = nameData.filter((curElm) => {
      if (isUser) {
        return curElm.user_id !== groupId;
      } else {
        return curElm.group_id !== groupId;
      }
    });

    setNameData(filterName);

    if (isUser) {
      setValues((prevValues) => ({
        ...prevValues,
        send_to_user: filterName,
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        send_to_group: filterName,
      }));
    }
  };

  const frequencyOptions = Array.from(
    { length: 12 },
    (_, index) => index + 1
  ).map((number) => (
    <option key={number} value={number}>
      {number}
    </option>
  ));

  return (
    <div className="reporteditor">
      <h3 className="text-center border-bottom pb-4 pt-2">Report Editor</h3>
      <Form onSubmit={handleSubmit}>
        <div className="row pt-3">
          <div className="col-md-5">
            <div className="reportname">
              {/* <Form.Group className="mb-3" controlId="formReportName">
              <Form.Control type="text" placeholder="Report Name" />
            </Form.Group> */}
              <Form.Group className="mb-3" controlId="formReportName">
                <Form.Control
                  type="text"
                  name="report_name"
                  value={values.report_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Report Name"
                />
              </Form.Group>
              {errors.report_name && touched.report_name ? (
                <p className="text-danger">{errors.report_name} </p>
              ) : null}
            </div>

            <div className="reportdate">
              <Form.Group className="mb-3" controlId="formBasicDate">
                <h6>Start on</h6>
                <Form.Control
                  type="date"
                  name="start_on"
                  value={values.start_on}
                  onChange={handleChange} // Handle change for date input
                />
              </Form.Group>
              {errors.start_on && touched.start_on ? (
                <p className="text-danger">{errors.start_on} </p>
              ) : null}
            </div>
            <div className="frequency">
              <h6>Frequency</h6>
              <Row>
                <Col>
                  <Form.Group controlId="exampleForm.ControlFrequencyUnits">
                    {/* <Form.Label></Form.Label> */}
                    <Form.Select
                      aria-label="Choose Units"
                      name="frequency_units"
                      value={values.frequency_units}
                      onChange={handleChange}
                    >
                      <option>Choose Units</option>
                      {frequencyOptions}
                    </Form.Select>
                  </Form.Group>
                  {errors.frequency_units && touched.frequency_units ? (
                <p className="text-danger">{errors.frequency_units} </p>
              ) : null}
                </Col>
                <Col>
                  {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlHoeOfen"
                >
                  <Form.Control type="text" placeholder="How Often" />
                </Form.Group> */}

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlHowOften"
                  >
                    <Form.Control
                      type="text"
                      name="how_often"
                      value={values.how_often}
                      onChange={handleChange}
                      placeholder="How Often"
                      // disabled // If it's not editable
                    />
                  </Form.Group>
                  {errors.how_often && touched.how_often ? (
                <p className="text-danger">{errors.how_often} </p>
              ) : null}
                </Col>
              </Row>
            </div>
            <div className="sendreport">
              <h6>Send Report To</h6>
              <Row>
                <Col>
                  {/* <Form.Group className="mb-3" controlId="formReportSearch">
                  <Form.Control type="search" placeholder="Search" />
                </Form.Group> */}
                  <Form.Group className="mb-3" controlId="formReportSearch">
                    <Form.Control
                      type="text"
                      name="groupname"
                      autoComplete="off"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={addToReport}
                  >
                    Add to Report
                  </button>
                </Col>
              </Row>
            </div>
            <div className="name_listing">
              <ul>
                {AddReportData && search && (
                  <>
                    {/* Render the Users */}
                    {AddReportData?.data?.Users.filter((user) =>
                      user.first_name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ).map((user) => (
                      <div key={user._id}>
                        <p onClick={() => getNameDataFromList(user, "user")}>
                          {user.first_name} {user.last_name}
                        </p>
                      </div>
                    ))}

                    {/* Render the Groups */}
                    {AddReportData?.data?.report_group_list
                      .filter((group) =>
                        group.group_name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((group) => (
                        <div key={group._id}>
                          <p
                            onClick={() => getNameDataFromList(group, "group")}
                          >
                            {group.group_name}
                          </p>
                        </div>
                      ))}
                  </>
                )}
              </ul>
            </div>
            <hr />
            <div className="buttongroup">
              <div className="mb-4">
                <div className="row pb-3">
                  <h4>In this Group</h4>

                  {/* Combine user data and group data */}
                  {/* Combine user data and group data */}
                  {nameData.map((curElm, index) => (
                    <div className="col-4 mb-3 position-relative" key={index}>
                      <button
                        className={`w-100 border btn ${
                          managebutton === index + 1
                            ? "border-primary text-primary"
                            : "text-black-50"
                        }`}
                        type="button"
                        onClick={() => setManageButton(index + 1)}
                      >
                        {/* Display full name if it exists, otherwise display group name */}
                        {curElm.full_name
                          ? curElm.full_name
                          : curElm.group_name}
                      </button>
                      {managebutton === index + 1 && (
                        <span
                          className={`closebuttonspan ${
                            managebutton === index + 1 ? "text-primary" : ""
                          }`}
                        >
                          <IoIosCloseCircleOutline
                            className="cursor"
                            onClick={() =>
                              removeGroup(
                                curElm.user_id || curElm.group_id,
                                !!curElm.user_id
                              )
                            }
                            size={25}
                          />
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Display error message if send_to_user field has an error */}
                  {errors.send_to_user && touched.send_to_user && (
                    <p className="text-danger">{errors.send_to_user}</p>
                  )}
                  {/* Display error message if send_to_group field has an error */}
                  {errors.send_to_group && touched.send_to_group && (
                    <p className="text-danger">{errors.send_to_group}</p>
                  )}
                </div>
                {/* <button className="btn me-2 border">Name of Group</button>
                <button className="btn border">Name of Group</button>
              </div> */}
                {/* <div> */}
                {/* <button className="btn me-2 border">Full Name of Person</button>
                <button className="btn border">Full Name of Person</button> */}
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
              <button className=" usermgmt-button" disabled>
                <FaBan /> Disable
              </button>
              <button className="  usermgmt-button">
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
          <div className="col-md-6 text-end">
            {/* <button className="btn btn-dark"> Cancel</button>
          <button className="btn btn-primary ms-4 w-50">Save Changes</button> */}
            {/* <div className="text-end"> */}
            <NavLink className="btn btn-dark me-4" to="/reports" type="button">
              Cancel
            </NavLink>
            <button
              className="btn-primary btn customsavebuttonwidth"
              type="submit"
            >
              {reportnewstatus === StatusCode.LOADING ? (
                <ButtonLoader />
              ) : (
                "Save Changes"
              )}
            </button>

            {/* </div> */}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ReportEditor;
