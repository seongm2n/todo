import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList({ status }) {
	// 인자와 호출하는 내용이 동일하다면 함수의 이름(참조값)만 전달해도 같음
	// useState(초기화하는함수) -> 함수의 레퍼런스만 전달
	// useState(()=>초기화하는함수())->위와 동일함, 단 콜백함수르 만듦(단점을 꼽자면, 불필요한 함수가 만들어진다는 단점)
	const [todos, setTodos] = useState(readTodosFormLocalStorage);
	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};
	const handleDelete = (deleted) => {
		setTodos(todos.filter((t) => t.id !== deleted.id));
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

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

function readTodosFormLocalStorage() {
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}

function getStatusedItems(todos, status) {
	if (status === 'all') {
		return todos;
	}
	return todos.filter((todo) => todo.status === status);
}
