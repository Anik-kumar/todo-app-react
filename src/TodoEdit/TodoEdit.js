import React, { Component } from 'react';

import "./todoEdit.css";

class TodoEdit extends Component {

	handleOnSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt.target.updatedTask.id);
    this.props.handleOnSubmit(evt.target.updatedTask.value, this.props.id);
	};

	render() {
		return (
			<div className="todoedit">
				<form className="todoedit-form" onSubmit={this.handleOnSubmit}>
					<input
						type="text"
						name="updatedTask"
            className="form-control edit-input"
            defaultValue={this.props.task}
					/>
					<button type="submit" className="btn btn-sm btn-success">
						Save
					</button>
				</form>
			</div>
		);
	}
}
 
export default TodoEdit;