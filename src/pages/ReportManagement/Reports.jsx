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
export const reportscolumns = [
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
      <div>
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
            <Card style={{ border: "none" }}>
              <h3 className="listing text-center">Report Groups</h3>

              <div className="title-box mb-2">
                <div className="d-flex justify-content-between px-3 pb-2">
                  <p className="mb-0">Admin Team</p>
                </div>
                <div className="person-box">
                  <b>Directors</b>
                  <p className="mt-3 border-top border-bottom py-3">
                    <span> person 1</span> ,<span> person 2</span> ,{" "}
                    <span>person 3</span> ,<span> person 4 </span>
                    <span> person 5</span> ,<span> person 6</span> ,
                    <span> person 7</span>{" "}
                  </p>

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

                <p className="mt-4 px-3">Sales Reps</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Reports;
