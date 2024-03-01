import React, { useState } from "react";
import "./Reports.css";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  DropdownButton,
  Dropdown,
  Form,
  Card,
} from "react-bootstrap";
import {
  FaEdit,
  FaFileExport,
  FaFileImport,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import tableData from "../../data";
import CustomPagination from "../../components/Common/Pagination";
import { FaDeleteLeft } from "react-icons/fa6";
import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";

// import DateTimePicker from "../../../components/DatePicker/DatePicker";
export const  reportscolumns = [
  {
    name: "Report Name",
    selector: (row) => row.reportName,
    
  },
  {
    name: "Frequency",
    selector: (row) => row.frequency,
    
  },
  {
    name: "Recipients",
    selector: (row) => row.recipients,
    
  },

  {
    name: "Last Sent",
    selector: (row) => row.lastSent,
    
  },
  {
    name: "Status",
    selector: (row) => row.status,
    
  },
  
];


function Reports() {
  const [content, setContent] = useState(``);
  const [directorName, setDirectorName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    // Implement delete functionality here
    // For demonstration, let's just clear the director name
    setDirectorName("");
  };

  const handleSaveClick = () => {
    // Implement save functionality here
    setIsEditing(false);
  };

  const handleSave = () => {
    // Logic to save the content
    console.log("Content saved:", content);
  };

  const onCancelHandler = () => {
    // Logic to handle cancel action
    console.log("Edit cancelled");
  };

  const handleChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <div className="reports">
      <Container>
        <Row>
          <Col md={8}>
            <DataTableComponent
              columns={reportscolumns}
              data={tableData}
              selectedRows={true}
              title={"Reports"}
            />
          </Col>
          <Col md={4}>
            <Card style={{ border: "none", padding: 10 }}>
              <h3 className="listing text-center">Report Groups</h3>
              <div className="divider"></div>

              <div className="title-box mb-2">
                <div className="d-flex justify-content-between pb-2">
                  <p className="mb-0">Admin Team</p>
                </div>
                <div className="person-box">
                  <b>Directors</b>
                  <div className="divider"></div>
                  <p className="mt-3">
                    person 1 , person 2 , person 3 , person 4{" "}
                  </p>
                  <p>person 5 , person 6 , person 7 </p>

                  <div className="d-flex mt-2 edit_delete">
                    <span>
                      <FaEdit />
                      Edit
                    </span>
                    <span variant="danger">
                      <FaTrash /> Delete
                    </span>
                  </div>
                </div>

                <p className="mt-4">Sales Reps</p>

                {/* <Form>
                  <Form.Group as={Col}>
                    Director name
                    <Form.Control type="text" placeholder="Director Name" />

                    Edit and Delete options
                    <div className="d-flex mt-2 edit_delete">
                      <span>
                        <FaEdit />
                        Edit
                      </span>
                      <span variant="danger">
                        <FaTrash /> Delete
                      </span>
                    </div>
                    <span>Sales Reps</span>
                  </Form.Group>
                </Form> */}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reports;
