import { createSlice } from "@reduxjs/toolkit";
import {loadName} from "../helper/localStorage"

const name = loadName("name")

const headerSlice = createSlice({
    name: "header",  
    initialState: {
        name: name
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload
            localStorage.setItem("name", JSON.stringify(state.name))
        },
        clearName: (state, action) => {
            state.name = null
            localStorage.setItem("name", JSON.stringify(state.name))
        }
    }
})

export const { addName, clearName } = headerSlice.actions;

export default headerSlice.reducer;