import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "./Notification.css";
import tableData from "../../data";
import profilePic from "../../Assets/Profile/profile.png";
import CustomPagination from "../../components/Common/Pagination";

function Notifications() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    <div className="product-management">
      <Container>
        <Row className="align-items-left">
          <Col>
            <h3 className="listing">Notifications(3 Unread) </h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table striped bordered hover className="table">
              <tbody>
                {currentItems.map((row) => (
                  <tr key={row.id}>
                    <td>                                                                                     
                      <div className="notification-content">
                        <div className="notification-profile">
                          <input type="checkbox" />
                          <img
                            src={profilePic}
                            alt="Profile Pic"
                            className="profile-pic"
                          />
                        </div>
                        <div className="notification-description">
                          <h5>{row.notification}</h5>
                          <p className="notification-text">
                            {row.notificationTime}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <CustomPagination
          pages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onNextPage={onNextPage} 
          onPreviousPage={onPreviousPage} 
        />
      </Container>
    </div>
  );
}

export default Notifications;
