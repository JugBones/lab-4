import React from 'react';
import List from './components/List';

function App() {
  // Define an array of task objects
  const tasks = [
    { id: 1, description: 'Learn React', completed: false },
    { id: 2, description: 'Learn JSX', completed: true },
    { id: 3, description: 'Build a React App', completed: false },
  ];

  return (
    <div>
      <List heading="My Task List" tasks={tasks} />
    </div>
  );
}

export default App;
