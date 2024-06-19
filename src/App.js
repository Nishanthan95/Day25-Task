import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import StatusFilter from './components/StatusFilter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => 
    statusFilter === 'All' || todo.status === statusFilter
  );

  return (
    <div className="App">
      <h1>My todo</h1>
      <TodoForm addTodo={addTodo} />
      <StatusFilter setStatusFilter={setStatusFilter} />
      <TodoList todos={filteredTodos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
