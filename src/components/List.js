import React from 'react';
import Task from './Task';

// List component that displays a list of tasks
function List(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {props.tasks.map((task) => (
          <Task key={task.id} description={task.description} completed={task.completed} />
        ))}
      </ul>
    </div>
  );
}

export default List;
