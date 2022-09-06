import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./recipes.css";
import Tab2 from "./Tab2";

export default class Recipes extends Component {
  render() {
    return (
      <div>
        <div className="testbenches-header-container">
          <div className="testbenches-header-content1 mx-2">
            <span className="testbenches-heading">Edit Recipe</span>
            <NavLink to="/secure/recipes/list">
              <span className="btn btn-light">
                <i className="fas fa-info-circle"></i> Recipe Details
              </span>
            </NavLink>
            <NavLink to="/secure/recipes/list">
              <span className="btn btn-light">
                <i aria-hidden="true" className="fas fa-list-alt"></i> List
                Recipes
              </span>
            </NavLink>
            <NavLink to="/secure/recipes/list">
              <span className="btn btn-light">
                <i className="fas fa-plus-square"></i> Create Recipes
              </span>
            </NavLink>
          </div>
          <div className="testbenches-header-content2">
            <NavLink to="/secure/dashboard">
              <i className="fa fa-home mx-2"></i>
              <span>Dashboard &gt; </span>
            </NavLink>
            <NavLink to="/secure/recipes/list">
              <span>
                <i aria-hidden="true" className="fas fa-list-alt"></i> Recipes
                &gt;{" "}
              </span>
            </NavLink>
            <span>
              <i aria-hidden="true" className="fas fa-edit"></i> Edit
            </span>
          </div>
        </div>
        <div className="testbenches-table-container">
          <Tab2 />
        </div>
      </div>
    );
  }
}
