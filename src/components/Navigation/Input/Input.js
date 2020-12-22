import React from 'react';
import './input.css';

function Input(props) {

    const changeHandler = (e) => {
        let value = e.target.value;
        props.setData(value);
    } 

    return (
        <input type="text" placeholder="Name of Comic" onChange={changeHandler}/>
    )
}

export default Input;