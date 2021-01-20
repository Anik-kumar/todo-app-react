import React, { Component } from 'react';
import TodoEdit from "../TodoEdit/TodoEdit";
import "./todo.css";

class Todo extends Component {
	state = {
    isEditEnable: false,
    isCompleted: this.props.completed
	};

	handleTitleClick = (evt) => {
		this.setState({
			isCompleted: !this.state.isCompleted,
    }, () => {
      this.props.completedTodo(this.state.isCompleted, this.props.id);
    });
    
	};

	OnClickEdit = () => {
		// console.log();
		this.setState({
			isEditEnable: true,
		});
	};

	OnClickDelete = (key) => {
		this.props.removeTodo(key);
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
					<div className="todo-container2">
						<div
							className={this.state.isCompleted ? "completed" : ""}
							onClick={this.handleTitleClick}
						>
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
					</div>
				</React.Fragment>
			);
		}

		return result;
	}
}
 
export default Todo;