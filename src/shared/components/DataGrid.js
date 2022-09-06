import { DataGrid, gridClasses } from "@mui/x-data-grid";
import React from "react";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";

export const CustomDataGrid = ({
  columnData,
  rowData,
  handleGetRowId,
  loading,
}) => {
  const ODD_OPACITY = 0.2;

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

  const QuickSearchToolbar = () => {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter />
      </Box>
    );
  };

  return (
    <StripedDataGrid
      columns={columnData}
      components={{ Toolbar: QuickSearchToolbar }}
      rows={rowData}
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
  );
};
