import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

//showing the addtodo and todolist components
const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;