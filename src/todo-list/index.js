import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class TodoList extends Component {

  getTaskItem(task) {
    return (
        <li key={task.id}>
            {task.complete === true ? 'complete' : 'incomplete' } - {task.description} ({task.id})
        </li>
    );
  }

  renderTasks(tasks) {
      return tasks.map((task) => this.getTaskItem(task));
  }

  render() {
    return (
      <div className="todo-app__list">
        <ul>
          { this.renderTasks(this.props.tasks) }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
    tasks: PropTypes.array
};
export default TodoList;
