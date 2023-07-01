import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import DarkModeProvider from './context/DarkModeContext';

const statuses = ['all', 'active', 'done'];
function App() {
	// filters의 첫번째 all을 보여줌
	const [status, setStatus] = useState(statuses[0]);
	return (
		<DarkModeProvider>
			<Header
				statuses={statuses}
				status={status}
				onStatusChange={setStatus}
			/>
			<TodoList status={status} />
		</DarkModeProvider>
	);
}

export default App;
