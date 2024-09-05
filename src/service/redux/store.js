import { configureStore } from "@reduxjs/toolkit";
import randomRecipesReducer from "./randomRecipesSlice";

const store = configureStore({
    reducer: {
        randomRecipes: randomRecipesReducer
    }
})

export default store