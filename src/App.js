import './App.css';
import React, { useState } from 'react';
import Todo from "./components/Todo"

function App() {
  const [newTodo,  setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);



  const handleNewTodoSubmit = (e) =>  {
    e.preventDefault()

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }

      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App" style={{ textAlign: "center"}}>
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }}>
        <input style={{ padding: "3px", margin: "25px", width: "40%"}} onChange={(e) => {
          setNewTodo(e.target.value);
        }} type="text"
        value={newTodo}/>
        <div>
          <button style={{ backgroundColor: "#58bf5f", padding: "5px 10px", border: "1px solid black", borderRadius: "5px", cursor: "pointer"}}>ADD</button>
        </div>
      </form>

      <br/>
      <hr/>
      <br/>

      {
        todos.map((todo, i) =>  {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("strike");
          }

          return (
            <Todo key={i} todo={todo} handleToggleComplete={handleToggleComplete} i={i} handleTodoDelete={handleTodoDelete}/>
          );
        })
      }
    </div>
  );
}

export default App;
