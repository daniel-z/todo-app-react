import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const getCheckbox = (checked) => (
    <label className={styles.todo_app__check}>
        <input className={styles.todo_app__check_input} type="checkbox" checked={checked ? "checked" : ""}/>
        <span className={styles.todo_app__checkmark}></span>
    </label>
);

const getTaskItem = (task) => (
    <li key={task.id} data-id={task.id} className={styles.todo_app__tasks_item}>
        { getCheckbox(task.completed) } {task.description}
    </li>
);

const renderTasks = (tasks) => (
    tasks.map((task) => getTaskItem(task))
);

const TodoList = (props) => (
  <div className={styles.todo_app__tasks}>
    <h2 className={styles.todo_app__tasks_title}>
        <i className={[styles.todo_app__tasks_icon, 'fas fa-tasks'].join(' ')}></i> Tasks
    </h2>
    <div className={styles.todo_app__tasks_actions}>

        <div className={styles.todo_app__action_group}>
            <a tabIndex={1} className={styles.todo_app__action_button}>
                <i class="fas fa-check"></i> Complete
            </a>
        </div>

        <span className={styles.todo_app__split_line}></span>

        <div className={styles.todo_app__action_group}>
            <a tabIndex={2} className={styles.todo_app__action_button}>
                <i class="fas fa-eye-slash"></i> Show all
            </a>
            <a tabIndex={3} className={styles.todo_app__action_button}>
                <i class="fas fa-eye"></i> Hide Completed
            </a>
        </div>
    </div>
    <ul className={styles.todo_app__tasks_list}>
      { renderTasks(props.tasks) }
    </ul>
  </div>
);

TodoList.propTypes = {
    tasks: PropTypes.array
};
export default TodoList;
