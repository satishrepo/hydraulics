import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { DefaultPermission } from "../../../common/permission";
import roleService from "../../../services/roles-service";
import { useParams } from "react-router-dom";

const CreateRole = () => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState(DefaultPermission);
  const [status, setStatus] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getRoleData();
    }
  }, []);

  const getRoleData = () => {
    roleService
      .getSingleRole(id)
      .then((res) => {
        const { name, role_permission, status } = res.data[0];
        setRoleName(name);
        setStatus(status);
        setPermissions(JSON.parse(role_permission));
        console.log(JSON.parse(role_permission));
      })
      .catch(() => {});
  };

  const permissionHandler = (isChecked, module, permissionName) => {
    const copiedDefaultPermissions = { ...permissions };
    copiedDefaultPermissions.permissions.forEach((permission) => {
      if (permission.Module === module) {
        permission.Permissions.forEach((permission2) => {
          if (permission2.PermissionName === permissionName) {
            permission2.HasAccess = isChecked;
          }
        });
      }
    });
    setPermissions(copiedDefaultPermissions);
  };

  const onSubmitHandler = () => {
    if (!id) {
      roleService
        .addRole({
          name: roleName,
          status: status,
          role_permission: JSON.stringify(permissions),
        })
        .then(() => {
          history.push("/secure/roles/list");
        })
        .catch(() => console.error("Something went wrong"));
    } else {
      roleService
        .editRole(id, {
          name: roleName,
          status: status,
          role_permission: JSON.stringify(permissions),
        })
        .then(() => {
          redirectToRolesList();
        })
        .catch(() => console.error("Something went wrong"));
    }
  };

  const redirectToRolesList = () => {
    history.push("/secure/roles/list");
  };

  return (
    <div>
      <div className="testbenches-header-container">
        <div className="testbenches-header-content1">
          <span className="testbenches-heading mx-2">
            {id ? "Edit Role" : "Create Role"}
          </span>
          <NavLink to="/secure/roles/list">
            <span className="btn btn-light">
              <i className="fas fa-list-alt"></i> List Roles
            </span>
          </NavLink>
        </div>
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt; </span>
          </NavLink>
          <span>
            <i aria-hidden="true" className="fas fa-list-alt"></i> Roles &gt;{" "}
          </span>
          <span>
            <i className="fas fa-plus-square"></i> {id ? "Edit" : "Create"}
          </span>
        </div>
      </div>
      <div className="common_sec common_input">
        <div className="grid-container">
          <div className="grid" style={{ gridTemplateColumns: "auto" }}>
            <div className="grid-val w30">
              <div>Name</div>
              <div>
                <input
                  className="grid-input"
                  placeholder="Role FullName"
                  onChange={(e) => setRoleName(e.target.value)}
                  value={roleName}
                />
              </div>
            </div>
            <div>
              <div className="column-heading">
                <h3>Permissions</h3>
              </div>
              <div className="testbenches-table-content2">
                <table>
                  <thead className="theading">
                    <tr>
                      <td>MODULE & GROUPS</td>
                      <td colSpan="6">PERMISSIONS</td>
                    </tr>
                  </thead>
                  <tbody>
                    {permissions.permissions.map((permission, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{permission.Module}</td>
                          {permission.Permissions.map((permission2, index2) => {
                            return (
                              <td key={index2}>
                                <div className="d_Flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    style={{ width: "auto", height: "auto" }}
                                    onChange={(e) => {
                                      permissionHandler(
                                        e.target.checked,
                                        permission.Module,
                                        permission2.PermissionName
                                      );
                                    }}
                                    checked={permission2.HasAccess}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    {permission2.PermissionName}
                                  </label>
                                </div>
                              </td>
                            );
                          })}
                          {permission.Permissions.length === 3 && <td></td>}
                          {permission.Permissions.length === 2 && (
                            <>
                              <td></td>
                              <td></td>
                            </>
                          )}
                          {permission.Permissions.length === 1 && (
                            <>
                              <td></td>
                              <td></td>
                              <td></td>
                            </>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid-val w30">
              <div>Status</div>
              <div>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value={true}>ACTIVE</option>
                  <option value={false}>INACTIVE</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-dark my-3" onClick={onSubmitHandler}>
            {id ? "Update Role" : "Save Role"}
          </button>
          <button
            className="btn btn-warning my-3 mx-3"
            onClick={redirectToRolesList}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRole;
