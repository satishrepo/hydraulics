import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import roleService from "../../../services/roles-service";
import authService from "../../../services/auth.service";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      status: true,
      rolesList: [],
      role_id: 1,
    };
    this.saveUserHandler = this.saveUserHandler.bind(this);
    this.redirectToUserList = this.redirectToUserList.bind(this);
  }

  componentDidMount() {
    roleService
      .getRoles()
      .then((res) => {
        this.setState({ rolesList: res.data });
      })
      .catch(() => {});
  }

  saveUserHandler() {
    authService
      .register({
        username: this.state.name,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile,
        status: this.state.status,
        role_id: this.state.role_id,
      })
      .then(() => {
        this.redirectToUserList();
      })
      .catch(() => {});
  }

  redirectToUserList() {
    const { history } = this.props;
    history.push("/secure/users/list");
  }

  render() {
    return (
      <div>
        <div className="testbenches-header-container">
          <div className="testbenches-header-content1">
            <span className="testbenches-heading mx-2">Create User</span>
            <NavLink to="/secure/users/list">
              <span className="btn btn-light">
                <i className="fas fa-user-plus"></i> List Users
              </span>
            </NavLink>
          </div>
          <div className="testbenches-header-content2">
            <NavLink to="/secure/dashboard">
              <i className="fa fa-home mx-2"></i>
              <span>Dashboard &gt; </span>
            </NavLink>
            <NavLink to="/secure/users/list">
              <span>
                <i className="fas fa-list-alt"></i> Users &gt;{" "}
              </span>
            </NavLink>
            <span>
              <i className="fas fa-plus-square"></i> Create{" "}
            </span>
          </div>
        </div>
        <div className="common_sec common_input">
          <div className="grid-container">
            <div className="grid">
              <div className="grid-val">
                <div>Name</div>
                <div>
                  <input
                    className="grid-input"
                    placeholder="Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid-val">
                <div>E-Mail</div>
                <div>
                  <input
                    className="grid-input"
                    placeholder="E-Mail"
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid-val">
                <div>Mobile</div>
                <div>
                  <input
                    className="grid-input"
                    placeholder="Mobile"
                    onChange={(e) => this.setState({ mobile: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid-val">
                <div>Password</div>
                <div>
                  <input
                    className="grid-input"
                    placeholder="Password"
                    type="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid-val">
                <div>Confirm Password</div>
                <div>
                  <input
                    className="grid-input"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
              </div>
              <div className="grid-val">
                <div>Status</div>
                <div>
                  <select
                    onChange={(e) => this.setState({ status: e.target.value })}
                  >
                    <option value={true}>ACTIVE</option>
                    <option value={false}>INACTIVE</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid-val roles_grid">
              <div className="heading">Roles</div>
              {this.state.rolesList.map((role, index) => {
                return (
                  <div className="form-check-inline" key={index}>
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      value={role.id}
                      onChange={(e) => {
                        this.setState({ role_id: parseInt(e.target.value) });
                      }}
                    />
                    <label className="form-check-label">{role.name}</label>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                className="btn btn-dark my-3"
                onClick={this.saveUserHandler}
              >
                Save User
              </button>
              <button
                className="btn btn-warning my-3 mx-3"
                onClick={this.redirectToUserList}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
