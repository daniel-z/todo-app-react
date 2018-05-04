import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const getTaskItem = task => (
  <li key={task.id} data-id={task.id} className={styles.todo_app__tasks_item}>
    <div className={styles.todo_app__checkbox_label}>
      <input
        id={`task-${task.id}`}
        className={styles.todo_app__checkbox_input}
        type="checkbox"
        defaultChecked={task.checked}
      />
      {task.description}
    </div>
  </li>
);

const getTasksList = tasks => (
  <ul className={styles.todo_app__tasks_list}>
    {tasks.map(task => getTaskItem(task))}
  </ul>
);

const getActionButton = (text, buttonClass, tabIndex) => (
  <button tabIndex={tabIndex} className={styles.todo_app__action_button}>
    <i className={`fas ${buttonClass}`} /> {text}
  </button>
);

const getTasksActions = () => (
  <div className={styles.todo_app__tasks_actions}>
    <div className={styles.todo_app__action_group}>
      {getActionButton('Complete All', 'fa-check', 0)}
    </div>

    <span className={styles.todo_app__split_line} />

    <div className={styles.todo_app__action_group}>
      {getActionButton('Show All', 'fa-eye-slash', 0)}
      {getActionButton('Hide Completed', 'fa-eye', 0)}
    </div>
  </div>
);

const getTitle = () => (
  <h2 className={styles.todo_app__tasks_title}>
    <i className={[styles.todo_app__tasks_icon, 'fas fa-tasks'].join(' ')} /> Tasks
  </h2>
);

const TodoList = props => (
  <div className={styles.todo_app__tasks}>
    {getTitle()}
    {getTasksActions()}
    {getTasksList(props.tasks)}
  </div>
);

TodoList.defaultProps = {
  tasks: [],
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
