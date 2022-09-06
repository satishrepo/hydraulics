import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import calibrationservice from "../../../services/calibration-service";

export default class CalibrationData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list_of_values: [],
      items: [],
    };
  }
  handlechangeRawData(i, il, event) {
    const items = [...this.state.list_of_values];
    items[i].raw_data[il] = event.target.value;
    console.log(items);
    this.setState({ items: items });
  }
  handlechangeCalibratedData(i, il, event) {
    const items = [...this.state.list_of_values];
    items[i].calibrated_data[il] = event.target.value;
    console.log(items);
    this.setState({ items: items });
  }

  saveCalibration = (e) => {
    e.preventDefault();
    this.state.items.map((e) => {
      let calibration = e;
      console.log("calibration =>" + JSON.stringify(calibration));
      calibrationservice
        .putCalibration(this.props.match.params.id, e.sensor_name, calibration)
        .then((res) => {});
      return 0;
    });
    window.location.reload(false);
  };

  componentDidMount() {
    calibrationservice
      .getCalibration(this.props.match.params.id)
      .then((res) => {
        this.setState({ list_of_values: res.data.list_of_values });
        console.log(this.state.list_of_values);
      });
  }
  render(props) {
    return (
      <div>
        <div className="testbenches-header-container">
          <div className="testbenches-header-content1">
            <div>
              <span className="testbenches-heading mx-3">Calibration Data</span>
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
            <span>Edit</span>
          </div>
        </div>
        <div
          className="testbenches-table-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", "flex-wrap": "wrap" }}>
            {this.state.list_of_values.map((e, i) => (
              <div className="testbenches-header-container">
                <button className="btn btn-dark">
                  Sesor Name : {e.sensor_name}
                </button>
                <table>
                  <tr>
                    <th style={{ paddingLeft: "15px" }}>Raw Data</th>
                    <th style={{ paddingLeft: "15px" }}>Calibrated Data</th>
                  </tr>
                  {e.raw_data.map((el, il) => (
                    <tr>
                      <td>
                        <input
                          placeholder="Raw Data"
                          defaultValue={e.raw_data[il]}
                          onChange={(event) =>
                            this.handlechangeRawData(i, il, event)
                          }
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Calibrated Data"
                          defaultValue={e.calibrated_data[il]}
                          onChange={(event) =>
                            this.handlechangeCalibratedData(i, il, event)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            ))}
          </div>
          <div className="testbenches-create-save my-3">
            <span className="btn btn-dark mx-3" onClick={this.saveCalibration}>
              Save Calibration
            </span>
          </div>
        </div>
      </div>
    );
  }
}
