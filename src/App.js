import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import TodoList from './todo-list';
import logo from './assets/logo.svg';

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.loadTasks = this.loadTasks.bind(this);
        this.state = { tasks: [] };

        axios.get('https://private-7c55ef-todo108.apiary-mock.com/todos')
            .then((response) => {
                this.loadTasks(response.data);
            })
            .catch((error) => console.log(error));
    }

    loadTasks(tasks) {
        this.setState({tasks});
    }

    render() {
        return (
              <div className="todo-app">
                    <Header logo={logo} intro={"To get started, edit and save to reload."} />
                    <div className="todo-app__content">
                        <TodoList tasks={this.state.tasks}/>
                    </div>
              </div>
        );
    }
}

export default App;
