// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markTaskComplete = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: true } : task)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TaskForm addTask={addTask} />
      <select onChange={(e) => setFilter(e.target.value)} value={filter} className='select-btn'>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        markTaskComplete={markTaskComplete}
      />
    </div>
  );
};

export default App;
