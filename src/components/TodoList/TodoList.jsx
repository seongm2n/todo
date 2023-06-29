import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

function TodoList({ status }) {
	const [todos, setTodos] = useState([
		{ id: '123', text: '카페가기', status: 'active' },
		{ id: '124', text: '공부하기', status: 'active' },
		{ id: '125', text: '맛있는거 먹기', status: 'active' },
	]);

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};
	const handleDelete = (deleted) => {
		setTodos(todos.filter((t) => t.id !== deleted.id));
	};

	const statused = getStatusedItems(todos, status);
	return (
		<section>
			<ul>
				{statused.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}
export default TodoList;

function getStatusedItems(todos, status) {
	if (status === 'all') {
		return todos;
	}
	return todos.filter((todo) => todo.status === status);
}
