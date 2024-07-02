import React, { useState, useCallback } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {
    setTodos((prevTodos) => [ ...prevTodos, todo ]);
  }, []);

  const removeTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

