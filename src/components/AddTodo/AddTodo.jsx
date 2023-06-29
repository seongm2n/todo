import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

function AddTodo({ onAdd }) {
	const [text, setText] = useState('');
	const handleChange = (e) => setText(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim() === '') {
			return;
		}
		onAdd({ id: uuid4(), text, status: 'active' });
		setText('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Add Todo'
				value={text}
				onChange={handleChange}
			/>
			<button>Add</button>
		</form>
	);
}
export default AddTodo;
