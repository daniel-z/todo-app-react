import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import TodoList from './todo-list';
// import logo from './assets/logo.svg';

import './App.css';

const api = {};
api.baseUrl = 'http://localhost:3000/api';
// api.baseUrl = 'http://todo-api-tk.herokuapp.com/api';
api.endpoints = {};
api.endpoints.todos = '/todos';
api.getUrl = function (endpoint) {
    return api.baseUrl + api.endpoints[endpoint];
};

class App extends Component {
    constructor() {
        super();
        this.state = { tasks: [] };

        const newTask = {
            "description": "A new task",
            "completed": false
        };

        const updateTasks = (response) => {
            const tasks = [...this.state.tasks];
            tasks.push(response.data);
            this.setState({tasks});
        };

        // axios.post(api.getUrl('todos'), newTask)
        //     .then(updateTasks)
        //     .catch((error) => console.log(error));

        axios.get(api.getUrl('todos'))
            .then((response) => {
                this.setState({tasks: response.data});
            })
            .catch((error) => console.log(error));
    }

    render() {
        console.log('render state = ',this.state);
        return (
              <div className="todo-app">
                    <Header intro={"To get started, edit and save to reload."} />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="todo-app__content">
                                    <TodoList tasks={this.state.tasks}/>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
        );
    }
}

export default App;
