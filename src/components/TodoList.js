import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
