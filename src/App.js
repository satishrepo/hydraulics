import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./pages/home/Home";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Testbenches from "./pages/benches&recipes/testbenches/Testbenches";
import Recipes from "./pages/benches&recipes/recipes/Recipes";
import RecipesCreate from "./pages/benches&recipes/recipes/RecipesCreate";
import Reports from "./pages/benches&recipes/reports/Reports";
import Users from "./pages/users&permissions/users/Users";
import Roles from "./pages/users&permissions/roles/Roles";
import CreateRole from "./pages/users&permissions/roles/CreateRole";
import TestbenchesCreate from "./pages/benches&recipes/testbenches/TestbenchesCreate";
import CreateUser from "./pages/users&permissions/users/CreateUser";
import MasterRecipe from "./pages/benches&recipes/recipes/MasterRecipe";
import CalibrationData from "./pages/benches&recipes/testbenches/CalibrationData";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <Navbar
          showAdminBoard={showAdminBoard}
          showModeratorBoard={showModeratorBoard}
          currentUser={currentUser}
          logOut={this.logOut}
        />
        <Switch>
          {currentUser ? (
            <Route exact path={["/secure/dashboard", "/"]} component={Home} />
          ) : (
            <Route exact path={["/secure/dashboard", "/"]} component={Login} />
          )}
          {!currentUser && <Route exact path="/login" component={Login} />}
          {!currentUser && (
            <Route exact path="/register" component={Register} />
          )}
          {currentUser && (
            <Route
              exact
              path="/secure/testbenches/list"
              component={Testbenches}
            />
          )}
          {currentUser && (
            <Route
              exact
              path="/secure/testbenches/create"
              component={TestbenchesCreate}
            />
          )}
          {currentUser && (
            <Route
              exact
              path="/secure/testbenches/add-calibration/:id"
              render={(props) => <CalibrationData {...props} />}
            />
          )}
          {currentUser && (
            <Route exact path="/secure/recipes/list" component={Recipes} />
          )}
          {currentUser && (
            <Route
              exact
              path="/secure/recipes/create"
              component={RecipesCreate}
            />
          )}
          {currentUser && (
            <Route
              exact
              path="/secure/recipes/edit/:itemCode"
              component={RecipesCreate}
            />
          )}
          {/* {currentUser && (
            <Route
              exact
              path="/secure/recipes/create-master"
              component={MasterRecipe}
            />
          )} */}
          {currentUser && (
            <Route exact path="/api/reports" component={Reports} />
          )}
          {currentUser && (
            <Route exact path="/secure/users/list" component={Users} />
          )}
          {currentUser && (
            <Route exact path="/secure/users/create" component={CreateUser} />
          )}
          {currentUser && (
            <Route exact path="/secure/roles/list" component={Roles} />
          )}
          {currentUser && (
            <Route exact path="/secure/roles/create" component={CreateRole} />
          )}
          {currentUser && (
            <Route exact path="/secure/roles/edit/:id" component={CreateRole} />
          )}
        </Switch>
        {/* <AuthVerify logOut={this.logOut}/> */}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
