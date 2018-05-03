import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Footer = props => (
  <footer className={styles.todo_footer}>
    <p className={styles.todo_footer__text}>{props.text}</p>
  </footer>
);

Footer.defaultProps = {
  text: '',
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
