import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

function Header({ statuses, status, onStatusChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className={styles.header}>
			<button
				className={styles.toggle}
				onClick={toggleDarkMode}
			>
				{!darkMode && <HiMoon />}
				{darkMode && <HiSun />}
			</button>

			<ul className={styles.statuses}>
				{statuses.map((value, index) => (
					<li key={index}>
						<button
							className={`${styles.status} ${
								status === value && styles.selected
							}`}
							onClick={() => onStatusChange(value)}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Header;
