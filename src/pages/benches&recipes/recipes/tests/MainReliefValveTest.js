import React, { useState } from "react";
import { update } from "lodash";

export const MainReliefValveTest = (props) => {
  const [show, setShow] = useState(false);
  const [tests, setTests] = useState(
    props.testData.Tests.find((x) => x.Name === "MRV_Test").Value
  );

  const showHide = () => {
    setShow(!show);
  };

  const handleChange = (propertyName, value) => {
    const copiedTestData = { ...props.testData };
    copiedTestData.Tests.forEach((test) => {
      if (test.Name === "MRV_Test") {
        update(test.Value, propertyName, (val) => {
          return parseInt(value);
        });
      }
    });
    props.setTests({ ...copiedTestData });
    setTests({
      ...copiedTestData.Tests.find((x) => x.Name === "MRV_Test").Value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <div onClick={showHide} className="testbenches-header-container">
            MAIN RELIEF VALVE TEST
          </div>
          {show && (
            <div
              className="testbenches-header-container"
              style={{ gridTemplateColumns: "auto auto auto" }}
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
                      value={tests.Default_MRV_Test.Cycle_Time}
                      onChange={(e) =>
                        handleChange(
                          "Default_MRV_Test.Cycle_Time",
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
                      value={tests.Default_MRV_Test.Maximum_System_Flow}
                      onChange={(e) =>
                        handleChange(
                          "Default_MRV_Test.Maximum_System_Flow",
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
                      value={tests.Default_MRV_Test.Maximum_System_Ptressure}
                      onChange={(e) =>
                        handleChange(
                          "Default_MRV_Test.Maximum_System_Ptressure",
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
                    gridTemplateColumns: "auto auto auto",
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
                            value={
                              tests.Pressure_Setting_MRV_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_MRV_Test.Flow_Required",
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
                            value={tests.Pressure_Setting_MRV_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_MRV_Test.FT",
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
                              tests.Pressure_Setting_MRV_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_MRV_Test.Pressure_Drop",
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
                            value={tests.Pressure_Setting_MRV_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_MRV_Test.PT",
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
                    gridTemplateColumns: "auto auto auto",
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
                            value={
                              tests.Pressure_Setting_Verification_MRV_Test
                                .Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_Verification_MRV_Test.Flow_Required",
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
                            value={
                              tests.Pressure_Setting_Verification_MRV_Test.FT
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_Verification_MRV_Test.FT",
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
                              tests.Pressure_Setting_Verification_MRV_Test
                                .Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_Verification_MRV_Test.Pressure_Drop",
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
                            value={
                              tests.Pressure_Setting_Verification_MRV_Test.PT
                            }
                            onChange={(e) =>
                              handleChange(
                                "Pressure_Setting_Verification_MRV_Test.PT",
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
                    gridTemplateColumns: "auto auto auto",
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
                            value={
                              tests.Cracked_Pressure_MRV_Test.Flow_Required
                            }
                            onChange={(e) =>
                              handleChange(
                                "Cracked_Pressure_MRV_Test.Flow_Required",
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
                            value={tests.Cracked_Pressure_MRV_Test.FT}
                            onChange={(e) =>
                              handleChange(
                                "Cracked_Pressure_MRV_Test.FT",
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
                              tests.Cracked_Pressure_MRV_Test.Pressure_Drop
                            }
                            onChange={(e) =>
                              handleChange(
                                "Cracked_Pressure_MRV_Test.Pressure_Drop",
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
                            value={tests.Cracked_Pressure_MRV_Test.PT}
                            onChange={(e) =>
                              handleChange(
                                "Cracked_Pressure_MRV_Test.PT",
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
