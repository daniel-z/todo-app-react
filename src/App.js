import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import TodoList from './todo-list';
// import logo from './assets/logo.svg';

import './App.css';

const api = {};
api.baseUrl = 'https://todo-api-tk.herokuapp.com/api';
api.endpoints = {};
api.endpoints.todos = '/todos';
api.getUrl = function (endpoint) {
    return api.baseUrl + api.endpoints[endpoint];
};

class App extends Component {

    constructor() {
        super();
        this.state = { tasks: [] };

        axios.post(api.getUrl('todos'), {
                "description": "A new task",
                "completed": false
            })
            .then((response) => {
                const tasks = this.state.tasks;
                tasks.push(response.data);
                this.setState({tasks});
            })
            .catch((error) => console.log(error));

        axios.post(api.getUrl('todos'), {
                "id": 83515750,
                "description": "A new task",
                "completed": false
            })
            .then((response) => {
                const tasks = this.state.tasks;
                tasks.push(response.data);
                this.setState({tasks});
            })
            .catch((error) => console.log(error));


        axios.get('https://private-7c55ef-todo108.apiary-mock.com/todos')
            .then((response) => {
                this.setState({tasks: response.data});
            })
            .catch((error) => console.log(error));

    }

    render() {
        console.log('render state = ',this.state);
        return (
              <div className="todo-app">
                    {/*<Header logo={logo} intro={"To get started, edit and save to reload."} />*/}
                    <Header intro={"To get started, edit and save to reload."} />
                    <div className="todo-app__content">
                        <TodoList tasks={this.state.tasks}/>
                    </div>
              </div>
        );
    }
}

export default App;
