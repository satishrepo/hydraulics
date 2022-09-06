import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import testbenchService from "../../../services/testbench-service";
import "./testbenches.css";
export default class TestbenchesCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
  }
  saveTestbench = (e) => {
    e.preventDefault();
    let testbench = {
      machine_id: this.state.name,
      status: this.state.status,
      parameters: ["test"],
    };
    console.log("testbench =>" + JSON.stringify(testbench));

    testbenchService.postTestbench(testbench).then((res) => {});
    window.location.reload(false);
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="testbenches-header-container">
          <div className="testbenches-header-content1">
            <div>
              <span className="testbenches-heading mx-3">Create TestBench</span>
            </div>
            <div>
              <NavLink to="/secure/testbenches/list">
                <span className="btn btn-light">
                  <i className="fas fa-list-alt"></i> List TestBenches
                </span>
              </NavLink>
            </div>
          </div>
          <div className="testbenches-header-content2">
            <NavLink to="/secure/dashboard">
              <i className="fa fa-home mx-2"></i>
              <span>Dashboard &gt;</span>
            </NavLink>
            <NavLink to="/secure/testbenches/list">
              <i className="fas fa-list-alt mx-2"></i>
              <span>TestBenches &gt;</span>
            </NavLink>
            <i className="fas fa-plus-square mx-2"></i>
            <span>Create</span>
          </div>
        </div>
        <div className="testbenches-table-container">
          <div className="testbenches-label my-2">
            <div className="testbenches-label mx-3">Name</div>
            <div>
              <input
                placeholder="Name"
                value={this.state.name}
                onChange={this.changeNameHandler}
              />
            </div>
          </div>
          <div className="testbenches-label my-2">
            <div className="testbenches-label mx-3">Status</div>
            <div>
              <input
                placeholder="Status"
                value={this.state.status}
                onChange={this.changeStatusHandler}
              />
            </div>
          </div>
          <div className="testbenches-create-save my-3">
            <span className="btn btn-dark mx-3" onClick={this.saveTestbench}>
              Save TestBench
            </span>
            <span className="btn btn-warning">Reset</span>
          </div>
        </div>
      </div>
    );
  }
}
