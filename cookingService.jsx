import http from "./httpService";

const apiEndpoint = "http://localhost:3001/recipes";

const recipeUrl = () => {
  return `${apiEndpoint}`;
};

export function getRecipes(query) {
  return http.get(apiEndpoint, {
    params: query,
  });
}

export function getRecipe(id) {
  return http.get(recipeUrl(id));
}

export function deleteRecipe(id) {
    return http.delete(recipeUrl(id));
  }
