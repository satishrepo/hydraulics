import React, { useState } from "react";
import { update } from "lodash";

export const PortReliefValveSettingTest = (props) => {
  const [show, setShow] = useState(false);
  const [tests, setTests] = useState(
    props.testData.Tests.find((x) => x.Name === "PRV_Test").Value
  );

  const showHide = () => {
    setShow(!show);
  };

  const handleChange = (propertyName, value) => {
    const copiedTestData = { ...props.testData };
    copiedTestData.Tests.forEach((test) => {
      if (test.Name === "PRV_Test") {
        update(test.Value, propertyName, (val) => {
          return parseInt(value);
        });
      }
    });
    props.setTests({ ...copiedTestData });
    setTests({
      ...copiedTestData.Tests.find((x) => x.Name === "PRV_Test").Value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <div onClick={showHide} className="testbenches-header-container">
            PORT RELIEF VALVE SETTING TEST
          </div>
          {show && (
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
                      value={tests.Default_PRV_Test.Cycle_Time}
                      onChange={(e) =>
                        handleChange(
                          "Default_PRV_Test.Cycle_Time",
                          e.target.value
                        )
                      }
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
                      value={tests.Default_PRV_Test.Maximum_System_Flow}
                      onChange={(e) =>
                        handleChange(
                          "Default_PRV_Test.Maximum_System_Flow",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="grid-val">
                  <div>Maximum System Pressure</div>
                  <div>
                    <input
                      type="number"
                      autocomplete="on"
                      placeholder="Maximum System Pressure"
                      min="0"
                      className="input"
                      value={tests.Default_PRV_Test.Maximum_System_Pressure}
                      onChange={(e) =>
                        handleChange(
                          "Default_PRV_Test.Maximum_System_Pressure",
                          e.target.value
                        )
                      }
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
                          value={tests.HPCO_Line.Flow_Required}
                          onChange={(e) =>
                            handleChange(
                              "HPCO_Line.Flow_Required",
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
                          value={tests.HPCO_Line.FT}
                          onChange={(e) =>
                            handleChange("HPCO_Line.FT", e.target.value)
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
                          value={tests.HPCO_Line.Pressure_Drop}
                          onChange={(e) =>
                            handleChange(
                              "HPCO_Line.Pressure_Drop",
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
                          value={tests.HPCO_Line.PT}
                          onChange={(e) =>
                            handleChange("HPCO_Line.PT", e.target.value)
                          }
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
    </div>
  );
};
