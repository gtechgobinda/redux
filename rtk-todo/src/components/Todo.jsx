import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice.js";

const Todos = ({ setEditedText }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleUpdate = (id,text) => {
    setEditedText(text);
    dispatch(updateTodo({ id, newText:text }));
  };
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
          <button onClick={() => handleUpdate(todo.id,todo.text)}>Update</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
