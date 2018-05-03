import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import TodoList from './todo-list';
import Footer from './footer';

import styles from './App.css';

const api = {};
api.baseUrl = 'http://localhost:3000/api';
// api.baseUrl = 'http://todo-api-tk.herokuapp.com/api';
api.endpoints = {};
api.endpoints.todos = '/todos';
api.getUrl = endpoint => api.baseUrl + api.endpoints[endpoint];

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };

    // const updateTasks = (response) => {
    //   const tasks = [...this.state.tasks];
    //   tasks.push(response.data);
    //   this.setState({tasks});
    // };
    // const newTask = {
    //   description: 'A new task',
    //   completed: false,
    // };
    // axios.post(api.getUrl('todos'), newTask)
    //     .then(updateTasks)
    //     .catch((error) => console.log(error));

    axios.get(api.getUrl('todos'))
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log('render state = ', this.state);
    return (
      <div className={styles.todo_app}>
        <Header
          title="ToDo React App"
          intro="This is a simple Todo App built with React"
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={styles.todo_app__content} >
                <TodoList tasks={this.state.tasks} />
              </div>
            </div>
          </div>
        </div>
        <Footer text="ToDo React App footer." />
      </div>
    );
  }
}

export default App;
