import axios from "axios";
import React, { useEffect, useState } from "react";

const List = ({ reaction }) => {
  const [todos, settodos] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getAllTodo = async () => {
    setisLoading(true);
    const { data } = await axios.get("http://localhost:5000/todo");
    settodos(data);
    setisLoading(false);
  };

  useEffect(() => {
    getAllTodo();
  }, [reaction]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleDelete(id) {
    const res = await axios.delete(`http://localhost:5000/todo/${id}`);
    console.log(res);
    getAllTodo();
  }

  return (
    <ul className="todo-list">
      {/* {todos && todos.length > 0 &&
        todos.map((todo, index) => (
          <li key={index} className="text-white">
            {todo.title}
            <button>Remove</button>
          </li>
        ))} */}
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li key={index} className="text-white">
            {todo.title}
            <button onClick={() => handleDelete(todo._id)}>Remove</button>
          </li>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </ul>
  );
};

export default List;
