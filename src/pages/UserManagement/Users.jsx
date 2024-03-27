import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTableComponent from "../../components/DataTable";
import { fetchUserManagementData } from "../../redux/slice/UserManagementSlice";
import icon from "../../Assets/Profile/profileicon/Icon.png";
import Loader from "../../components/Common/Loader";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Users() {
  const dispatch = useDispatch();
  const { status, UserManagementData } = useSelector(
    (state) => state.USERMANAGEMENT
  );
  console.log(UserManagementData, "UserManagementDatasadsadasdfds");

  useEffect(() => {
    dispatch(fetchUserManagementData());
  }, [dispatch]);

  const usercolumns = [
    {
      name: "Last Name",
      selector: (row) => (
        <div className="products-wrapper">
          <img src={icon} alt={row.lastName} className="products-image" />
          <span>{row.last_name}</span>
        </div>
      ),
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
    },
    {
      name: "Job Title",
      selector: (row) => row.assigned_role,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Area",
      selector: (row) => row.company_name,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex">
          <NavLink
            className={"btn btn-sm btn-info me-2"}
            to={`/update-user/${row._id}`}
          >
            <FaEdit />
          </NavLink>
          <NavLink className={"btn btn-sm btn-danger"}>
            <FaRegTrashAlt />
          </NavLink>
        </div>
      ),
    },
  ];

  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const userData = UserManagementData?.data?.Users || [];

  return (
    <div className="kit-management">
      <DataTableComponent
        title={"User Management"}
        columns={usercolumns}
        data={userData}
        selectedRows
      />
    </div>
  );
}

export default Users;
