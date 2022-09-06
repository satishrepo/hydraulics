import axios from "axios";
import authHeader from "./auth-header";

const RECIPE_API_POST_URL = "/api/add_new_recipe";
const RECIPE_API_GET_ALL_URL = "/api/getRecipes";
const GET_SINGLE_RECIPE = "/api/getRecipe";
const RECIPE_API_UPDATE_URL = "/api/edit_recipe";

class RecipeService {
  postRecipe(recipe) {
    return axios.post(RECIPE_API_POST_URL, recipe, { headers: authHeader() });
  }
  getAllRecipes() {
    return axios.get(RECIPE_API_GET_ALL_URL, { headers: authHeader() });
  }
  getRecipe(itemCode) {
    return axios.get(`${GET_SINGLE_RECIPE}/${itemCode}`, {
      headers: authHeader(),
    });
  }
  updateRecipe(recipe) {
    return axios.put(RECIPE_API_UPDATE_URL, recipe, { headers: authHeader() });
  }
}

export default new RecipeService();
