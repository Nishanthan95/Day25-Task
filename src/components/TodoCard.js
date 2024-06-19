import React, { useState } from 'react';
import './TodoCard.css';

const TodoCard = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(todo.name);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleStatusChange = (e) => {
    const updatedTodo = { ...todo, status: e.target.value };
    editTodo(todo.id, updatedTodo);
  };

  const handleUpdate = () => {
    const updatedTodo = { ...todo, name: updatedName, description: updatedDescription, isEditing: false };
    editTodo(todo.id, updatedTodo);
    setIsEditing(false);
  };

  const statusClass = todo.status === 'Completed' ? 'status-completed' : 'status-not-completed';

  return (
    <div className="todo-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <p><strong>Name :</strong> {todo.name}</p>
          <p><strong>Description :</strong> {todo.description}</p>
          <div>
            <label>Status :</label>
            <select value={todo.status} onChange={handleStatusChange} className={statusClass}>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default TodoCard;
