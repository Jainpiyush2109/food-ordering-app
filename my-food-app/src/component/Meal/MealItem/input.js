import './input.css' ;

function Input(props){

    return (
        <section className='input'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </section>
    )
}

export default Input ;
