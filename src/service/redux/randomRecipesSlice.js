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
    status: '',
    random: [],
    error: null
}

const randomRecipesSlice = createSlice({
    name: 'randomRecipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomRecipes.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.random = action.payload
            })
            .addCase(fetchRandomRecipes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                console.log(state.error);
                
            })
    }
})

export default randomRecipesSlice.reducer