import React, { useState } from "react";
import { update } from "lodash";

export const LeakageTest = (props) => {
  const [show, setShow] = useState(false);
  const [tests, setTests] = useState(
    props.testData.Tests.find((x) => x.Name === "Leakage_Test_Data").Value
  );

  const showHide = () => {
    setShow(!show);
  };

  const handleChange = (propertyName, value) => {
    const copiedTestData = { ...props.testData };
    copiedTestData.Tests.forEach((test) => {
      if (test.Name === "Leakage_Test_Data") {
        update(test.Value, propertyName, (val) => {
          return parseInt(value);
        });
      }
    });
    props.setTests({ ...copiedTestData });
    setTests({
      ...copiedTestData.Tests.find((x) => x.Name === "Leakage_Test_Data").Value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <div onClick={showHide} className="testbenches-header-container">
            LEAKAGE TEST
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
                      value={tests.Default_Leakage_Test.Cycle_Time}
                      onChange={(e) =>
                        handleChange(
                          "Default_Leakage_Test.Cycle_Time",
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
                      value={tests.Default_Leakage_Test.Maximum_System_Flow}
                      onChange={(e) =>
                        handleChange(
                          "Default_Leakage_Test.Maximum_System_Flow",
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
                      value={
                        tests.Default_Leakage_Test.Maximum_System_Ptressure
                      }
                      onChange={(e) =>
                        handleChange(
                          "Default_Leakage_Test.Maximum_System_Ptressure",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 1</div>
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
                            value={tests.Leakage_Test.Spool_1.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_1.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_1.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_1.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_1.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_1.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 2</div>
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
                            value={tests.Leakage_Test.Spool_2.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_2.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_2.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_2.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_2.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_2.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 3</div>
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
                            value={tests.Leakage_Test.Spool_3.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_3.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_3.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_3.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_3.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_3.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 4</div>
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
                            value={tests.Leakage_Test.Spool_4.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_4.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_4.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_4.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_4.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_4.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 5</div>
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
                            value={tests.Leakage_Test.Spool_5.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_5.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_5.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_5.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_5.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_5.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 6</div>
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
                            value={tests.Leakage_Test.Spool_6.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_6.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_6.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_6.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_6.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_6.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 7</div>
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
                            value={tests.Leakage_Test.Spool_7.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_7.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_7.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_7.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_7.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_7.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 8</div>
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
                            value={tests.Leakage_Test.Spool_8.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_8.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_8.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_8.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_8.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_8.Port_B1_T",
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
                  style={{
                    "grid-template-column": "auto auto auto",
                    width: "fit-content",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Required Flow Spool 9</div>
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
                            value={tests.Leakage_Test.Spool_9.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_9.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_9.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_9.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_9.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_9.Port_B1_T",
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
                            value={tests.Leakage_Test.Spool_10.Check_Valve_1}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_10.Check_Valve_1",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_10.Port_A1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_10.Port_A1_T",
                                e.target.value
                              )
                            }
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
                            value={tests.Leakage_Test.Spool_10.Port_B1_T}
                            onChange={(e) =>
                              handleChange(
                                "Leakage_Test.Spool_10.Port_B1_T",
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
