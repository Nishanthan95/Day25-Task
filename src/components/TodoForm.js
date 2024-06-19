import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName && todoDescription) {
      const newTodo = {
        id: Date.now(),
        name: todoName,
        description: todoDescription,
        status: 'Not Completed'
      };
      addTodo(newTodo);
      setTodoName('');
      setTodoDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        placeholder="Todo Name"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        type="text"
        value={todoDescription}
        placeholder="Todo Description"
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
