import { Card } from "react-bootstrap";
import DataTable from "react-data-table-component";
import CustomPagination from "./Pagination";
import tableData from "../data";
import { useState } from "react";

const DataTableComponent = ({ title, data, columns, selectedRows }) => {
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
      <div style={{ padding: 10 }}>
        <h3  className="px-2 card_title">
          {title}
        </h3>

        <DataTable
          className="mt-3"
          columns={columns}
          pagination={true}
          paginationPerPage={itemsPerPage}
          paginationRowsPerPageOptions={[itemsPerPage]}
          paginationComponent={() => (
            <CustomPagination
              pages={totalPages}
              currentPage={currentPage}
              onPageChange={onPageChange}
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
            />
          )}
          customStyles={{
            table: {
              style: {
                border: "1px solid white",
              },
            },
            headCells: {
              style: {
                color: "#A8A8BD",
                fontSize: 16,
                // textAlign: "center",
              },
            },
            rows: {
              style: {
                borderBottom: "1px solid #C5C5D3",
                padding: 15,
              },
            },
          }}
          data={currentItems}
          selectableRows={selectedRows}
        />
      </div>
    </Card>
  );
};

export default DataTableComponent;
