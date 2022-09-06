import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CustomDataGrid } from "../../../shared/components/DataGrid";
import roleService from "../../../services/roles-service";
import { getPermissionName } from "../../../common/permission";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import * as moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import store from "../../../store";
import * as _ from "lodash";

const Roles = () => {
  const [rolesList, setRolesList] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const userPermissions = JSON.parse(localStorage.getItem("userPermission"));

  useEffect(() => {
    getRolesList();
  }, []);

  const getRolesList = () => {
    setLoading(true);
    roleService
      .getRoles()
      .then((res) => {
        const sortedData = _.orderBy(
          res.data,
          [(obj) => new Date(obj.created_on)],
          ["desc"]
        );

        setRolesList(sortedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleGetRowId = (e) => {
    return e.name;
  };

  const deleteRoleHandler = (roleId) => {
    roleService
      .deleteRole(roleId)
      .then(() => {
        const filteredRoles = rolesList.filter((role) => role.id !== roleId);
        setRolesList([...filteredRoles]);
      })
      .catch(() => {});
  };

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
      field: "name",
      headerName: "Name",
      sortable: false,
      disableColumnMenu: true,
      width: 200,
    },
    {
      field: "role_permission",
      headerName: "Permissions",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        const permissions = getPermissionName(cellValues.row.role_permission);
        return (
          <Tooltip title={permissions}>
            <span>
              {permissions.length > 50
                ? `${permissions.slice(0, 50)}...`
                : permissions}
            </span>
          </Tooltip>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (cellValues) => {
        return cellValues.row.status ? "Active" : "Inactive";
      },
      sortable: false,
      disableColumnMenu: true,
    },

    {
      field: "last_updated_on",
      headerName: "Last Updated",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return moment(cellValues.row.last_updated_on).format("LL");
      },
      width: 200,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (cellValues) => {
        return (
          <div>
            {userPermissions?.ROLE?.permissions?.EditRole && (
              <button
                onClick={() =>
                  history.push(`/secure/roles/edit/${cellValues.row.id}`)
                }
              >
                <EditIcon></EditIcon>
              </button>
            )}

            {userPermissions?.ROLE?.permissions?.DeleteRole && (
              <button
                className=" ml-2"
                onClick={() => deleteRoleHandler(cellValues.row.id)}
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

  return (
    <div>
      <div
        className="testbenches-header-container"
        style={{ marginTop: "30px" }}
      >
        {userPermissions?.ROLE?.permissions?.CreateRole && (
          <div className="testbenches-header-content1">
            <span className="testbenches-heading mx-2">Manage Roles</span>

            <NavLink to="/secure/roles/create">
              <span className="btn btn-light">
                <i className="fas fa-plus-square"></i> New Role
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
            <i aria-hidden="true" className="fas fa-list-alt"></i> Roles
          </span>
        </div>
      </div>
      <div className="datagrid-container">
        <CustomDataGrid
          columnData={columns}
          rowData={rolesList}
          handleGetRowId={handleGetRowId}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Roles;
