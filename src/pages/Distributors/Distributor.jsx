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
import "./Distributor.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination";
import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";


export const  distColumns = [
  
  {
    name: "Company Name",
    selector: (row) => row.companyName,
    
  },
  {
    name: "Country",
    selector: (row) => row.country,
    
  },

  {
    name: "County",
    selector: (row) => row.county,
    
  },
  {
    name: "Super Admin",
    selector: (row) => row.superAdmin,
    
  },
  {
    name: "Approver",
    selector: (row) => row.approver,
    
  },
];

function Distributor() {
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
              title={"Distributor Management"}
              columns={distColumns}
              data={tableData}
              selectedRows
            />
         
    </div>
  );
}

export default Distributor;
