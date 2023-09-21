import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            state.list.push(action.payload)
        },
        removeItem: (state, action) => {
            state.list.splice(action.payload, 1)
        },
        completeItem: (state, action) => {
            console.log("completed")
            state.list[action.payload].isChecked = !state.list[action.payload].isChecked
        },
        changeItem: (state, action) => {
            console.log(action.payload)
            state.list[action.payload.i].title = action.payload.title
            state.list[action.payload.i].desc = action.payload.desc
        }

    }
})

export const { addItem, removeItem, changeItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;