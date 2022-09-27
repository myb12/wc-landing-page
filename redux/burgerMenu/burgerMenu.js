import { createSlice } from "@reduxjs/toolkit";

export const burgerMenuSlicer = createSlice({
    name: 'burger',

    initialState: {
        isVisible: false
    },

    reducers: {
        setBurgerVisibility: (state) => {
            state.isVisible = !state.isVisible
        },
    }
})

export const { setBurgerVisibility } = burgerMenuSlicer.actions;

export default burgerMenuSlicer.reducer;