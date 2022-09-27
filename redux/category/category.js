import { createSlice } from "@reduxjs/toolkit";

export const categorySlicer = createSlice({
    name: 'category',

    initialState: {
        isVisible: true
    },

    reducers: {
        setCategoryVisibility: (state) => {
            state.isVisible = !state.isVisible
        },
    }
})

export const { setCategoryVisibility } = categorySlicer.actions;

export default categorySlicer.reducer;