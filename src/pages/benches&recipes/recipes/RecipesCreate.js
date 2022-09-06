import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./recipes.css";
import Tab2 from "./Tab2";
import Tab1 from "./Tab1";
import { useParams } from "react-router-dom";
import recipeService from "../../../services/recipe-service";
import { Basic_Details, Tests } from "../../../common/recipe";

const Recipes = () => {
  const { itemCode } = useParams();
  const [code, setItemCode] = useState("");
  const [basicDetails, setBasicDetails] = useState(Basic_Details);
  const [tests, setTests] = useState(Tests);
  const history = useHistory();

  useEffect(() => {
    if (itemCode) {
      setItemCode(itemCode);
      getRecipeData();
    }
  }, []);

  const getRecipeData = () => {
    recipeService
      .getRecipe(itemCode)
      .then((response) => {
        const { basic_details, tests } = response.data;
        setBasicDetails(basic_details);
        setTests(tests);
      })
      .catch((error) => console.log("Something went wrong"));
  };

  const addUpdateRecipe = () => {
    const payload = {
      item_code: code,
      basic_details: basicDetails,
      tests: tests,
    };
    if (itemCode) {
      recipeService
        .updateRecipe(payload)
        .then((response) => {
          history.push("/secure/recipes/list");
        })
        .catch((ex) => console.log("Something went wrong"));
    } else {
      recipeService
        .postRecipe(payload)
        .then((response) => {
          history.push("/secure/recipes/list");
        })
        .catch((ex) => console.log("Something went wrong"));
    }
  };

  return (
    <div>
      <div className="testbenches-header-container">
        <div className="testbenches-header-content1 mx-2">
          <span className="testbenches-heading">Create Recipe</span>
          <NavLink to="/secure/recipes/list">
            <span className="btn btn-light">
              <i aria-hidden="true" className="fas fa-list-alt"></i> List
              Recipes
            </span>
          </NavLink>
        </div>
        <div className="testbenches-header-content2">
          <NavLink to="/secure/dashboard">
            <i className="fa fa-home mx-2"></i>
            <span>Dashboard &gt; </span>
          </NavLink>
          <NavLink to="/secure/recipes/list">
            <span>
              <i aria-hidden="true" className="fas fa-list-alt"></i> Recipes
              &gt;{" "}
            </span>
          </NavLink>
          <span>
            <i className="fas fa-plus-square"></i> Create
          </span>
        </div>
      </div>

      <div className="common_sec">
        <div
          className="column-heading"
          style={{ marginTop: "5px", background: "#ffe0e6" }}
        >
          Basic Information
        </div>
        <Tab1
          basicDetails={basicDetails}
          setBasicDetails={setBasicDetails}
          itemCode={code}
          setItemCode={setItemCode}
          isEdit={itemCode?.length > 0}
        />
      </div>

      <div className="common_sec">
        <Tab2 tests={tests} setTests={setTests} />

        <button className="btn btn-dark my-3" onClick={addUpdateRecipe}>
          {itemCode ? "Update Recipe" : "Save Recipe"}
        </button>
      </div>
    </div>
  );
};

export default Recipes;
