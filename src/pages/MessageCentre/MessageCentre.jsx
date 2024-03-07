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
import "./MessageCentre.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination";
import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";

export const Messagecolumns = [
  {
    name: "Subject",
    selector: (row) => row.subject,
  },
  {
    name: "Category",
    selector: (row) => row.category,
  },
  {
    name: "Type",
    selector: (row) => row.type,
  },

  {
    name: "Scheduled",
    selector: (row) => row.scheduled,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
];

function MessageCentre() {
  return (
    <div className="kit-management">
      <DataTableComponent
        title={"Message Center"}
        columns={Messagecolumns}
        data={tableData}
        selectedRows
      />
    </div>
  );
}

export default MessageCentre;
