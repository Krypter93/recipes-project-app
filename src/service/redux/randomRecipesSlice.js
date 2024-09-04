import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/api_credentials";

export const fetchRandomRecipes = createAsyncThunk(
    'randomRecipes/fetchRandom',
    async () => {
        try {
            const response = await fetch(`${API.URL}/random?apiKey=${API.KEY}&number=${Math.floor(Math.random() * 20 + 1)}`)
            if(!response.ok) throw new Error('Something went wrong!')
            const data = await response.json()
            console.log(data.recipes);
            return data.recipes
        } catch (error) {
            console.log('Error: ', error);
        }
    }
)

const initialState = {
    random: []
}

const randomRecipesSlice = createSlice({
    name: 'randomRecipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
                state.random = action.payload
            })
    }
})

export default randomRecipesSlice.reducer