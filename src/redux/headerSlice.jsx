import { createSlice } from "@reduxjs/toolkit";
import {loadData} from "../helper/localStorage"

const name = loadData("name")

const headerSlice = createSlice({
    name: "header",  
    initialState: {
        name: name
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload
            localStorage.setItem("name", JSON.stringify(state.name))
        }
    }
})

export const { addName } = headerSlice.actions;

export default headerSlice.reducer;