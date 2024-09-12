import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

const inputSearchSlice = createSlice({
    name: 'inputSearch',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.value = action.payload
        },
        clearInputValue: state => {
            state.value = ''
        }
    }
})

export const {setInputValue, clearInputValue} = inputSearchSlice.actions
export default inputSearchSlice.reducer