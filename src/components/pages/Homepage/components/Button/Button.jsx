import React from 'react';

const Button = ({ value, color } = props) => {
    return (
        <button className={`btn btn-${color}`}>
            {value}
        </button>
    )
}

export default Button
