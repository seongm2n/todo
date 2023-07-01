import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import styles from './Todo.module.css';

function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? 'done' : 'active';
		onUpdate({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);
	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type='checkbox'
				id={`checkbox-${id}`}
				checked={status === 'done'}
				onChange={handleChange}
			/>
			<label
				htmlFor={`checkbox-${id}`}
				className={styles.text}
			>
				{text}
			</label>
			<button
				onClick={handleDelete}
				className={styles.button}
			>
				<FiTrash2 className={styles.icon}/>
			</button>
		</li>
	);
}

export default Todo;
