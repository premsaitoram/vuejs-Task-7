import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        slug: "Kaju-curry",
        title: "Kaju-curry",
        description: "A delicious curry made with kaju and special sause",
        ingredients: [
          "1 table spoon olive oil",
          "2 onion chopped",
          "2 cloves garlic, chopped",
          "1 tablespoon curry powder",
          "cup of Kaju",
        ],
        method: [
          "Heat oil in a large skillset over medium heat",
          "Add onion and garlic and cook, stirring often, until softened and cook, stirring, until fragrant, about 1 minute",
        ],
      },

      {
        slug: "Chicken-curry",
        title: "Chicken-curry",
        description: "A delicious curry made with kaju and special sause",
        ingredients: [
          "1 table spoon olive oil",
          "2 onion chopped",
          "2 cloves garlic, chopped",
          "1 tablespoon curry powder",
          "Chicken",
        ],
        method: [
          "Heat oil in a large skillset over medium heat",
          "Add onion and garlic and cook, stirring often, until softened and cook, stirring, until fragrant, about 1 minute",
        ],
      },
    ],
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
});
