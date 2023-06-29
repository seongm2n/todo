import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

function Todo({ todo, onUpdate, onDelete }) {
	const { text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? 'done' : 'active';
		onUpdate({ ...todo, status });
	};
  
	const handleDelete = () => onDelete(todo);
	return (
		<li>
			<input
				type='checkbox'
				id='checkbox'
				checked={status === 'done'}
				onChange={handleChange}
			/>
			<label htmlFor='checkbox'>{text}</label>
			<button onClick={handleDelete}>
				<FiTrash2 />
			</button>
		</li>
	);
}

export default Todo;
