import React from 'react';
import styles from './styles.css';

const Footer = (props) => (
    <footer className={styles.todo_footer}>
        <p className={styles.todo_footer__text}>{props.text}</p>
    </footer>
);

export default Footer;