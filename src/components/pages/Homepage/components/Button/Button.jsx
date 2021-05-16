import React from 'react';

const Button = ({ value, color, onClick } = props) => {
    return (
        <button className={`btn btn-${color}`} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button;
