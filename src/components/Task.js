import React from 'react';

// Task component that represents a single task item
function Task(props) {
  return (
    <li>
      <input type="checkbox" readOnly checked={props.completed} />
      {props.description}
    </li>
  );
}

export default Task;
