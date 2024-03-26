import { Badge, Card, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import CustomPagination from "./Pagination";
import { useState } from "react";

const CardWithTable = () => {
  let columnStyle = {
    fontSize: 16,
    color: "#16161D",
    fontWeight: "400px",
  };
  const columns = [
    {
      name: "Distibuter",
      selector: (row) => row.distributer,
      style: columnStyle,
    },
    {
      name: "Client Business Name",
      selector: (row) => row.clientBussinessName,
      style: columnStyle,
    },
    {
      name: "Kit Status",
      selector: (row) => (
        <div>
          <Badge className="m-1" style={{ borderRadius: 50 }} bg="success">
            {row.kitStatus}
          </Badge>

          <Badge className="m-1" style={{ borderRadius: 50 }} bg="warning">
            {5}
          </Badge>
          <Badge className="m-1" style={{ borderRadius: 50 }} bg="danger">
            {6}
          </Badge>
        </div>
      ),
      style: columnStyle,
    },
    {
      name: "Users",
      selector: (row) => row.users,
      style: columnStyle,
    },
    {
      name: "First Aiders",
      selector: (row) => (
        <div>
          <Badge className="m-1" style={{ borderRadius: 50 }} bg="success">
            {row.kitStatus}
          </Badge>

          <Badge className="m-1" style={{ borderRadius: 50 }} bg="warning">
            {5}
          </Badge>
          <Badge className="m-1" style={{ borderRadius: 50 }} bg="danger">
            {6}
          </Badge>
        </div>
      ),
      style: columnStyle,
    },
    {
      name: "Last Registration",
      selector: (row) => row.lastRegistration,
      style: columnStyle,
    },
    {
      name: "Risk Assessment",
      selector: (row) => (
        <Badge
          style={{ borderRadius: 20, padding: 10 }}
          bg={row.riskAssessment === "Pending" ? "warning" : "success"}
        >
          {row.riskAssessment}
        </Badge>
      ),
      style: columnStyle,
      checked: false,
    },
  ];

  const data = [
    {
      id: 1,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Complete",
    },
    {
      id: 2,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Complete",
    },
    {
      id: 3,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Pending",
    },
    {
      id: 4,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Pending",
    },
    {
      id: 5,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Complete",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
    <Card style={{ border: "none" }}>
      <div style={{ padding: 8 }}>
        <h3 style={{ fontWeight: "700", fontSize: "24px" }} className="px-2">
          Registered Company Details
        </h3>

        <DataTable
          className="mt-3 registered_table"
          columns={columns}
          pagination={true}
          paginationComponent={() => (
            <CustomPagination
              pages={totalPages}
              currentPage={currentPage}
              onPageChange={onPageChange}
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
            />
          )}
          //   noHeader={true}
          customStyles={{
            headCells: {
              style: {
                color: "#A8A8BD",
                fontSize: 16,
              },
            },
            rows: {
              style: {
                borderBottom: "1px solid #C5C5D3",
                padding: 15,
              },
            },
          }}
          data={data}
        />
      </div>
    </Card>
  );
};

export default CardWithTable;
