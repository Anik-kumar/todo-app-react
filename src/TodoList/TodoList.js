import React, { Component } from 'react';
import { v4 as uuid } from "uuid";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";
import "./todoList.css";


class TodoList extends Component {
	state = {
		todos: [{ title: "buy egg", id: uuid() }, { title: "buy bread", id: uuid() }],
  };
  
	handleNewTodoForm = (newValue) => {
		// console.log(`${newValue} from todolist`);
    const newTodos = [...this.state.todos, { title: newValue, id: uuid() }];
    this.setState({
      todos: newTodos
    });
  };
  
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  handleUpdatedTodoValue = (value, id) => {
    // console.log("TodoList ", value, id);
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, title: value}
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

	render() {
		return (
			<div className="todolist">
				<h2>Todo List</h2>
				<div className="todolist-todo-container">
					{this.state.todos.map(todo => (
            <Todo 
              title={todo.title} 
              key={todo.id} 
              id={todo.id}
              removeTodo={this.handleDeleteTodo}
              updatedTodo={this.handleUpdatedTodoValue}
            />
					))}
				</div>
				<div className="todolist-todo-form-container">
					<NewTodoForm submitForm={this.handleNewTodoForm} />
				</div>
			</div>
		);
	}
}
 
export default TodoList;