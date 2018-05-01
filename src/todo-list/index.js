import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const getTaskItem = (task) => (
    <li key={task.id}>
        {task.complete === true ? 'complete' : 'incomplete' } {" "} / {task.description} ({task.id})
    </li>
);

const renderTasks = (tasks) => (
    tasks.map((task) => getTaskItem(task))
);

const TodoList = (props) => (
  <div className="todo-app__list">
    <ul>
      { renderTasks(props.tasks) }
    </ul>
  </div>
);

TodoList.propTypes = {
    tasks: PropTypes.array
};
export default TodoList;
