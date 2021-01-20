import React, { Component } from 'react';
import "./newTodoForm.css";

class NewTodoForm extends Component {
	state = {};

	formSubmit = (e) => {
    e.preventDefault();
    // console.log(`${e} from newtodoform`);
    if (e.target.todo.value) {
      this.props.submitForm(e.target.todo.value);
			e.target.reset();
    }
  }

	render() {
		return (
			<div className="new-todo-form">
				<h5 className="new-todo-form-header">New Todo</h5>
				<form className="todo-form" onSubmit={this.formSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control input-field"
              placeholder="Add Todo"
              name="todo"
              id="todo"
						/>
						<input
							type="submit"
							value="Add Todo"
							className="btn btn-md btn-danger"
						/>
					</div>
				</form>
			</div>
		);
	}
}
 
export default NewTodoForm;