import { useState } from "react";
import Todo from "./Todo";

import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos || []);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "") {
      // only add the todo if the title is not empty
      const newTodo = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      const temp = [...todos];
      temp.push(newTodo);
      setTodos(temp);
      handleAdd(title);
      setTitle("");
      // setTodos([...todos, newTodo]); it's the same as the above code.
    }
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    if (item) {
      // check if the item exists
      item.title = value;
      setTodos(temp);
      localStorage.setItem("todos", JSON.stringify(temp));
    }
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
    localStorage.setItem("todos", JSON.stringify(temp));
  }

  function handleAdd(title) {
    const newTodo = { id: Date.now(), title: title };
    const temp = [...todos, newTodo];
    setTodos(temp);
    localStorage.setItem("todos", JSON.stringify(temp));
  }

  return (
    <>
      <div className="todoContainer">
        <h1 className="todoTitleContainer">Todo List</h1>
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input onChange={handleChange} className="todoInput" value={title} />
          <input type="submit" value="Create Todo" className="buttonCreate" />
        </form>
        <div className="todosContainerList">
          {todos.map((item, index) => (
            <Todo
              item={item}
              key={index}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
