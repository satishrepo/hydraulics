import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReportPdf from "../../../common/reportPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import * as moment from "moment";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import CsvDownload from "react-json-to-csv";
import reportService from "../../../services/report-service";

const Reports = () => {
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
      field: "Actuation Type",
      headerName: "Actuation Type",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Item Code",
      headerName: "Item Code",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Serial Number",
      headerName: "Serial Number",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Work Order Number",
      headerName: "Work Order No.",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Valve Series",
      headerName: "Valve Series",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "WO Qty",
      headerName: "WO Qty.",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Oil Temperature",
      headerName: "Oil Temperature",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Run",
      headerName: "Run",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "responseMessage",
      headerName: "Status",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div>
            <PDFDownloadLink
              document={<ReportPdf pdfData={[cellValues.row]} />}
              fileName={`PDFReport_${moment().format("DD-MM-YYYY_h:mm:ss")}`}
            >
              <button className="ml-2">
                <FileDownloadIcon />
              </button>
            </PDFDownloadLink>
          </div>
        );
      },
      sortable: false,
      disableColumnMenu: true,
    },
  ];
  const ODD_OPACITY = 0.2;
  const [filteredReportData, setFilteredReportData] = useState([]);
  const [initialReportData, setInitialReportData] = useState([]);
  const [excelReportData, setExcelReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(
    moment().subtract(1, "months").format("YYYY-MM-DD")
  );
  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [searchedText, setSearchedText] = useState("");
  const userPermissions = JSON.parse(localStorage.getItem("userPermission"));

  const mockData = [
    {
      "Actuation Type": "Mechanical",
      "Air Test Status": "NA",
      "Item Code": "456457433",
      "Kickout A1 Actual Value": "NA",
      "Kickout A1 Flow": "NA",
      "Kickout A1 Required Value": "NA",
      "Kickout A1 Status": "NA",
      "Kickout B1 Actual Value": "NA",
      "Kickout B1 Flow": "NA",
      "Kickout B1 Required Value": "NA",
      "Kickout B1 Status": "NA",
      "Leakage Test A1 Actual Value": "0.000",
      "Leakage Test A1 Flow": "0.000000",
      "Leakage Test A1 Required Value": "0.014",
      "Leakage Test A1 Status": "Pass",
      "Leakage Test B1 Actual Value": "0.000",
      "Leakage Test B1 Flow": "0.000000",
      "Leakage Test B1 Required Value": "0.014",
      "Leakage Test B1 Status": "Pass",
      "Leakage Test C1 Actual Value": "0.000",
      "Leakage Test C1 Flow": "0.000000",
      "Leakage Test C1 Required Value": "0.040",
      "Leakage Test C1 Status": "Pass",
      "No. of Spools": "5",
      "Oil Temperature": "38.0",
      "Operator Name": "SHYAS",
      "Overall Status": "PASS",
      "Pressure Drop Test A1-B1 Actual Value": "7.263",
      "Pressure Drop Test A1-B1 Flow": "34.690400",
      "Pressure Drop Test A1-B1 Required Value": "32.000",
      "Pressure Drop Test A1-B1 Status": "Pass",
      "Pressure Drop Test B1-A1 Actual Value": "22.799",
      "Pressure Drop Test B1-A1 Flow": "44.392800",
      "Pressure Drop Test B1-A1 Required Value": "37.000",
      "Pressure Drop Test B1-A1 Status": "Pass",
      "Pressure Holding Status": "NA",
      Run: "0",
      "Run Time": "NA",
      "Serial Number": "17",
      "Test Time": "25",
      "Valve Series": "D-DS130/8 T17 OVC P11",
      "WO Qty": "121",
      "Work Order Number": "24234234",
      responseMessage: "SUCCESS",
      responsecode: 200,
    },
    {
      "Actuation Type": "Thermal",
      "Air Test Status": "NA",
      "Item Code": "97865776",
      "Kickout A1 Actual Value": "NA",
      "Kickout A1 Flow": "NA",
      "Kickout A1 Required Value": "NA",
      "Kickout A1 Status": "NA",
      "Kickout B1 Actual Value": "NA",
      "Kickout B1 Flow": "NA",
      "Kickout B1 Required Value": "NA",
      "Kickout B1 Status": "NA",
      "Leakage Test A1 Actual Value": "0.000",
      "Leakage Test A1 Flow": "1.000000",
      "Leakage Test A1 Required Value": "0.021",
      "Leakage Test A1 Status": "Pass",
      "Leakage Test B1 Actual Value": "0.000",
      "Leakage Test B1 Flow": "0.000000",
      "Leakage Test B1 Required Value": "0.014",
      "Leakage Test B1 Status": "Pass",
      "Leakage Test C1 Actual Value": "0.000",
      "Leakage Test C1 Flow": "0.000000",
      "Leakage Test C1 Required Value": "0.040",
      "Leakage Test C1 Status": "Pass",
      "No. of Spools": "8",
      "Oil Temperature": "40.0",
      "Operator Name": "SHYAS",
      "Overall Status": "PASS",
      "Pressure Drop Test A1-B1 Actual Value": "2.263",
      "Pressure Drop Test A1-B1 Flow": "44.690400",
      "Pressure Drop Test A1-B1 Required Value": "43.000",
      "Pressure Drop Test A1-B1 Status": "Pass",
      "Pressure Drop Test B1-A1 Actual Value": "12.799",
      "Pressure Drop Test B1-A1 Flow": "44.392800",
      "Pressure Drop Test B1-A1 Required Value": "27.000",
      "Pressure Drop Test B1-A1 Status": "Pass",
      "Pressure Holding Status": "NA",
      Run: "0",
      "Run Time": "NA",
      "Serial Number": "22",
      "Test Time": "25",
      "Valve Series": "D-DS130/8 T17 OVC P11",
      "WO Qty": "021",
      "Work Order Number": "53903669",
      responseMessage: "SUCCESS",
      responsecode: 200,
    },
    {
      "Actuation Type": "Supercoiled",
      "Air Test Status": "NA",
      "Item Code": "6867574",
      "Kickout A1 Actual Value": "NA",
      "Kickout A1 Flow": "NA",
      "Kickout A1 Required Value": "NA",
      "Kickout A1 Status": "NA",
      "Kickout B1 Actual Value": "NA",
      "Kickout B1 Flow": "NA",
      "Kickout B1 Required Value": "NA",
      "Kickout B1 Status": "NA",
      "Leakage Test A1 Actual Value": "0.000",
      "Leakage Test A1 Flow": "0.000000",
      "Leakage Test A1 Required Value": "1.114",
      "Leakage Test A1 Status": "Pass",
      "Leakage Test B1 Actual Value": "0.000",
      "Leakage Test B1 Flow": "0.000000",
      "Leakage Test B1 Required Value": "0.014",
      "Leakage Test B1 Status": "Pass",
      "Leakage Test C1 Actual Value": "0.000",
      "Leakage Test C1 Flow": "0.000000",
      "Leakage Test C1 Required Value": "0.040",
      "Leakage Test C1 Status": "Pass",
      "No. of Spools": "8",
      "Oil Temperature": "40.0",
      "Operator Name": "SHYAS",
      "Overall Status": "PASS",
      "Pressure Drop Test A1-B1 Actual Value": "2.232",
      "Pressure Drop Test A1-B1 Flow": "43.690400",
      "Pressure Drop Test A1-B1 Required Value": "34.000",
      "Pressure Drop Test A1-B1 Status": "Pass",
      "Pressure Drop Test B1-A1 Actual Value": "15.232",
      "Pressure Drop Test B1-A1 Flow": "44.392800",
      "Pressure Drop Test B1-A1 Required Value": "27.000",
      "Pressure Drop Test B1-A1 Status": "Pass",
      "Pressure Holding Status": "NA",
      Run: "0",
      "Run Time": "NA",
      "Serial Number": "22",
      "Test Time": "25",
      "Valve Series": "D-DS130/8 T17 OVC P11",
      "WO Qty": "021",
      "Work Order Number": "53903669",
      responseMessage: "SUCCESS",
      responsecode: 200,
    },
    {
      "Actuation Type": "Linear",
      "Air Test Status": "NA",
      "Item Code": "87654432",
      "Kickout A1 Actual Value": "NA",
      "Kickout A1 Flow": "NA",
      "Kickout A1 Required Value": "NA",
      "Kickout A1 Status": "NA",
      "Kickout B1 Actual Value": "NA",
      "Kickout B1 Flow": "NA",
      "Kickout B1 Required Value": "NA",
      "Kickout B1 Status": "NA",
      "Leakage Test A1 Actual Value": "0.000",
      "Leakage Test A1 Flow": "0.000000",
      "Leakage Test A1 Required Value": "0.014",
      "Leakage Test A1 Status": "Pass",
      "Leakage Test B1 Actual Value": "0.000",
      "Leakage Test B1 Flow": "0.000000",
      "Leakage Test B1 Required Value": "0.014",
      "Leakage Test B1 Status": "Pass",
      "Leakage Test C1 Actual Value": "0.000",
      "Leakage Test C1 Flow": "0.000000",
      "Leakage Test C1 Required Value": "0.040",
      "Leakage Test C1 Status": "Pass",
      "No. of Spools": "8",
      "Oil Temperature": "40.0",
      "Operator Name": "SHYAS",
      "Overall Status": "PASS",
      "Pressure Drop Test A1-B1 Actual Value": "5.263",
      "Pressure Drop Test A1-B1 Flow": "44.690400",
      "Pressure Drop Test A1-B1 Required Value": "27.000",
      "Pressure Drop Test A1-B1 Status": "Pass",
      "Pressure Drop Test B1-A1 Actual Value": "12.799",
      "Pressure Drop Test B1-A1 Flow": "44.392800",
      "Pressure Drop Test B1-A1 Required Value": "27.000",
      "Pressure Drop Test B1-A1 Status": "Pass",
      "Pressure Holding Status": "NA",
      Run: "0",
      "Run Time": "NA",
      "Serial Number": "28",
      "Test Time": "25",
      "Valve Series": "D-DS130/8 T17 OVC P11",
      "WO Qty": "021",
      "Work Order Number": "53903669",
      responseMessage: "SUCCESS",
      responsecode: 200,
    },
  ];

  const handleGetRowId = (e) => {
    return e["Item Code"];
  };

  useEffect(() => {
    setLoading(true);
    const payload = {
      workorderNo: null,
      itemCode: null,
      fromDate,
      toDate,
    };
    reportService
      .getReportData(payload)
      .then((response) => {
        let responseData = [...response.data, ...mockData];

        const modifiedReportData = responseData.map((data) => {
          return {
            ...data,
            testData: [
              {
                testName: "Pressure Drop Test A1 B1",
                requiredValue: data["Pressure Drop Test A1-B1 Required Value"],
                actualValue: data["Pressure Drop Test A1-B1 Actual Value"],
                actualFlow: data["Pressure Drop Test A1-B1 Flow"],
                testStatus: data["Pressure Drop Test A1-B1 Status"],
              },
              {
                testName: "Pressure Drop Test B1 A1",
                requiredValue: data["Pressure Drop Test B1-A1 Required Value"],
                actualValue: data["Pressure Drop Test B1-A1 Actual Value"],
                actualFlow: data["Pressure Drop Test B1-A1 Flow"],
                testStatus: data["Pressure Drop Test B1-A1 Status"],
              },
              {
                testName: "Leakage Test A1",
                requiredValue: data["Leakage Test A1 Required Value"],
                actualValue: data["Leakage Test A1 Actual Value"],
                actualFlow: data["Leakage Test A1 Flow"],
                testStatus: data["Leakage Test A1 Status"],
              },
              {
                testName: "Leakage Test B1",
                requiredValue: data["Leakage Test B1 Required Value"],
                actualValue: data["Leakage Test B1 Actual Value"],
                actualFlow: data["Leakage Test B1 Flow"],
                testStatus: data["Leakage Test B1 Status"],
              },
              {
                testName: "Leakage Test C1",
                requiredValue: data["Leakage Test C1 Required Value"],
                actualValue: data["Leakage Test C1 Actual Value"],
                actualFlow: data["Leakage Test C1 Flow"],
                testStatus: data["Leakage Test C1 Status"],
              },
              {
                testName: "Kickout A1",
                requiredValue: data["Kickout A1 Required Value"],
                actualValue: data["Kickout A1 Actual Value"],
                actualFlow: data["Kickout A1 Flow"],
                testStatus: data["Kickout A1 Status"],
              },
              {
                testName: "Kickout B1",
                requiredValue: data["Kickout B1 Required Value"],
                actualValue: data["Kickout B1 Actual Value"],
                actualFlow: data["Kickout B1 Flow"],
                testStatus: data["Kickout B1 Status"],
              },
            ],
          };
        });
        setFilteredReportData(modifiedReportData);
        setInitialReportData(modifiedReportData);
        setExcelReportData(responseData);
        setLoading(false);
      })
      .catch(() => {
        console.error("Something went wrong..");
        setLoading(false);
      });
  }, [fromDate, toDate]);

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  }));

  const filterReportData = (searchItem) => {
    searchItem = searchItem.toLowerCase();

    const filteredData = searchItem.length
      ? initialReportData.filter(
          (x) =>
            x["Actuation Type"].toLowerCase().includes(searchItem) ||
            x["Item Code"].toLowerCase().includes(searchItem) ||
            x["Serial Number"].toLowerCase().includes(searchItem) ||
            x["Work Order Number"].toLowerCase().includes(searchItem) ||
            x["Valve Series"].toLowerCase().includes(searchItem) ||
            x["WO Qty"].toLowerCase().includes(searchItem) ||
            x["Oil Temperature"].toLowerCase().includes(searchItem) ||
            x["Run"].toLowerCase().includes(searchItem) ||
            x["responseMessage"].toLowerCase().includes(searchItem)
        )
      : initialReportData;

    setFilteredReportData([...filteredData]);
  };

  const QuickSearchToolbar = () => {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter
          autoFocus
          value={searchedText}
          onChange={(e) => {
            setSearchedText(e.target.value);
            filterReportData(e.target.value);
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <div
        className="testbenches-header-container"
        style={{ marginTop: "30px" }}
      >
        <div className="testbenches-header-content1 mx-2">
          <span className="testbenches-heading">Manage Reports</span>

          {userPermissions &&
            userPermissions["ROLE & PERMISSIONS"]?.permissions
              ?.ReportExportPdf && (
              <PDFDownloadLink
                document={<ReportPdf pdfData={filteredReportData} />}
                fileName={`Report_${new Date()}`}
              >
                <button className="btn btn-light" disabled={loading}>
                  <i className="fas fa-cloud-upload-alt"></i> Export Pdf
                </button>
              </PDFDownloadLink>
            )}

          {userPermissions &&
            userPermissions["ROLE & PERMISSIONS"]?.permissions
              ?.ReportExportExcel && (
              <CsvDownload
                data={excelReportData}
                filename={`CSVReport_${moment().format(
                  "DD-MM-YYYY_h:mm:ss"
                )}.csv`}
                style={{
                  border: "none",
                  marginLeft: "15px",
                  fontWeight: 500,
                }}
              >
                <button
                  className="btn btn-light"
                  style={{ marginLeft: "0" }}
                  disabled={loading}
                >
                  <i className="fas fa-cloud-upload-alt"></i> Export CSV
                </button>
              </CsvDownload>
            )}

          <div style={{ display: "flex", marginLeft: "15px" }}>
            <div className="card_filter">
              <h5>From Date</h5>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div className="card_filter">
              <h5>To Date</h5>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt; </span>
          </NavLink>
          <span>
            <i aria-hidden="true" className="fas fa-list-alt"></i> Reports
          </span>
        </div>
      </div>

      <div className="datagrid-container">
        <StripedDataGrid
          columns={columns}
          components={{ Toolbar: QuickSearchToolbar }}
          rows={filteredReportData}
          getRowId={(e) => handleGetRowId(e)}
          autoHeight
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          rowsPerPageOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              pageSize: 5,
            },
          }}
          disableSelectionOnClick
          loading={loading}
        />
      </div>
    </>
  );
};

export default Reports;
