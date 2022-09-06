import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./testbenches.css";
import testbenchService from "../../../services/testbench-service";
import { CustomDataGrid } from "../../../shared/components/DataGrid";
import * as moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import * as _ from "lodash";

const Testbenches = () => {
  const [testbenchList, setTestBenchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const userPermissions = JSON.parse(localStorage.getItem("userPermission"));

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
      field: "machine_id",
      headerName: "Name",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      renderCell: () => {
        return "Active";
      },
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "created_on",
      headerName: "Created At",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return moment(cellValues.row.created_on).format("LL");
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
      renderCell: () => {
        return (
          <div>
            {userPermissions?.TESTBENCH?.permissions?.DeleteTestbench && (
              <button className=" ml-2">
                <DeleteIcon></DeleteIcon>
              </button>
            )}
          </div>
        );
      },
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  useEffect(() => {
    setLoading(true);
    testbenchService
      .getAllTestbench()
      .then((res) => {
        const sortedData = _.orderBy(
          res.data,
          [(obj) => new Date(obj.created_on)],
          ["desc"]
        );

        setTestBenchList(sortedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleGetRowId = (e) => {
    return e.machine_id;
  };

  return (
    <div>
      <div
        className="testbenches-header-container"
        style={{ marginTop: "30px" }}
      >
        <div className="testbenches-header-content1">
          <div>
            <span className="testbenches-heading mx-2">Manage TestBenches</span>
          </div>
        </div>
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt;</span>
          </NavLink>
          <i className="fas fa-list-alt mx-2"></i>
          <span>TestBenches </span>
        </div>
      </div>

      <div className="datagrid-container">
        <CustomDataGrid
          columnData={columns}
          rowData={testbenchList}
          handleGetRowId={handleGetRowId}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Testbenches;
