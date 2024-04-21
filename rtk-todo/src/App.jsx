import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './features/todo/todoSlice.js';

function App() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(), // Unique ID
        text: newTodoText.trim()
      }));
      setNewTodoText('');
    }
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={e => handleUpdateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleUpdateTodo(todo.id, todo.text)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
