import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CustomDataGrid } from "../../../shared/components/DataGrid";
import recipeService from "../../../services/recipe-service";
import * as moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import * as _ from "lodash";

const Recipes = () => {
  const history = useHistory();
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
      field: "item_code",
      headerName: "Item Code",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "valve_type",
      headerName: "Valve Type",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "last_updated_on",
      headerName: "Updated",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (cellValues) => {
        return moment(cellValues.row.last_updated_on).format("LL");
      },
    },
    {
      field: "created_on",
      headerName: "Created At",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (cellValues) => {
        return moment(cellValues.row.created_on).format("LL");
      },
    },
    {
      field: "updated_by",
      headerName: "Last Updated By",
      disableColumnMenu: true,
      flex: 1,
      renderCell: (cellValues) => {
        return cellValues.row.updated_by;
      },
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (cellValues) => {
        return (
          <div>
            {userPermissions?.RECIPE?.permissions?.EditRecipe && (
              <button
                onClick={() =>
                  history.push(
                    `/secure/recipes/edit/${cellValues.row.item_code}`
                  )
                }
              >
                <EditIcon></EditIcon>
              </button>
            )}
          </div>
        );
      },
      sortable: false,
      disableColumnMenu: true,
    },
  ];
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    recipeService
      .getAllRecipes()
      .then((response) => {
        const mappedData = response.data?.map((recipe) => {
          return {
            item_code: recipe?.item_code,
            valve_type: recipe?.basic_details?.Valve_Type,
            pressure: recipe?.basic_details?.Pressure,
            created_on: recipe?.created_on,
            last_updated_on: recipe?.last_updated_on,
            updated_by: recipe?.updated_by,
          };
        });
        const sortedData = _.orderBy(
          mappedData,
          [(obj) => new Date(obj.created_on)],
          ["desc"]
        );

        setRecipes(sortedData);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        console.log("Something went wrong");
      });
  }, []);

  const handleGetRowId = (e) => {
    return e.item_code;
  };

  return (
    <div>
      <div
        className="testbenches-header-container"
        style={{ marginTop: "30px" }}
      >
        {userPermissions?.RECIPE?.permissions?.CreateRecipe && (
          <div className="testbenches-header-content1 mx-2">
            <span className="testbenches-heading">Manage Recipes</span>

            <NavLink to="/secure/recipes/create">
              <span className="btn btn-light">
                <i className="fas fa-plus-square"></i> New Normal Recipe
              </span>
            </NavLink>

            {/* <NavLink to="/secure/recipes/create-master">
            <span className="btn btn-light">
              <i className="fas fa-plus-square"></i> New Master Recipe
            </span>
          </NavLink> */}
            {/* <span className="btn btn-light">
            <i className="fas fa-plus-square"></i> Upload Recipe
          </span> */}
          </div>
        )}
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt; </span>
          </NavLink>
          <span>
            <i aria-hidden="true" className="fas fa-list-alt"></i> Recipes
          </span>
        </div>
      </div>
      <div className="datagrid-container">
        <CustomDataGrid
          columnData={columns}
          rowData={recipes}
          handleGetRowId={handleGetRowId}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Recipes;
