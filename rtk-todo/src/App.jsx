import React from "react";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todo.jsx";

const App = () => {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
