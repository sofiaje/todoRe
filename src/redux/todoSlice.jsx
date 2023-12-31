import { createSlice } from "@reduxjs/toolkit";
import {loadData, setData} from "../helper/localStorage"

const list = loadData("list")

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: list
    },
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload)
            localStorage.setItem("list", JSON.stringify(state.list))
        },
        removeItem: (state, action) => {
            state.list.splice(action.payload, 1)
            setData("list", state.list)
        },
        completeItem: (state, action) => {
            state.list[action.payload].isChecked = !state.list[action.payload].isChecked
            setData("list", state.list)
        },
        changeItem: (state, action) => {
            state.list[action.payload.i].title = action.payload.title
            state.list[action.payload.i].desc = action.payload.desc
            setData("list", state.list)
        }

    }
})

export const { addItem, removeItem, changeItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;