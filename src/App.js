import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from '../src/components/Todos';
import AddTodo from '../src/components/AddTodo';
import Header from '../src/components/layout/Header';
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
    state = {
        todos: [
            // {
            //     id: uuid.v4(),
            //     title: "take out the trash",
            //     completed: false
            // }, {
            //     id: uuid.v4(),
            //     title: "Dinner with wife",
            //     completed: false
            // }, {
            //     id: uuid.v4(),
            //     title: "Meeting with boss",
            //     completed: false
            // }
        ]
    };

    //GET TODOS FROM EXTERNAL URL API
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({
            todos: res.data
        }))

    }

    // Toggle Complete
    markComplete = id => {
        console.log(id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // Add Todo
    addTodo = title => {
        // console.log(title);
        // const newTodo = {
        //     id: uuid.v4(),
        //     title: title,
        //     completed: false
        // };

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            id: uuid.v1,
            title,
            completed: false
        })
        .then(res => this.setState({
            todos: [
                ...this.state.todos,
                res.data
            ]
        }))

        
    };

    // Delete Todo
    delTodo = id => {
        console.log(id);

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }));
    };

    render() {
        console.log(this.state.todos);
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/"
                            render={
                                props => (
                                    <React.Fragment>
                                        <AddTodo addTodo={
                                            this.addTodo
                                        }/>
                                        <Todos todos={
                                                this.state.todos
                                            }
                                            markComplete={
                                                this.markComplete
                                            }
                                            delTodo={
                                                this.delTodo
                                            }/>
                                    </React.Fragment>
                                )
                            }/>

                        <Route path="/about"
                            component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
