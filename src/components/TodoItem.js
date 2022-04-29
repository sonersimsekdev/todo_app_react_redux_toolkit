import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/todoSlice";


//todoitem and actions
const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(//deleting task using dispatch
			deleteTask({
				id: id
			})
		)
	}

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;