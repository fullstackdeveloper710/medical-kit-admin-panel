import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { FaFileExport, FaFileImport, FaPlus } from "react-icons/fa";
import "./Users.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination";
import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";

export const usercolumns = [
  {
    name: "Last Name",
    selector: (row) => row.lastName,
  },
  {
    name: "First Name",
    selector: (row) => row.firstName,
  },
  {
    name: "Job Title",
    selector: (row) => row.jobTitle,
  },

  {
    name: "Location",
    selector: (row) => row.location,
  },
  {
    name: "Area",
    selector: (row) => row.area,
  },
  {
    name: "Role",
    selector: (row) => row.role,
  },
];
function Users() {
  return (
    <div className="kit-management">
      <DataTableComponent
        title={"User Management"}
        columns={usercolumns}
        data={tableData}
        selectedRows
      />
    </div>
  );
}

export default Users;
