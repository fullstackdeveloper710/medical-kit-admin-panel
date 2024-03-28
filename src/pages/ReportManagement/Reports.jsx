import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchReportsListingData } from "../../redux/slice/ReportsListingSlice";
import Loader from "../../components/Common/Loader";




function Reports() {
  const dispatch = useDispatch();
  const { status, data: ReportsManagementData, error } = useSelector(
    (state) => state.REPORTSLISTING
  );

  useEffect(() => {
    dispatch(fetchReportsListingData());
  }, [dispatch]);

  console.log("ReportsManagementData:", ReportsManagementData);
  
  const  reportscolumns = [
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
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
      
    // },
    
  ];
  
  const [content, setContent] = useState(``);
  const [directorName, setDirectorName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

 


  if (status === "loading") {
    return (
      <div>
        <Loader/>
      </div>
    );
  }

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
            <Card style={{ border: "none", }}>
              <h3 className="listing text-center">Report Groups</h3>
             

              <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error fetching data.</p>}
      {status === "idle" && ReportsManagementData && ReportsManagementData.length > 0 && (
        <div>
          {ReportsManagementData.map((group) => (
            <div className="title-box mb-2" key={group._id}>
              <div className="d-flex justify-content-between px-3 pb-2">
                <p className="mb-0">{group.group_name}</p>
              </div>
              <div className="person-box">
                <b>Directors</b>
                <p className="mt-3 border-top border-bottom py-3">
                  {group.group_member.map((member) => (
                    <span key={member._id}>{member.full_name}, </span>
                  ))}
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
          ))}
        </div>
      )}
    </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Reports;
