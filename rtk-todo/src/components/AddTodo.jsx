import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

const AddTodo = ({ editedText,newTodoText,setNewTodoText }) => {
  const [input, setInput] = useState(editedText);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(editedText);
  }, [editedText]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
    setNewTodoText("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          // value={input}
          value={newTodoText !== "" ? newTodoText : input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </>
  );
};

export default AddTodo;
