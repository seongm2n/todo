import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styles from './AddTodo.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

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
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<input
				className={styles.input}
				type='text'
				placeholder='Add Todo'
				value={text}
				onChange={handleChange}
			/>
			<button className={styles.button}><AiOutlinePlus className={styles.add}/></button>
		</form>
	);
}
export default AddTodo;
