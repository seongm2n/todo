import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList({ status }) {
	const [todos, setTodos] = useState([]);

	const saveTodosToLocalStorage = (todos) => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
		saveTodosToLocalStorage([...todos, todo]);
	};
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
		saveTodosToLocalStorage(
			todos.map((t) => (t.id === updated.id ? updated : t))
		);
	};
	const handleDelete = (deleted) => {
		setTodos(todos.filter((t) => t.id !== deleted.id));
		saveTodosToLocalStorage(todos.filter((t) => t.id !== deleted.id));
	};

	useEffect(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	const statused = getStatusedItems(todos, status);
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
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
