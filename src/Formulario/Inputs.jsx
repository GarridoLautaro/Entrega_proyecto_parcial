function Inputs ( props ) {
    return (
        <>
            <label htmlFor={props.clave}>{props.titulo}</label>
            <input type={props.type} value={props.valor} name={props.name} id={props.clave} onChange={props.onChange} />
        </>
    );
}

export default Inputs;