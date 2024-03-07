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
import "./Products.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination/index";
import DataTableComponent from "../../components/DataTable";

export const  columns = [
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
    name: "Brand",
    selector: (row) => row.brand,
    
  },
  {
    name: "Contents",
    selector: (row) => row.contents,
    
  },

  {
    name: "LOT no.",
    selector: (row) => row.lotNumber,
    
  },
  {
    name: "Batch",
    selector: (row) => row.batch,
    
  },
  {
    name: "Expiry Date",
    selector: (row) => row.expiry,
    
  },
];
function Products() {
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
    <div className="product-management">
            <DataTableComponent
              title={"Product Management"}
              columns={columns}
              data={tableData}
              selectedRows
            />
    </div>
  );
}

export default Products;