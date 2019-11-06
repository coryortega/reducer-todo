import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
    console.log(todo)
  const [mode, setMode] = useState("list");
  const [name, setName] = useState(todo.name);
  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">- {todo.name}</span>
          <button className="RemoveTodo" onClick={remove}>Remove</button>
          {/* <button className="EditTodo" onClick={() => setMode("edit")}>Edit</button> */}
        </>
        : <>
          <input value={name} onChange={e => setName(e.target.value)} className="EditTodoInput" />
          <button className="EditTodoSave" onClick={() => {edit(name); setMode("list");}}>Save</button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>Cancel</button>
        </>}
    </div>
  );
}

export default Todo;