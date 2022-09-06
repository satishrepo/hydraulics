import React, { useState } from "react";
import { update } from "lodash";

export const PressureDropTest = (props) => {
  const [show, setShow] = useState(false);
  const [tests, setTests] = useState(
    props.testData.Tests.find((x) => x.Name === "PD").Value
  );

  const showHide = () => {
    setShow(!show);
  };

  const handleChange = (propertyName, value) => {
    const copiedTestData = { ...props.testData };
    copiedTestData.Tests.forEach((test) => {
      if (test.Name === "PD") {
        update(test.Value, propertyName, (val) => {
          return parseInt(value);
        });
      }
    });
    props.setTests({ ...copiedTestData });
    setTests({
      ...copiedTestData.Tests.find((x) => x.Name === "PD").Value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <div onClick={showHide} className="testbenches-header-container">
            PRESSURE DROP TEST
          </div>
          {show && (
            <div
              className="testbenches-header-container"
              style={{ "grid-template-column": "auto auto auto" }}
            >
              <div className="grid" style={{ padding: "10px" }}>
                <div className="grid-val">
                  <div style={{ marginLeft: "12px" }}>Cycle Time</div>
                  <div>
                    <input
                      type="number"
                      autocomplete="on"
                      placeholder="Cycle Time"
                      min="0"
                      className="input"
                      value={tests.Default_PD_Test.Cycle_Time}
                      onChange={(e) =>
                        handleChange(
                          "Default_PD_Test.Cycle_Time",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="grid-val">
                  <div style={{ marginLeft: "12px" }}>Maximum Sytem Flow</div>
                  <div>
                    <input
                      type="number"
                      autocomplete="on"
                      placeholder="Maximum System Flow"
                      min="0"
                      className="input"
                      value={tests.Default_PD_Test.Maximum_System_Flow}
                      onChange={(e) =>
                        handleChange(
                          "Default_PD_Test.Maximum_System_Flow",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="grid-val">
                  <div style={{ marginLeft: "12px" }}>
                    Maximum System Pressure
                  </div>
                  <div>
                    <input
                      type="number"
                      autocomplete="on"
                      placeholder="Maximum System Pressure"
                      min="0"
                      className="input"
                      value={tests.Default_PD_Test.Maximum_System_Pressure}
                      onChange={(e) =>
                        handleChange(
                          "Default_PD_Test.Maximum_System_Pressure",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  justifyContent: "start",
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
                            value={
                              tests.PD_Test.Tank_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.Tank_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.Tank_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.Tank_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.Tank_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.Tank_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.Tank_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.Tank_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.HPCO_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.HPCO_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.HPCO_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.HPCO_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.HPCO_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.HPCO_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.HPCO_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.HPCO_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A1_B1_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A1_B1_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A1_B1_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A1_B1_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A1_B1_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A1_B1_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A1_B1_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A1_B1_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A2_B2_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A2_B2_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A2_B2_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A2_B2_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A2_B2_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A2_B2_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A2_B2_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A2_B2_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A3_B3_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A3_B3_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A3_B3_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A3_B3_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A3_B3_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A3_B3_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A3_B3_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A3_B3_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A4_B4_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A4_B4_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A4_B4_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A4_B4_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A4_B4_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A4_B4_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A4_B4_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A4_B4_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A5_B5_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A5_B5_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A5_B5_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A5_B5_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A5_B5_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A5_B5_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A5_B5_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A5_B5_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A6_B6_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A6_B6_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A6_B6_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A6_B6_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A6_B6_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A6_B6_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A6_B6_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A6_B6_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A7_B7_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A7_B7_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A7_B7_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A7_B7_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A7_B7_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A7_B7_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A7_B7_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A7_B7_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A8_B8_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A8_B8_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A8_B8_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A8_B8_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A8_B8_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A8_B8_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A8_B8_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A8_B8_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A9_B9_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A9_B9_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A9_B9_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A9_B9_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A9_B9_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A9_B9_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A9_B9_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A9_B9_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A10_B10_Line_PD_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A10_B10_Line_PD_Test.Flow_Required",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A10_B10_Line_PD_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A10_B10_Line_PD_Test.FT",
                                e.target.value
                              )
                            }
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
                            value={
                              tests.PD_Test.A10_B10_Line_PD_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A10_B10_Line_PD_Test.Pressure_Drop",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            autocomplete="on"
                            placeholder="0"
                            min="0"
                            className="input"
                            value={tests.PD_Test.A10_B10_Line_PD_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "PD_Test.A10_B10_Line_PD_Test.PT",
                                e.target.value
                              )
                            }
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
      </div>
    </div>
  );
};
