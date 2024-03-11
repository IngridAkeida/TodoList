import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      //function to handle the change of the input
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      //function to handle the update todo
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="buttonUpdate" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <input type="checkbox" onClick={() => onDelete(item.id)} />
        <span className="todoOrder">
          {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
        </span>
        <button className="buttonEdit" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className="buttonDelete" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="todo-card">{isEdit ? <FormEdit /> : <TodoElement />}</div>
  );
}
