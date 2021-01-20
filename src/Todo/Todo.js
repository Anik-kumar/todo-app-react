import React, { Component } from 'react';
import TodoEdit from "../TodoEdit/TodoEdit";
import "./todo.css";

class Todo extends Component {
	state = {
		titleText: "line-through",
		isLineThrough: false,
		isEditEnable: false,
		style: {
			textDecoration: "line-through",
			color: "gray",
		},
	};

	handleTitleClick = (evt) => {
		console.log(evt.target);
		console.log(this.state.isLineThrough);
		if (!this.state.isLineThrough) {
			evt.target.style.textDecoration = this.state.style.textDecoration;
			evt.target.style.color = this.state.style.color;
		} else {
			evt.target.removeAttribute("style");
		}
		console.log(this.state.isLineThrough);
		this.setState({
			isLineThrough: !this.state.isLineThrough,
		});
	};

	OnClickEdit = () => {
		console.log();
		this.setState({
			isEditEnable: true,
		});
	};

	OnClickDelete = (key) => {
		this.props.removeTodo(key);
	};

	handleUpdate = (evt) => {
		evt.preventDefault();
		console.log(evt.task.value);
	};

	handleOnCancel = () => {
		this.setState({
			isEditEnable: false,
		});
	};

	handleTodoEditOnSubmit = (value, id) => {
    // console.log("Todo ", value, id);
    this.props.updatedTodo(value, id);
    this.setState({
			isEditEnable: false,
		});
  }

	render() {
		let result;

		if (this.state.isEditEnable) {
			result = (
				<div className="todo-edit">
					<TodoEdit task={this.props.title} handleOnSubmit={this.handleTodoEditOnSubmit} id={this.props.id} />
					<button
						type="button"
						className="btn btn-sm btn-warning"
						onClick={this.handleOnCancel}
					>
						Cancel
					</button>
				</div>
			);
		} else {
			result = (
				<React.Fragment>
					<div className="todo-title" onClick={this.handleTitleClick}>
						{this.props.title}
					</div>
					<div className="todo-btns">
						<button
							className="btn btn-sm btn-outline-danger"
							onClick={this.OnClickEdit}
						>
							Edit
						</button>
						<button
							className="btn btn-sm btn-outline-danger"
							onClick={() => this.OnClickDelete(this.props.id)}
						>
							Delete
						</button>
					</div>
				</React.Fragment>
			);
		}

		return result;
	}
}
 
export default Todo;