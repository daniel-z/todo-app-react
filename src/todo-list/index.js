import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class TodoList extends Component {
  constructor(props) {
      super(props);

      this.state = {
          tasks: []
      };
  }

  render(props) {
    return (
      <div className="todo-app__list">
          {console.log('list.render()', this.state.tasks)}
      </div>
    );
  }
}

TodoList.propTypes = {
    tasks: PropTypes.array
};
export default TodoList;
