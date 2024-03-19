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
import "./Distributor.css";
import tableData from "../../data";
import products from "../../Assets/images/product.png";
import CustomPagination from "../../components/Common/Pagination";
import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";

import icon from "../../Assets/Profile/profileicon/Icon.png";
import { fetchDistributorManagementData } from "../../redux/slice/DistributionRegistrationSlice";
import Loader from "../../components/Common/Loader";



function Distributor() {


  const dispatch = useDispatch();
  const { status, DistributorRegisaterData } = useSelector((state) => state.DISTRIBUTORMANAGEMENT);
  useEffect(() => {
    dispatch(fetchDistributorManagementData());
  }, [dispatch]);


   const distColumns = [
    {
      name: "Company Name",
      selector: (row) => (
        <div className="products-wrapper">
          <img src={icon} alt={row.distributor_name} className="products-image" />
          <span>{row.distributor_name}</span>
        </div>
      ),
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
      selector: (row) => row.role,
    },
    {
      name: "Approver",
      selector: (row) => row.alternate_distributor_name,
    },
  ];
  if (status === "loading") {
    return <div><Loader/></div>;
  }

  const userData = DistributorRegisaterData?.data?.distributors || [];
  
  console.log(userData,"USERDATA")

  return (
    <div className="product-management">
      <DataTableComponent
        title={"Distributor Management"}
        columns={distColumns}
        data={userData}
        selectedRows
      />
    </div>
  );
}

export default Distributor;
