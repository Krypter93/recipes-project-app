import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/api_credentials";

export const fetchRecipe = createAsyncThunk(
    'recipeSeeker/fetchRecipe',
    async (recipe) => {
        try {
            const response = await fetch(`${API.URL}/complexSearch?apiKey=${API.KEY}&query=${recipe}`)
            const data = await response.json()
            console.log(data.results)
            return data.results
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
)

const initialState = {
    status: '',
    value: null,
    error:null
}

const recipeSeekerSlice = createSlice({
    name: 'recipeSeeker',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.value = action.payload
            })
            .addCase(fetchRecipe.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                console.log(state.error)
            })
    }
})

export default recipeSeekerSlice.reducer