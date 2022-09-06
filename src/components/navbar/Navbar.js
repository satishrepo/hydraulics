import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  showAdminBoard,
  showModeratorBoard,
  currentUser,
  logOut,
}) {
  const userPermissions = JSON.parse(localStorage.getItem("userPermission"));

  return (
    <div
      id="navBar"
      style={{ boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)", zIndex: "2" }}
    >
      <div
        className="navbar navbar-expand navbar_left"
        style={{
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "105em",
        }}
      >
        <Link to={"/secure/dashboard"} className="navbar-brand">
          <div className="logo-nav-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="Loading"
              style={{ width: "5rem" }}
            />
          </div>
        </Link>
        <div className="navbar-nav">
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav">
            <li className="nav-item">
              <div className="dropdown">
                <div className="nav-icon">
                  <div>
                    <i className="fas fa-clipboard-list mx-2"></i>
                    Benches&Recipes
                  </div>
                </div>
                <div className="dropdown-content">
                  {userPermissions?.TESTBENCH?.permissions?.ListTestbench && (
                    <Link to={"/secure/testbenches/list"} className="nav-link">
                      <i className="fas fa-vials"></i>
                      &nbsp;TestBences
                    </Link>
                  )}

                  {userPermissions?.RECIPE?.permissions?.ListRecipe && (
                    <Link to={"/secure/recipes/list"} className="nav-link">
                      <i className="fas fa-receipt"></i>
                      &nbsp;Recipes
                    </Link>
                  )}

                  {userPermissions?.REPORTS?.permissions?.ListReport && (
                    <Link to={"/api/reports"} className="nav-link">
                      <i className="fas fa-clipboard-list"></i>
                      &nbsp;Reports
                    </Link>
                  )}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <div className="nav-icon">
                  <i className="fas fa-user-shield mx-2"></i>
                  <div>Users&Permissisons</div>
                </div>
                <div className="dropdown-content">
                  {userPermissions?.USER?.permissions?.ListUser && (
                    <Link to={"/secure/users/list"} className="nav-link">
                      <i className="fas fa-user-shield"></i>
                      &nbsp; Users
                    </Link>
                  )}

                  {userPermissions?.ROLE?.permissions?.ListRole && (
                    <Link to={"/secure/roles/list"} className="nav-link">
                      <i className="fas fa-users-cog"></i>
                      &nbsp; Roles
                    </Link>
                  )}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <div className="nav-icon">
                  <i className="fas fa-user-circle mx-2"></i>
                  <span>{currentUser.username}</span>
                </div>
                <div
                  className="dropdown-content"
                  style={{ marginLeft: "-20px" }}
                >
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </div>
              </div>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto" style={{ width: "15%" }}>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

//width: 75px;
