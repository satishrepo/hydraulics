import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";
import "./css/login.css";
import rolesService from "../services/roles-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          this.setUserPermissions();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  setUserPermissions() {
    const loggedInUserDetails = JSON.parse(localStorage.getItem("user"));
    rolesService
      .getSingleRole(loggedInUserDetails.roleId)
      .then((res) => {
        const USER_ROLE_PERMISSIONS = {};
        const parsedPermissions = JSON.parse(res.data[0].role_permission);

        parsedPermissions.permissions.forEach((item) => {
          USER_ROLE_PERMISSIONS[item.Module] = { permissions: {} };
          item.Permissions.forEach((permission) => {
            USER_ROLE_PERMISSIONS[item.Module].permissions[
              permission.PermissionConstant
            ] = permission.HasAccess;
          });
        });

        localStorage.setItem(
          "userPermission",
          JSON.stringify(USER_ROLE_PERMISSIONS)
        );

        this.navigateToDashboard();
      })
      .catch(() => {
        this.navigateToDashboard();
      });
  }

  navigateToDashboard() {
    const { history } = this.props;
    history.push("/secure/dashboard");
    window.location.reload();
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/secure/dashboard" />;
    }

    return (
      <div className="login-background" style={{ paddingBottom: "100px" }}>
        <div className="login-container">
          <div className="login-columns">
            <div className="left">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                alt="Loading"
              />
              <h4>Login</h4>
              <p>Hey, Enter your details to get sign in to your account</p>
            </div>
            <div className="right">
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                    style={{ background: "#48c774", borderRadius: "20px" }}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
