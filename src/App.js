import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const statuses = ['all', 'active', 'done'];
function App() {
	// filters의 첫번째 all을 보여줌
	const [status, setStatus] = useState(statuses[0]);
	return (
		<>
			<Header
				statuses={statuses}
				status={status}
				onStatusChange={setStatus}
			/>
			<TodoList status={status} />
		</>
	);
}

export default App;
