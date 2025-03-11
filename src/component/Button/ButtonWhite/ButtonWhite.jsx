import React from 'react';
import './ButtonWhite.css';

const ButtonWhite = ({name,className,color}) => {
    
    return <>

    <button style={{ backgroundColor: color }} className={`ButtonWhite ${className ? className : "hovering" }`}>{name}</button>


    </>
};

export default ButtonWhite;
