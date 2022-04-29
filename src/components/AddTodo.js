import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "..//redux/todoSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		//input value
		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}//if input value is empty , this code block are runnig

		dispatch(//else thist code block running
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddTodo;