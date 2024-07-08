import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, markTaskComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, dueDate });
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title} {task.completed && <span className="completed-mark">✓</span>}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <div className='item-buttons'>
            <button className="complete" onClick={() => markTaskComplete(task.id)}>Complete</button>
            <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
