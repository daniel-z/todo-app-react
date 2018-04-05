import React from 'react';
import './index.css';

const Header = (props) => (
    <header className="todo-header">
        <img src={props.logo} className="todo-header__logo" alt="logo" />
        <h1 className="todo-header__title">{props.title}</h1>
        <p className="todo-header__intro">{props.intro}</p>
    </header>
);

export default Header;