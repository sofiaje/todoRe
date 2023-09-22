import { createSlice } from "@reduxjs/toolkit";
import {loadData, setData} from "../helper/localStorage"

const list = loadData()

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: list
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            state.list.push(action.payload)
            localStorage.setItem("list", JSON.stringify(state.list))
        },
        removeItem: (state, action) => {
            state.list.splice(action.payload, 1)
            setData(state.list)
        },
        completeItem: (state, action) => {
            console.log("completed")
            state.list[action.payload].isChecked = !state.list[action.payload].isChecked
            setData(state.list)
        },
        changeItem: (state, action) => {
            console.log(action.payload)
            state.list[action.payload.i].title = action.payload.title
            state.list[action.payload.i].desc = action.payload.desc
            setData(state.list)
        }

    }
})

export const { addItem, removeItem, changeItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;