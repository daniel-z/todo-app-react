import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Header = props => (
  <header className={styles.todo_header}>
    <h1 className={styles.todo_header__title}>{props.title}</h1>
    <p className={styles.todo_header__intro}>{props.intro}</p>
  </header>
);

Header.defaultProps = {
  intro: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
};
export default Header;
