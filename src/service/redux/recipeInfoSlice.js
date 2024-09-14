import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/api_credentials";

export const fetchRecipeInfo = createAsyncThunk(
    'recipeInfo/fetchRecipeInfo',
    async (recipeId) => {
        try {
            const response = await fetch(`${API.URL}/${recipeId}/information?apiKey=${API.KEY}&includeNutrition=false`)
            const info = await response.json()
            console.log(info);
            /* console.log(typeof info); */
            
            return info
        } catch (error) {
            console.log(`Error: ${error}`);
            
        }
    }
)

const initialState = {
    status: 'idle',
    value: []
}

const recipeInfoSlice = createSlice({
    name: 'recipeInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipeInfo.pending, (state) => {
                state.status = 'loading'
            } )
            .addCase(fetchRecipeInfo.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.value.push(action.payload)
            })
            .addCase(fetchRecipeInfo.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default recipeInfoSlice.reducer