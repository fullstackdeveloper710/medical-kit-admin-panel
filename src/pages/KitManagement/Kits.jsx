// Kits.js

import React, { useEffect, useState } from "react";
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
import { fetchKitssManagementData } from "../../redux/slice/KitManagementSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Common/Loader";


function Kits() {
  const dispatch = useDispatch();
  const { status, KitManagementData } = useSelector(
    (state) => state.KITMANAGEMENT
  );
  console.log(KitManagementData,"KITMANAGEMENT")

  useEffect(() => {
    dispatch(fetchKitssManagementData());
  }, [dispatch]);


  const KitColumns = [
    {
      name: "Product",
      selector: (row) => (
        <div className="products-wrapper">
          <img
            src={products}
            alt={row.product_name}
            className="products-image"
          />
          <span>{row.product_name}</span>
        </div>
      )
    },
    {
      name: "Registered To",
      selector: (row) => row.company_name,
    },
    {
      name: "Industry",
      selector: (row) => row.industry,
    },
  
    {
      name: "Location",
      selector: (row) => row.location_name,
    },
  
    {
      name: "Area ",
      selector: (row) => row.area,
    },
    // {
    //   name: "Status ",
    //   selector: (row) =>
    //     row.actions.map((action, index) => (
    //       <span key={index} className={`action ${action.type}`}>
    //         {action.name}
    //       </span>
    //     )),
    // },
    // actions: [{ name: "Complaint", type: "primary" }],

    {
      name: "Status",
      selector: (row) =><span className={row.status==="Compliant"?"tertiary":"primary"}> {row.status}</span>
   
    },
  ];
  if (status === "loading") {
    return (
      <div>
        <Loader/>
      </div>
    );
  }

  const userData = KitManagementData?.data?.kits || [];
  
  return (
    <div className="kit-management">
      <DataTableComponent
        title={"Registered Kit Management"}
        columns={KitColumns}
        data={userData}
        selectedRows
      />
    </div>
  );
}

export default Kits;
