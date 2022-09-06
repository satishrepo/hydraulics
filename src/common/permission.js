export const DefaultPermission = {
  permissions: [
    {
      Module: "USER",
      Permissions: [
        {
          PermissionConstant: "ListUser",
          PermissionName: "List Users",
          HasAccess: false,
        },
        {
          PermissionConstant: "CreateUser",
          PermissionName: "Create User",
          HasAccess: false,
        },
        // {
        //   PermissionConstant: "EditUser",
        //   PermissionName: "Edit User",
        //   HasAccess: false,
        // },
        {
          PermissionConstant: "DeleteUser",
          PermissionName: "Delete User",
          HasAccess: false,
        },
      ],
    },
    {
      Module: "ROLE",
      Permissions: [
        {
          PermissionConstant: "ListRole",
          PermissionName: "List Roles",
          HasAccess: false,
        },
        {
          PermissionConstant: "CreateRole",
          PermissionName: "Create Role",
          HasAccess: false,
        },
        {
          PermissionConstant: "EditRole",
          PermissionName: "Edit Role",
          HasAccess: false,
        },
        {
          PermissionConstant: "DeleteRole",
          PermissionName: "Delete Role",
          HasAccess: false,
        },
      ],
    },
    {
      Module: "TESTBENCH",
      Permissions: [
        {
          PermissionConstant: "ListTestbench",
          PermissionName: "List Testbenches",
          HasAccess: false,
        },
        // {
        //   PermissionConstant: "CreateTestbench",
        //   PermissionName: "Create Testbench",
        //   HasAccess: false,
        // },
        // {
        //   PermissionConstant: "EditTestbench",
        //   PermissionName: "Edit Testbench",
        //   HasAccess: false,
        // },
        {
          PermissionConstant: "DeleteTestbench",
          PermissionName: "Delete Testbench",
          HasAccess: false,
        },
      ],
    },
    {
      Module: "RECIPE",
      Permissions: [
        {
          PermissionConstant: "ListRecipe",
          PermissionName: "List Recipes",
          HasAccess: false,
        },
        {
          PermissionConstant: "CreateRecipe",
          PermissionName: "Create Recipe",
          HasAccess: false,
        },
        {
          PermissionConstant: "EditRecipe",
          PermissionName: "Edit Recipe",
          HasAccess: false,
        },
        // {
        //   PermissionConstant: "DeleteRecipe",
        //   PermissionName: "Delete Recipe",
        //   HasAccess: false,
        // },
      ],
    },
    {
      Module: "REPORTS",
      Permissions: [
        {
          PermissionConstant: "ListReport",
          PermissionName: "List Reports",
          HasAccess: false,
        },
        // {
        //   PermissionConstant: "CreateReport",
        //   PermissionName: "Create Report",
        //   HasAccess: false,
        // },
        // {
        //   PermissionConstant: "EditReport",
        //   PermissionName: "Edit Report",
        //   HasAccess: false,
        // },
        // {
        //   PermissionConstant: "DeleteReport",
        //   PermissionName: "Delete Report",
        //   HasAccess: false,
        // },
      ],
    },
    {
      Module: "ANALYTICS",
      Permissions: [
        {
          PermissionConstant: "TestBenchStatus",
          PermissionName: "Test Bench Status",
          HasAccess: false,
        },
        {
          PermissionConstant: "ValveStatusChart",
          PermissionName: "Valve Status Chart",
          HasAccess: false,
        },
        {
          PermissionConstant: "ValveTestedLineChart",
          PermissionName: "Valve Tested Line Chart",
          HasAccess: false,
        },
        {
          PermissionConstant: "ValveTestedBarChart",
          PermissionName: "Valve Tested Bar Chart",
          HasAccess: false,
        },
      ],
    },
    {
      Module: "ROLE & PERMISSIONS",
      Permissions: [
        {
          PermissionConstant: "PermissionGrid",
          PermissionName: "Permission Grid",
          HasAccess: false,
        },
        // {
        //   PermissionConstant: "RecipeTDMSDownload",
        //   PermissionName: "Recipe TDMS Download",
        //   HasAccess: false,
        // },
        // {
        //   PermissionConstant: "RecipeUpload",
        //   PermissionName: "Recipe Upload",
        //   HasAccess: false,
        // },
        // {
        //   PermissionConstant: "ReportsUpload",
        //   PermissionName: "Reports Upload",
        //   HasAccess: false,
        // },
        {
          PermissionConstant: "ReportExportPdf",
          PermissionName: "Reports Export Pdf",
          HasAccess: false,
        },
        {
          PermissionConstant: "ReportExportExcel",
          PermissionName: "Reports Export Excel",
          HasAccess: false,
        },
      ],
    },
    // {
    //   Module: "PROFILE",
    //   Permissions: [
    //     {
    //       PermissionConstant: "PasswordChange",
    //       PermissionName: "Password Change",
    //       HasAccess: false,
    //     },
    //     {
    //       PermissionConstant: "EmailChange",
    //       PermissionName: "Email Change",
    //       HasAccess: false,
    //     },
    //   ],
    // },
  ],
};

export const getPermissionName = (permissionData) => {
  var result = [];
  if (!permissionData) return "";

  var parsedData = JSON.parse(permissionData);
  parsedData.permissions.forEach((permission) => {
    permission.Permissions.forEach((permission2) => {
      if (permission2.HasAccess) {
        result.push(permission2.PermissionName);
      }
    });
  });
  return result.join(", ");
};
