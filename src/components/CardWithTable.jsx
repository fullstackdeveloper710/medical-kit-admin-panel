import { Badge, Card, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import CustomPagination from "./Pagination";

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
      id: 1,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Pending",
    },
    {
      id: 1,
      distributer: "Beetlejuice",
      clientBussinessName: "1988",
      kitStatus: "6",
      users: "47",
      firstAiders: "12",
      lastRegistration: "14 January 2024",
      riskAssessment: "Pending",
    },
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
  ];

  return (
    <Card style={{border:'none'}}>
      <div style={{ padding: 15 }}>
        <h3 style={{ fontWeight: "700px", fontSize: "24px" }} className="px-2">
          Registered Company Details
        </h3>

        <DataTable
          className="mt-3"
          columns={columns}
          pagination={true}
          paginationComponent={() => (
            <CustomPagination />
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
