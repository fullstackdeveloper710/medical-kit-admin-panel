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
import "./MessageCentre.css";
import tableData from "../../data";
import { useDispatch, useSelector } from "react-redux";

import DataTableComponent from "../../components/DataTable";
import { columns } from "../Products/Products";
import Loader from "../../components/Common/Loader";
import { fetchMessageCentreData } from "../../redux/slice/MessageCentreSlice";

function MessageCentre() {
  const dispatch = useDispatch();

  const { status, MessageCentreData } = useSelector(
    (state) => state.MESSAGECENTRE
  );
  console.log(MessageCentreData, "MessageCentreData");
  useEffect(() => {
    dispatch(fetchMessageCentreData());
  }, [dispatch]);
  const Messagecolumns = [
    {
      name: "Subject",
      selector: (row) => row.title,
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
      selector: (row) => new Date(row.publish_on).toLocaleDateString(),
    },
    
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];
  if (status === "loading") {
    return <div><Loader/></div>;
  }

  const userData = MessageCentreData?.data || [];
  console.log(userData,"show data here ")
  return (
    <div className="kit-management">
      <DataTableComponent
        title={"Message Center"}
        columns={Messagecolumns}
        data={userData}
        selectedRows
      />
    </div>
  );
}

export default MessageCentre;
