import * as model from './model.js';
import RecipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();
    // 1 loading recipe
    await model.loadRecipe(id);

    // 2 rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
