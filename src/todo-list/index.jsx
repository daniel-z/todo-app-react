import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const clickOnTask = () => console.log('click');

const getCheckbox = checked => (
  <label className={styles.todo_app__check}>
    <input className={styles.todo_app__check_input} type="checkbox" checked={checked ? 'checked' : ''} />
    <span className={styles.todo_app__checkmark} />
  </label>
);

const getTaskItem = task => (
  <li onClick={clickOnTask} key={task.id} data-id={task.id} className={styles.todo_app__tasks_item}>
    {getCheckbox(task.completed)} {task.description}
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
        <a tabIndex={-10} className={styles.todo_app__action_button}>
          <i className="fas fa-check" /> Complete
        </a>
      </div>

      <span className={styles.todo_app__split_line} />

      <div className={styles.todo_app__action_group}>
        <a tabIndex={-9} className={styles.todo_app__action_button}>
          <i className="fas fa-eye-slash" /> Show all
        </a>
        <a tabIndex={-8} className={styles.todo_app__action_button}>
          <i className="fas fa-eye" /> Hide Completed
        </a>
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
  tasks: PropTypes.array,
};
export default TodoList;
