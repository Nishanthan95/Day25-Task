import React from 'react';

const StatusFilter = ({ setStatusFilter }) => {
  return (
    <div>
      <label>Status Filter :</label>
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;
