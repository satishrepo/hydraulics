import React, { Component } from "react";
import "./spoolIcons.css";

export default class SpoolIcons extends Component {
  render() {
    return (
      <div>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="dropdown">
              <div className="nav-icon">
                <div>Manual Value</div>
              </div>
              <div
                className="dropdown-content"
                style={{ color: "black", marginLeft: "-20px", width: "200px" }}
              >
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/air-actuated.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Air Actuated
                </li>
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/air-pilot.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Air Pilot
                </li>
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/hydraulic-proportional.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Hydraulic Proportional
                </li>
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/manual-valve.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Manual Valve
                </li>
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/solenoid-actuated.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Solenoid Actuated
                </li>
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/spool-icons/solenoid-proportional.png"
                    }
                    alt="Loading"
                    style={{ width: "2rem", marginRight: "10px" }}
                  />
                  Solenoid Proportional
                </li>
              </div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}
