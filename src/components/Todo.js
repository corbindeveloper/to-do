import React from "react";

const Todo = (props) => {

    const todoClasses = [];
    if (props.todo.complete) {
        todoClasses.push("strike");
    }

    return <div>
        <input onChange={(e) => {
            props.handleToggleComplete(props.i);
        }} checked={props.todo.complete} type="checkbox"/>
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button onClick={(e) =>  {
            props.handleTodoDelete(props.i);
        }} style={{marginLeft: "10px", backgroundColor: "#e0636f", color: "white", border: "1px solid black", cursor: "pointer", padding: "5px 10px", borderRadius: "5px"}}>Delete</button>
    </div>
}

export default Todo;