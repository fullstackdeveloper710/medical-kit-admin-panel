// Kits.js

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
import "./Kits.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination";
import DataTableComponent from "../../components/DataTable";

export const KitColumns = [
  {
    name: "Product",
    selector: (row) => (
      <div className="products-wrapper">
        <img
          src={products}
          alt={row.product}
          className="products-image"
        />
        <span>{row.product}</span>
      </div>
    )
  },
  {
    name: "Registered To",
    selector: (row) => row.registeredTo,
  },
  {
    name: "Industry",
    selector: (row) => row.industry,
  },

  {
    name: "Location",
    selector: (row) => row.location,
  },

  {
    name: "Area ",
    selector: (row) => row.area,
  },
  {
    name: "Status ",
    selector: (row) =>
      row.actions.map((action, index) => (
        <span key={index} className={`action ${action.type}`}>
          {action.name}
        </span>
      )),
  },
];

function Kits() {
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
  return (
    <div className="kit-management">
      <DataTableComponent
        title={"Registered Kit Management"}
        columns={KitColumns}
        data={tableData}
        selectedRows
      />
    </div>
  );
}

export default Kits;
