import React from 'react'

//The Header codes Indecisiveness goes here
export const Header =(props) => {
    return (
    <div>
        <div className="header">
            <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
        </div>
    </div>
    );
}

Header.defaultProps ={
    title: 'Indecision App'
}