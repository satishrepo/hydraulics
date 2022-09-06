import React from "react";

const Tab1 = (props) => {
  const basicDetails = props?.basicDetails;

  const handleChange = (property, value) => {
    props.setBasicDetails({ ...props.basicDetails, [property]: value });
  };

  return (
    <div className="grid-container">
      <div className="grid">
        <div className="grid-val">
          <div style={{ paddingLeft: "12px" }}>Item Code</div>
          <div>
            <input
              placeholder="Item Code"
              value={props.itemCode}
              onChange={(e) => {
                props.setItemCode(e.target.value);
              }}
              disabled={props.isEdit}
              className={`grid-input ${props.isEdit ? "disabled" : ""}`}
            />
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "12px" }}>Valve Type</div>
          <div>
            <input
              className="grid-input"
              placeholder="Valve Type"
              value={basicDetails?.Valve_Type}
              onChange={(e) => handleChange("Valve_Type", e.target.value)}
            />
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "5px" }}>Recipe Type</div>
          <div>
            <select
              className="grid-input"
              style={{ height: "25px", width: "100%" }}
              value={basicDetails.Recipe_Type}
              onChange={(e) => handleChange("Recipe_Type", e.target.value)}
            >
              <option value="NORMAL DATA">NORMAL DATA</option>
              <option value="MASTER DATA">MASTER DATA</option>
            </select>
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "5px" }}>Coil Voltage</div>
          <div>
            <select
              className="grid-input"
              style={{ height: "25px", width: "100%" }}
              value={basicDetails.Coil_Voltage}
              onChange={(e) => handleChange("Coil_Voltage", e.target.value)}
            >
              <option value="12V">12V</option>
              <option value="24V">24V</option>
            </select>
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "12px" }}>Oil Use</div>
          <div>
            <input
              type="text"
              placeholder="Oil Use"
              className="input"
              value={basicDetails.Oil_Used}
              onChange={(e) => handleChange("Oil_Used", e.target.value)}
            />
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "12px" }}>Oil Temperature</div>
          <div>
            <input
              type="text"
              placeholder="Oil Temperature"
              className="input"
              value={basicDetails.Oil_Temperature}
              onChange={(e) => handleChange("Oil_Temperature", e.target.value)}
            />
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "18px" }}>Air Test</div>
          <div
            style={{
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={basicDetails.Air_Test_Required}
              style={{
                width: "auto",
                height: "auto",
                marginRight: "5px",
                boxShadow: "none",
              }}
              onChange={(e) =>
                handleChange("Air_Test_Required", e.target.checked)
              }
            />
            Is Test Required ?
          </div>
        </div>
        <div className="grid-val">
          <div style={{ paddingLeft: "17px" }}>Pressure Holding Test</div>
          <div>
            <div
              style={{
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                checked={basicDetails.Pressure_Holding_Test_Required}
                style={{
                  width: "auto",
                  height: "auto",
                  marginRight: "5px",
                  boxShadow: "none",
                }}
                onChange={(e) =>
                  handleChange(
                    "Pressure_Holding_Test_Required",
                    e.target.checked
                  )
                }
              />
              Is Pressure Holding Test Required ?
            </div>
          </div>
        </div>

        <div className="grid-val">
          <div style={{ paddingLeft: "12px" }}>Spools Count</div>
          <div>
            <input
              type="number"
              autoComplete="on"
              placeholder="Spools Count"
              min="0"
              max="10"
              className="input"
              style={{ width: "100%" }}
              value={basicDetails.No_of_Spools}
              onChange={(e) => handleChange("No_of_Spools", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid-val">
          {/* {this.state.selectedRecipe === "MASTER DATA" ? ( */}
          {/* <>
            <div
              style={{
                display: "flex",
                "margin-top": "25px",
                "justify-content": "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                  background: "#d7ecfb",
                  padding: "10px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
                <div>1</div>
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                  background: "#d7ecfb",
                  padding: "10px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
                <div>2</div>
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                  background: "#d7ecfb",
                  padding: "10px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
                <div>3</div>
                <div
                  style={{
                    background: "rgb(72, 199, 116)",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  <SpoolIcons />
                </div>
              </div>
            </div>
          </> */}
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default Tab1;
