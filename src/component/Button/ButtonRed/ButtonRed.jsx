import React from 'react';
import './ButtonRed.css';

const ButtonRed = ({name,className}) => {
    
    return <>
    <button className={`login-btn ${className ? className : "hovering"}`}>{name}</button>
    </>
};

export default ButtonRed;