import { addItem } from "../redux/todoSlice"
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";


const TodoList = () => {
    const list = useSelector((state) => state.todo.list)
    const dispatch = useDispatch()



    const addTodo = () => {
        let todoTitle = document.getElementById("addTodoInputTitle")
        let todoDesc = document.getElementById("addTodoInputDesc")
        dispatch(addItem({ title: todoTitle.value, desc: todoDesc.value, isChecked: false}))
        todoTitle.value = ""
        todoDesc.value = ""
    }

    return (
        <div>
            <div className="addTodoDiv">
                <div>
                    <input type="text" className="dark" placeholder="title" name="addTodoInputTitle" id="addTodoInputTitle" />
                    <input type="text" className="dark" placeholder="description" name="addTodoInputDesc" id="addTodoInputDesc" />
            
                    <button className="dark" onClick={() => addTodo()}>Add todo</button>
                </div>
            </div>
            <div className="todoWrapper">
                <div className="listContainer">
                    {list.map((item, i) => (<TodoItem {...item} i={i} key={i} />))}
                </div>
            </div>
        </div>
    )
}

export default TodoList