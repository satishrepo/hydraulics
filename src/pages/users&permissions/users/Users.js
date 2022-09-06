import React, { Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CustomDataGrid } from "../../../shared/components/DataGrid";
import authService from "../../../services/auth.service";
import DeleteIcon from "@mui/icons-material/Delete";
import * as moment from "moment";
import store from "../../../store";
import * as _ from "lodash";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      field: "",
      headerName: "S.No.",
      renderCell: (cellValues) => {
        return cellValues.api.getSortedRowIds().indexOf(cellValues.id) + 1;
      },
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "username",
      headerName: "User",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "role_name",
      headerName: "Roles",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return cellValues.row.status ? "Active" : "Inactive";
      },
    },
    {
      field: "last_updated_on",
      headerName: "Last Updated",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return moment(cellValues.row.last_updated_on).format("LL");
      },
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (cellValues) => {
        return (
          <div>
            {userPermissions?.USER.permissions.DeleteUser && (
              <button
                className=" ml-2"
                onClick={() => deleteUserHandler(cellValues.row.id)}
              >
                <DeleteIcon></DeleteIcon>
              </button>
            )}
          </div>
        );
      },
      sortable: false,
      disableColumnMenu: true,
      hide: !store?.getState()?.auth?.user?.isAdmin,
    },
  ];
  const [usersList, setUsersList] = useState([]);
  let userPermissions = JSON.parse(localStorage.getItem("userPermission"));

  useEffect(() => {
    setLoading(true);
    authService
      .getUsers()
      .then((res) => {
        const filteredUsers = res.data.filter((user) => !user.isAdmin);

        const sortedData = _.orderBy(
          filteredUsers,
          [(obj) => new Date(obj.created_on)],
          ["desc"]
        );

        setUsersList(sortedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleGetRowId = (e) => {
    return e.id;
  };

  const deleteUserHandler = (userId) => {
    authService
      .deleteUser(userId)
      .then(() => {
        const filteredUsersList = usersList.filter(
          (user) => user.id !== userId
        );
        setUsersList([...filteredUsersList]);
      })
      .catch(() => {});
  };

  return (
    <div>
      <div
        className="testbenches-header-container"
        style={{ marginTop: "30px" }}
      >
        {userPermissions?.USER.permissions.CreateUser && (
          <div className="testbenches-header-content1">
            <span className="testbenches-heading mx-2">Manage Users</span>

            <NavLink to="/secure/users/create">
              <span className="btn btn-light">
                <i className="fas fa-plus-square"></i> New User
              </span>
            </NavLink>
          </div>
        )}
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt; </span>
          </NavLink>

          <span>
            <i className="fas fa-list-alt"></i> Users
          </span>
        </div>
      </div>
      <div className="datagrid-container">
        <CustomDataGrid
          columnData={columns}
          rowData={usersList}
          handleGetRowId={handleGetRowId}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Users;
