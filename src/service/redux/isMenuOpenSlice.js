import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const isMenuOpenSlice = createSlice({
    name: 'isMenuOpen',
    initialState,
    reducers: {
        setMenuStatus: (state) => {
            state.value = !state.value 
        }
    }
})

export const { setMenuStatus } = isMenuOpenSlice.actions
export default isMenuOpenSlice.reducer