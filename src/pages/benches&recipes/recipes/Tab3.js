import React, { Component } from "react";

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.showHide = this.showHide.bind(this);
  }

  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              HPCO TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testbenches-header-container"
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>HPCO Line</div>
                  <hr />
                  <div>
                    <div className="grid-val">
                      <div>Flow Required</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid-val">
                      <div>Required Pressure</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              PRESSURE DROP TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                  }}
                >
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>Tank Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>HPCO Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A1-B1-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A2-B2-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A3-B3-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A4-B4-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A5-B5-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A6-B6-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A7-B7-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A8-B8-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A9-B9-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{ "grid-template-column": "auto auto auto" }}
                  >
                    <div style={{ fontWeight: "600" }}>P-A10-B10-T Line</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              MAIN RELIEF VALVE TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                  }}
                >
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>Pressure Setting</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Pressure Setting Verification
                    </div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>Cracking Pressure</div>
                    <hr />
                    <div>
                      <div className="grid-val">
                        <div>Flow Required</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid-val">
                        <div>Required Pressure</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              LEAKAGE TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                  }}
                >
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 1
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 2
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 3
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 4
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 5
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 6
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 7
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 8
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 9
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testbenches-header-container"
                    style={{
                      "grid-template-column": "auto auto auto",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>
                      Required Flow Spool 10
                    </div>
                    <hr />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="grid-val">
                        <div>Check Valve 1</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-A1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-val">
                        <div>P-B1-T</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <input
                              type="number"
                              autocomplete="on"
                              placeholder="0"
                              min="0"
                              step=".001"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              KICKOUT TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testbenches-header-container"
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>HPCO Line</div>
                  <hr />
                  <div>
                    <div className="grid-val">
                      <div>Flow Required</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid-val">
                      <div>Required Pressure</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={this.showHide}
              className="testbenches-header-container"
            >
              PORT RELIEF VALVE SETTING TEST
            </div>
            {this.state.show && (
              <div
                className="testbenches-header-container"
                style={{ "grid-template-column": "auto auto auto" }}
              >
                <div className="grid">
                  <div className="grid-val">
                    <div>Cycle Time</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Cycle Time"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum Sytem Flow</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid-val">
                    <div>Maximum System Pressure</div>
                    <div>
                      <input
                        type="number"
                        autocomplete="on"
                        placeholder="Maximum System Flow"
                        min="0"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testbenches-header-container"
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>HPCO Line</div>
                  <hr />
                  <div>
                    <div className="grid-val">
                      <div>Flow Required</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid-val">
                      <div>Required Pressure</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            step=".001"
                            className="input"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="btn btn-dark my-3">Save Recipe</button>
      </div>
    );
  }
}
