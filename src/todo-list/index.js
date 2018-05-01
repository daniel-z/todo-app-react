import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const getCheckbox = (checked) => (
    <input type="checkbox" checked={checked}/>
);

const getTaskItem = (task) => (
    <li key={task.id} data-id={task.id}> { getCheckbox(task.complete) } {task.description} </li>
);

const renderTasks = (tasks) => (
    tasks.map((task) => getTaskItem(task))
);

const TodoList = (props) => (
  <div className={styles.todo_app__list}>
    <h2>Tasks</h2>
    <ul>
      { renderTasks(props.tasks) }
    </ul>
  </div>
);

TodoList.propTypes = {
    tasks: PropTypes.array
};
export default TodoList;
