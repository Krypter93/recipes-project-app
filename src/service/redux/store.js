import { configureStore } from "@reduxjs/toolkit";
import randomRecipesReducer from "./randomRecipesSlice";
import inputSearchReducer from "./inputSearchSlice";
import recipeSeekerReducer from "./recipeSeekerSlice";
import recipeInfoReducer from "./recipeInfoSlice";
import isMenuOpenReducer from "./isMenuOpenSlice";

const store = configureStore({
    reducer: {
        randomRecipes: randomRecipesReducer,
        inputSearch: inputSearchReducer,
        recipeSeeker: recipeSeekerReducer,
        recipeInfo: recipeInfoReducer,
        isMenuOpen: isMenuOpenReducer
    }
})

export default store