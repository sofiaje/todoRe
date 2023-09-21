import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",  
    initialState: {
        name: ""
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload   
        }
    }
})

export const { addName } = headerSlice.actions;

export default headerSlice.reducer;