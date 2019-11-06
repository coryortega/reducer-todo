import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer"
import Todo from "./Todo.js";
import AddTodo from "./AddTodo.js";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddTodo
      add={name => dispatch({type: "add", name: name})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
      />
    ))}
  </>);
}
export default TodoApp;