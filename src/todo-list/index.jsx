import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const getLabel = task => (
  <div className={styles.todo_app__checkbox_label}>
    <input
      id={`task-${task.id}`}
      className={styles.todo_app__checkbox_input}
      type="checkbox"
      defaultChecked={task.checked}
    />
    {task.description}
  </div>
);

const getTaskItem = task => (
  <li key={task.id} data-id={task.id} className={styles.todo_app__tasks_item}>
    {getLabel(task)}
  </li>
);

const renderTasks = tasks => tasks.map(task => getTaskItem(task));

const TodoList = props => (
  <div className={styles.todo_app__tasks}>
    <h2 className={styles.todo_app__tasks_title}>
      <i className={[styles.todo_app__tasks_icon, 'fas fa-tasks'].join(' ')} /> Tasks
    </h2>
    <div className={styles.todo_app__tasks_actions}>

      <div className={styles.todo_app__action_group}>
        <button tabIndex="0" className={styles.todo_app__action_button}>
          <i className="fas fa-check" /> Complete
        </button>
      </div>

      <span className={styles.todo_app__split_line} />

      <div className={styles.todo_app__action_group}>
        <button tabIndex="0" className={styles.todo_app__action_button}>
          <i className="fas fa-eye-slash" /> Show all
        </button>
        <button tabIndex="0" className={styles.todo_app__action_button}>
          <i className="fas fa-eye" /> Hide Completed
        </button>
      </div>
    </div>
    <ul className={styles.todo_app__tasks_list}>
      {renderTasks(props.tasks)}
    </ul>
  </div>
);

TodoList.defaultProps = {
  tasks: [],
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
