import React from 'react';
import styles from './styles.css';

const Header = (props) => (
    <header className={styles.todo_header}>
        <h1 className="todo_header__title">{props.title}</h1>
        <p className="todo_header__intro">{props.intro}</p>
    </header>
);

export default Header;