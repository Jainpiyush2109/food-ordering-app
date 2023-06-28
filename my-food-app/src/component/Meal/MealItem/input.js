import './input.css' ;
import React from 'react';

const Input = React.forwardRef((props , ref) => {

    return (
        <section className='input'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref = {ref} {...props.input} />
        </section>
    )
})

export default Input ;
