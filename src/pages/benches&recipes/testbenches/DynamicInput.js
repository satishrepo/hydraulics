import React from "react";
import { useState } from "react";

function DynamicInput() {
  const [values, setValues] = useState({ val: [] });

  function createInputs() {
    return values.val.map((el, i) => (
      <div className="testbenches-table-container">
        <div
          key={i}
          className="testbenches-label my-2"
          style={{ marginLeft: "10px" }}
        >
          <div className="testbenches-label mx-3">Sensor Name</div>
          <div style={{ width: "200px" }}>
            <input
              type="text"
              placeholder="Sensor Name"
              value={el || ""}
              onChange={handleChange.bind(i)}
            />
          </div>
        </div>
        <div key={i} className="testbenches-label my-2">
          <div
            className="testbenches-header-container"
            style={{ width: "300px" }}
          >
            <table>
              <tr>
                <th style={{ paddingLeft: "15px" }}>Raw Data</th>
                <th style={{ paddingLeft: "15px" }}>Calibrated Data</th>
              </tr>
              <tr>
                <td>
                  <input placeholder="Raw Data" />
                </td>
                <td>
                  <input placeholder="Calibrated Data" />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="Raw Data" />
                </td>
                <td>
                  <input placeholder="Calibrated Data" />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="Raw Data" />
                </td>
                <td>
                  <input placeholder="Calibrated Data" />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="Raw Data" />
                </td>
                <td>
                  <input placeholder="Calibrated Data" />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="Raw Data" />
                </td>
                <td>
                  <input placeholder="Calibrated Data" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="testbenches-create-save my-3">
          <span className="btn">
            <input
              className="btn btn-dark"
              type="button"
              value="Remove"
              name={i}
              onClick={removeClick.bind(i)}
            />
          </span>
        </div>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ""] });
  };

  const removeClick = (event) => {
    let vals = [...values.val];
    let index = Number(event.target.name);
    vals.splice(index, 1);
    setValues({ val: vals });
  };

  const handleSubmit = (event) => {
    alert("Sensor name was submitted: " + values.val.join(", "));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {createInputs()}
      <div className="testbenches-create-save my-3">
        <span className="btn mx-3">
          <input
            className="btn btn-dark"
            type="button"
            value="Add Sensor"
            onClick={addClick}
          />
        </span>
        <span className="btn">
          <input className="btn btn-warning" type="submit" value="Submit" />
        </span>
      </div>
    </form>
  );
}

export default DynamicInput;
