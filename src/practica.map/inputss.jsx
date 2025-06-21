function Inputss ({tipo, titulo}) {
    return (
        <>
        <label htmlFor="titulo">{titulo}</label>
        <br />
        <input type={tipo} name="tit"/>
        </>
    );
}

export default Inputss;