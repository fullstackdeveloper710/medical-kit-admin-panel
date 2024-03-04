import { Card } from "react-bootstrap";
import DataTable from "react-data-table-component";
import CustomPagination from "./Pagination";
const DataTableComponent = ({ title, data, columns, selectedRows }) => {
  return (
    <Card style={{border :"none"}}>
      <div style={{ padding: 10 }}>
        <h3 style={{ fontWeight: "700px", fontSize: "24px" }} className="px-2">
          {title}
        </h3>
        <DataTable
          className="mt-3"
          columns={columns}
          pagination={true}
          paginationComponent={() => <CustomPagination />}
          //   noHeader={true}
          customStyles={{
            table:{
                style: {
                    border:"1px solid white"
                }
            },
            headCells: {
              style: {
                color: "#A8A8BD",
                fontSize: 16,
                // textAlign : "center"
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
          selectableRows={selectedRows}
        />
      </div>
    </Card>
  );
};

export default DataTableComponent;
