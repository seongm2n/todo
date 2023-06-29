import React from 'react';
import styles from './Header.module.css';

function Header({ statuses, status, onStatusChange }) {
	return (
		<header className={styles.header}>
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
