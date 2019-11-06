import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [name, setName] = useState("");
  return (
    <div className="AddTodo">
      <input value={name} onChange={e => setName(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(name); setName("")}}>Add</button>
    </div>
  );
}

export default AddTodo;