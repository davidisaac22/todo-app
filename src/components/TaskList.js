import React from 'react';
import TaskItem from './TaskItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask, markTaskComplete }) => {
  return (
    <TransitionGroup>
      {tasks.map(task => (
        <CSSTransition key={task.id} timeout={500} classNames="task">
          <TaskItem
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            markTaskComplete={markTaskComplete}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
