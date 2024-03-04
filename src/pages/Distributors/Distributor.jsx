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
