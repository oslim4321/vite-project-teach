import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "./List";

const TodoList = () => {
  const [reaction, setreaction] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = async () => {
    // if (task.trim() !== "") {
    // }
    console.log(task);
    try {
      const res = await axios.post("http://localhost:5000/todo", {
        title: task,
      });
      console.log(res);
      setreaction(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <List reaction={reaction} />
      </header>
    </div>
  );
};
export default TodoList;
