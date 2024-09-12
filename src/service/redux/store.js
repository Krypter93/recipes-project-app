import { configureStore } from "@reduxjs/toolkit";
import randomRecipesReducer from "./randomRecipesSlice";
import inputSearchReducer from "./inputSearchSlice";
import recipeSeekerReducer from "./recipeSeekerSlice";

const store = configureStore({
    reducer: {
        randomRecipes: randomRecipesReducer,
        inputSearch: inputSearchReducer,
        recipeSeeker: recipeSeekerReducer
    }
})

export default store